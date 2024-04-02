import {StripeClient} from "./paymentclient/stripeClient";
import {PayPalClient} from "./paymentclient/payPalClient";

class PaymentClientFactory {
  static createPaymentClient(clientType: string): PaymentClient {
    switch (clientType) {
      case "stripe":
        return new StripeClient();
      case "paypal":
        return new PayPalClient();
      default:
        throw new Error("Unsupported payment client type");
    }
  }
}

export default new PaymentClientFactory();
