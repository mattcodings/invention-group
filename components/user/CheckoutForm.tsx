"use client";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
type CheckoutFormProps = {
  clientSecret: string;
};
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);
// need id as a parameter to change purchase boolean
const CheckoutForm = ({ clientSecret }: CheckoutFormProps) => {
  return (
    <Elements options={{ clientSecret }} stripe={stripePromise}>
      <Form />
    </Elements>
  );
};

function Form() {
  const stripe = useStripe();
  const elements = useElements();
  return <PaymentElement />;
}
export default CheckoutForm;
