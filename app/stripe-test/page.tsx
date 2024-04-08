import Stripe from "stripe";
import CheckoutForm from "../../components/user/CheckoutForm";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const StripeTest = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 15000,
    currency: "USD",
  });
  if (paymentIntent.client_secret == null) {
    throw Error("Stripe failed to create intent");
  }
  return <CheckoutForm clientSecret={paymentIntent.client_secret} />;
};
export default StripeTest;
