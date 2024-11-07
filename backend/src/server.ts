import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/products';
import orderRoutes from './routes/orders';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error('MongoDB connection error: MONGO_URI is not defined');
  process.exit(1);
}

mongoose
  .connect(mongoUri, {})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
