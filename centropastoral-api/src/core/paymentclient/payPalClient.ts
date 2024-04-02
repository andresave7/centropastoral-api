export class PayPalClient implements PaymentClient {
  constructor() {

  }
  processPayment(amount: number): void {
    console.log(`Processing ${amount} with PayPal`);
    // Implementation specific to PayPal
  }
}
