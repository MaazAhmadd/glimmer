import mongoose, { Schema, Document, Types } from "mongoose";

interface TrueSaloonReview extends Document {
  clientName: string;
  rating: number;
  userId: Types.ObjectId; // Reference to the user giving the review
  saloonId: Types.ObjectId; // Reference to the salon being reviewed
  createdAt: Date;
  updatedAt: Date;
}

const TrueSaloonReviewSchema = new Schema<TrueSaloonReview>(
  {
    clientName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    saloonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Saloon",
      required: true,
    },
  },
  { timestamps: true }
);

const TrueSaloonReview =
  mongoose.models.TrueSaloonReview ||
  mongoose.model<TrueSaloonReview>("TrueSaloonReview", TrueSaloonReviewSchema);

export default TrueSaloonReview;
