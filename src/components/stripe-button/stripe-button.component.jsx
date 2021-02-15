import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeCheckoutButton({price}) {
    const priceForStripe = price*100
    const publishableKey = "pk_test_51IL4Y5BJrp2mymXIxuaNxYwp4zAsV7rlS1GL862zajnRGlSg9pB66obUGZS99vAnjoqBlWNLMbSynj7Knv1fYE5w00miq6Otvc"
    const onToken=(token)=>{
        // console.log(token)
        alert("Payment Successful")
    }
    return (
        <div>
            <StripeCheckout 
                label="Pay Now"
                name="Sympa Clothing"
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton
