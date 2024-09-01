import { Document, ObjectId } from "mongoose";

export interface TOrder extends Document {
    chosenSize: string
    chosenStyle: string
    chosenColor: string
    deliveryMode: string
    amount: number
    orderInitiator: ObjectId
    order_payment_receipt: ObjectId
    orderProducts: ObjectId[]
}