import { useState, useEffect } from "react";
import {db} from "../firebase";
import "./PlansScreen.css";

function PlansScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        db.collection("products")
            .where("active", "==", true)
            .get()
            .then(qs => {
                const _products = {};

                qs.forEach(async productDoc => {
                    _products[productDoc.id] = productDoc.data()
                    const priceSnap = await productDoc.ref.collection('prices').get();
                    priceSnap.docs.forEach(price => {
                        _products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                        }
                    })
                });

                setProducts(_products)
            });
    }, []);
    
    console.log(products);

    return <div className="plans_screen"></div>;
}

export default PlansScreen;
