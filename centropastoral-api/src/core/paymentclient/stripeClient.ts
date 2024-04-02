export class StripeClient implements PaymentClient {
  constructor() {}
  processPayment(amount: number): void {
    console.log(`Processing ${amount} with Stripe`);
    // Implementation specific to Stripe
  }
}
