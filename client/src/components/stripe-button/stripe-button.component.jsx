import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // stripe accepts price on cents so we multiply by 100
  const publishableKey =
    'pk_test_51ItxexE5wEQ6TzUlqOxuxugTtj2xyIYLRKbm0qqOuuHXuRTCcbJeg4vP6YAmuy3M8lljcWJpLfZjbPh16qVwY8rO001lwL5mgX';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        console.log(response);
        alert('payment successful');
      })
      .catch((error) => {
        console.log('Payment error', JSON.parse(error));
        alert(
          `There was an issue with your payment.
           Please make sure to use the provided credit card`
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
