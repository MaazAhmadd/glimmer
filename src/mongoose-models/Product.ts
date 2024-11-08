import mongoose, { Schema, Document, Types } from "mongoose";

interface Product extends Document {
  name: string;
  price: number; // Price in PKR
  rating: number; // Average rating out of 5
  imageUrl: string; // URL of the product image
  userId: Types.ObjectId; // Reference to the user who bought the product
  saloonId?: Types.ObjectId; // Optional reference to the salon if product was bought from a salon's page
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    imageUrl: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    saloonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Saloon",
      required: false,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model<Product>("Product", ProductSchema);

export default Product;
