import {Response} from "express";
import {User as userModel} from "../models"
import {Order as orderModel} from "../models" 
import paymentClientFactory from "./paymentClientFactory";
export class PaymentHandler{
    request:any;
    response:Response;
    constructor(req:any,res:Response){
        this.request=req;
        this.response=res;
    }
    async validateAndprocess():Promise<any>{
        if(!this.request.userId||!this.request.orderId)
            this.response.status(400).send("Invalid Request, missing data");
        const user = await userModel.findByPk(this.request.userId)
        const order = await orderModel.findOne({where:{orderId:this.request.orderId,userId:this.request.userId}})
        if(!user)
            this.response.status(404).send("Invalid user");
        if(!order)
            this.response.status(404).send("Invalid order");
        const paymentClient = paymentClientFactory.createPaymentClient("stripe");
        return await paymentClient.processPayment(this.request.paymentData)
    }
}
