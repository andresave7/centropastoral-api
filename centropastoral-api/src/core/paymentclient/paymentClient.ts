interface PaymentClient {
    processPayment(data:any): Promise<any>;
}
