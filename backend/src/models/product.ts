import { Schema, model } from 'mongoose';

interface IProduct {
  name: string;
  price: number;
  stock: number;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export default model<IProduct>('Product', productSchema);
