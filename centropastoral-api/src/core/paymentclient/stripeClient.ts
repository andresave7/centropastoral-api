
const stripe = require('stripe')('sk_test_51OjkEFF7v70PnOos7OK1X77Pbr4PCHlMyGrKbaU9PhcrEu0R6qIDQq7A1fLWDEdFsw9DMKRbJdEdbuDfOlAXH6ST00CTxJ8RFw')

export class StripeClient implements PaymentClient {
  constructor() {}
  async processPayment(data:any): Promise<any> {
    try {
      const res = await stripe.charges.create({
        amount:data.amount,
        currency:"usd",
        source:data.token,
        description:data.description,
        receipt_email:data.mail
      });
      return {
        id:res.id,
        status:res.status=="succeeded",
        sourceId:res.source.id
      }
    }catch (err) {
      console.error(err);
      throw err;
    }
  }
}
