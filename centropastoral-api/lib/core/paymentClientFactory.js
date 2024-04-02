"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stripeClient_1 = require("./paymentclient/stripeClient");
const payPalClient_1 = require("./paymentclient/payPalClient");
class PaymentClientFactory {
    static createPaymentClient(clientType) {
        switch (clientType) {
            case "stripe":
                return new stripeClient_1.StripeClient();
            case "paypal":
                return new payPalClient_1.PayPalClient();
            default:
                throw new Error("Unsupported payment client type");
        }
    }
}
exports.default = new PaymentClientFactory();
//# sourceMappingURL=paymentClientFactory.js.map