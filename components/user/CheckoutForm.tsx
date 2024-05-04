"use client";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import { FormEvent, useState } from "react";

/* This page will appear after an invention has been submitted and approved by an admin
Once the user enters test stripe info, the page will show the SalesBarChart component */

type CheckoutFormProps = {
  clientSecret: string;
};
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);
// need id as a parameter to change purchase boolean
const CheckoutForm = ({ clientSecret }: CheckoutFormProps) => {
  return (
    <div className="border-8 md:w-[500px] mx-auto mb-10 p-2 pb-8 rounded-lg border-primary">
      <p className="text-[1.25em] mb-8">
        Your invention has been approved! The next step is to make a payment.
        Once you have made this payment, you will start to receive updates on
        your inventions sales.
      </p>
      <div className="text-4xl text-center mb-8">Total: $150.00</div>
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
          return_url: `/stripe/successful-purchase`,
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
    <form
      onSubmit={handleSubmit}
      className="border-1 rounded-lg border-neutral p-8 bg-secondary"
    >
      {errorMessage ? <div>{errorMessage}</div> : ""}

      <PaymentElement />
      <div className="flex justify-center">
        <Link href="/stripe/successful-purchase">
          <button
            type="submit"
            className="btn mt-8 bg-neutral hover:bg-primary hover:border-neutral hover:text-neutral"
            disabled={stripe == null || elements == null || isLoading}
          >
            {isLoading ? "Loading..." : "Purchase"}
          </button>
        </Link>
      </div>
    </form>
  );
}
export default CheckoutForm;
