// import { loadStripe } from "@stripe/stripe-js";

// export const stripeCheckout = async () => {
//   let stripePromise: any = null;
//   const getStripe = () => {
//     if (!stripePromise) {
//       const API_KEY = process.env.NEXT_PUBLIC_STRIPE_API_KEY;
//       stripePromise = loadStripe(API_KEY as string);
//     }
//     return stripePromise;
//   };
//   const stripe = await getStripe();
//   await stripe.redirectToCheckout({});
// };
