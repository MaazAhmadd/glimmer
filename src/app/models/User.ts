import mongoose, { Schema, Model } from "mongoose";

export interface GlimmerUser {
  _id: mongoose.Types.ObjectId;
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

const UserSchema: Schema<GlimmerUser> = new Schema<GlimmerUser>(
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

const User: Model<GlimmerUser> =
  mongoose.models.User || mongoose.model<GlimmerUser>("User", UserSchema);

export default User;
