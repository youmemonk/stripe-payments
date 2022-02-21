import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51KVUU0SCrm93QgJqk46UgcAgFsoLJOROJ2CMdmWMo6D4wz90KAdhKFw2FlSMCkNieaEsRGphWTrLKUEfcQsg2TiK005v8X2RDL";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
