import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db } from "../firebase";
import "./PlansScreen.css";

function PlansScreen() {
	const [products, setProducts] = useState([]);
	const user = useSelector(selectUser);
	const [subscription, setSubscription] = useState(null);

	// List available products and prices
	useEffect(() => {
		db.collection("products")
			.where("active", "==", true)
			.get()
			.then((qs) => {
				const _products = {};

				qs.forEach(async (productDoc) => {
					_products[productDoc.id] = productDoc.data();
					const priceSnap = await productDoc.ref
						.collection("prices")
						.get();
					priceSnap.docs.forEach((price) => {
						_products[productDoc.id].prices = {
							priceId: price.id,
							priceData: price.data(),
						};
					});
				});

				setProducts(_products);
			});
	}, []);

	// Set subscription
	useEffect(() => {
		db.collection("customers")
			.doc(user.uid)
			.collection("subscriptions")
			.get()
			.then((qs) => {
				qs.forEach(async (sub) => {
					const s = sub.data();
					setSubscription({
						role: s.role,
						current_period_start: s.current_period_start.seconds,
						current_period_end: s.current_period_end.seconds,
					});
				});
			});
	}, [user.uid]);

	console.log("sub:", subscription);

	// Process plan checkout
	const loadCheckout = async (priceId) => {
		const docRef = await db
			.collection("customers")
			.doc(user.uid)
			.collection("checkout_sessions")
			.add({
				price: priceId,
				success_url: window.location.origin,
				cancel_url: window.location.origin,
			});

		docRef.onSnapshot(async (snap) => {
			const { error, sessionId } = snap.data();
			if (error) alert(`An error has occured: ${error.message}`);

			if (sessionId) {
				const stripe = await loadStripe(
					"pk_test_BBC1OG0zdp0BaELhgTcmVG2o"
				);
				stripe.redirectToCheckout({ sessionId });
			}
		});
	};

	return (
		<div className="plans_screen">
            <br/>
            {subscription && <p>Renewal: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
			{Object.entries(products).map(([productId, productData]) => {
				// Logic to check if users subscription is active
				const currentPackage = productData.name
					?.toLowerCase()
					.includes(subscription?.role);

				return (
					<div
						className={`${
							currentPackage && "plans_screen_plans--disabled"
						} plans_screen_plans`}
						key={productId}
					>
						<div className="plans_screen_plans_info">
							<h5>{productData.name}</h5>
							<h6>{productData.description}</h6>
						</div>
						<button
							onClick={() =>
								!currentPackage &&
								loadCheckout(productData?.prices?.priceId)
							}
						>
							{currentPackage ? "currently.." : "subscribe"}
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default PlansScreen;
