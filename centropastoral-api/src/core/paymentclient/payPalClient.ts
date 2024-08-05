export class PayPalClient implements PaymentClient {
  constructor() {

  }
  async processPayment(amount: number): Promise<any> {
    console.log(`Processing ${amount} with PayPal`);
    // Implementation specific to PayPal
  }
}
