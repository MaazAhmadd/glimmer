import mongoose, { Schema, Document, Types } from "mongoose";

interface SaloonService extends Document {
  saloonId: Types.ObjectId;
  userId: Types.ObjectId;
  serviceName: string;
  price: number;
  duration: string;
  category: string;
  gender: "Male" | "Female" | "Unisex";
  createdAt: Date;
  updatedAt: Date;
}

// Define the Service schema
const saloonServiceSchema = new Schema<SaloonService>(
  {
    saloonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Saloon",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    serviceName: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    category: { type: String, required: true },
    gender: {
      type: String,
      enum: ["Male", "Female", "Unisex"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Service ||
  mongoose.model<SaloonService>("Service", saloonServiceSchema);
