import React, { useEffect, userSelector, useState } from 'react'
import db from '../firebase';
import "./PlanScreen.css";
import { selectUser } from '../features/userSlice';
//import {loadStrip} from '@stripe/stripe-js';


function PlanScreen() {
   const plans = [
    {
        name: 'Basic',
        price: '500/-',
        desc:'480p+HD (Trailer only)',
        subscribe: true
    },
    {
        name: 'Standard',
        price: '1000/-',
        desc:'720p',
        subscribe: false
    },
    {
        name: 'Premium',
        price: '1500/-',
        desc:'1080p',
        subscribe: false
    },
    {
        name: 'Premium+4k',
        price: '2500/-',
        desc:'1080p + 4k',
        subscribe: false
    }
   ];

   //stripe code//
    // const [products, setProducts] = setProducts([]);
    // const user = userSelector(selectUser);
    // const [subscription, setSubstcription] = useState(null);

    // useEffect(()=>{
    //     db.collection('customers')
    //     .doc(user.uid)
    //     .collection('subscription')
    //     .get()
    //     .then(querySnapshot=>{
    //         querySnapshot.forEach(async subscription =>{
    //             setSubstcription({
    //                 role: subscription.data().role,
    //                 current_period_end:subscription.data().current_period_end.seconds,
    //                 cuurent_period_start: subscription.data().cuurent_period_start.seconds,
    //             });
    //         });
    //     });
    // },[]);

    // useEffect(()=>{
    //     db.collection("products").where('active', "==", true)
    //     .get().then(querySnapshot => {
    //         const products = {};
    //         querySnapshot.forEach(async productDoc =>{
    //             products[productDoc.id] =productDoc.data();
    //             const priceSnap = await productDoc.ref.collection("prices").get();
    //             priceSnap.docs.forEach( price =>{
    //                 products[productDoc.id].prices = {
    //                     priceId: price.id,
    //                     priceData: price.data()
    //                 }
    //             })
    //         })
    //         setProducts(products);
    //     });
    // },[]);

    // const loadCheckout = async( priceId)=>{
    //     const docRef = await db.collection('customers')
    //     .doc(user.uid)
    //     .collection('')
    //     .add({
    //         price:priceId,
    //         success_url:window.location.origin,
    //         cancel_url: window.location.origin
    //     });
    //     docRef.onSnapshot(async(snap)=>{
    //         const {error, sessionId} = snap.data();
    //         if(error){
    //             alert(`An error occured: ${error.message}`);
    //         }
    //         if(sessionId){
    //             //we have session, redirect to checkout 
    //             //init stripe
    //             const stripe = await loadStripe("key goes here from stripe");
    //             stripe.redirectToCheckout({sessionId});
    //         }
    //     });
    // };

    return (
        // <div className="planScreen" >
        //     <br/>
        //     {subscription && <p>Renewal Dste: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}  </p>}
        //     {Object.entries(products).map(([productId, productData]) => {
        //         // add some logic to check if the user's subscription is active...
        //         const isCurrentPackage = productData.name?.toLowerCase()
        //         .includes(subscription?.role);
                
        //         return(
        //             <div key={productId} className={`${ isCurrentPackage && "planScreen__plan--diabled"} planScreen__p lan`}>
        //                 <div className="planScreen__info">
        //                     <h5>{productData.name}</h5>
        //                     <h6>{productData.description}</h6>
        //                 </div>
        //         <button onClick={()=> !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
        //             {isCurrentPackage?"Current Package" : 'Subscribe'}
        //             </button>
        //             </div>
        //         )
        //     })}
        // </div>
        <div className="planScreen">
            <br/>
            <p>Renewal Date:</p>
            {
                plans.map((plan, index)=>{
                    return(
                        <div key={index} className="planScreen__plan">
                            <div className="planScreen__info">
                                <h4>{plan.name}</h4>
                                <h6>{plan.desc}</h6>
                                <h6>Price : ${plan.price}</h6>
                            </div>
                            <button className={`${plan.subscribe && "planScreen__plandisabled"} planScreen__plan` } >Subscribe</button>
                        </div>
                    )     
                })   
            }
        </div>

    )
}

export default PlanScreen
