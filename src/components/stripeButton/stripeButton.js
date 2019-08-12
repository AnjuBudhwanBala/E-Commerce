import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_reQMs5SU2cqEBgyTHdAlwmQS00Lc5KtSzF';

  const onToken = () => {
    alert('payment Successfull');
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
