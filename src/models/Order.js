import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    userEmail: String,
    phone: String,
    streetAddress: String,
    postalCode: String,
    city: String,
    country: String,
    cartProducts: Object,
    paid: {type: Boolean, default: true},
}, {timestamps:true})

export const Order = models?.Order || model('Order', OrderSchema)