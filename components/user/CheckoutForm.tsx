"use client";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FormEvent, useState } from "react";
type CheckoutFormProps = {
  clientSecret: string;
};
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);
// need id as a parameter to change purchase boolean
const CheckoutForm = ({ clientSecret }: CheckoutFormProps) => {
  return (
    <div className="border-8 w-[500px] mx-auto my-20 p-8 rounded-lg border-primary">
      <div className="text-3xl">$150.00</div>
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form />
      </Elements>
    </div>
  );
};

function Form() {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (stripe == null || elements == null) return;

    setIsLoading(true);
    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/successful-purchase`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("Unknown Error Occurred");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <form onSubmit={handleSubmit}>
      {errorMessage ? <div>{errorMessage}</div> : ""}
      <PaymentElement />
      <button
        type="submit"
        className="btn"
        disabled={stripe == null || elements == null || isLoading}
      >
        {isLoading ? "Loading..." : "Purchase"}
      </button>
    </form>
  );
}
export default CheckoutForm;
