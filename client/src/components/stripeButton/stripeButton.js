import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_reQMs5SU2cqEBgyTHdAlwmQS00Lc5KtSzF';

  const onToken = token => {
    axios({
      method: 'post',
      url: 'payment',
      data: {
        token,
        amount: priceForStripe
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      description={`Your total is $${price}`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
