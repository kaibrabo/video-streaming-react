import { useState, useEffect } from "react";
import { db } from "../firebase";
import "./PlansScreen.css";

function PlansScreen() {
	const [products, setProducts] = useState([]);

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

	console.log(products);
	const loadCheckout = async (priceId) => {};

	return (
		<div className="plans_screen">
			{Object.entries(products)
				.reverse()
				.map(([productId, productData]) => {
					// Logic to check if users subscription is active
					return (
						<div className="plans_screen_plans" key={productId}>
							<div className="plans_screen_plans_info">
								<h5>{productData.name}</h5>
								<h6>{productData.description}</h6>
							</div>
							<button
								onClick={() =>
									loadCheckout(productData?.prices?.priceId)
								}
							>
								choose
							</button>
						</div>
					);
				})}
		</div>
	);
}

export default PlansScreen;
