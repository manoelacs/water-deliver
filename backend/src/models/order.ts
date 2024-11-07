// models/order.ts
import { Schema, model } from 'mongoose';

interface IOrder {
  product: Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
  orderDate: Date;
}

const orderSchema = new Schema<IOrder>({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
});

export default model<IOrder>('Order', orderSchema);
