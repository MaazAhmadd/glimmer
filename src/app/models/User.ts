import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

interface GlimmerUser extends Document {
  name: string;
  email: string;
  password: string;
  gender: string;
  age: number;
  location: {
    city: string;
    area: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<GlimmerUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: {
      type: String,
      enum: ["Male", "Female", "unisex"],
      required: true,
    },
    age: { type: Number, required: true, min: 0 },
    location: {
      city: { type: String, required: true },
      area: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model<GlimmerUser>("User", UserSchema);

console.log(User);
