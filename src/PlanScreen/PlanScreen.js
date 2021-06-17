import React, { useEffect } from 'react'
import db from '../firebase';
import "./PlanScreen.css";

function PlanScreen() {
    const [products, setProducts] = setProducts([]);

    useEffect(()=>{
        db.collection("products").where('active', "==", true)
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc =>{
                products[productDoc.id] =productDoc.data();
                const priceSnap = await productDoc.ref.collection("prices").get();
                priceSnap.docs.forEach( price =>{
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            })
            setProducts(products);
        });
    },[]);

    const loadCheckout = async( priceId)=>{
        
    };

    return (
        <div className="planScreen">
            {Object.entries(products).map(([productId, productData]) => {
                // add some logic to check if the user's subscription is active...
                return(
                    <div className="plamScreen__plan">
                        <div className="planScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={()=>loadCheckout(productData.prices.priceId)}>Subscribe</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlanScreen
