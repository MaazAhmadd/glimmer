import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongoose";
import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

// Define the interface for TypeScript
interface GlimmerUser extends Document {
  name: string;
  email: string;
  password: string;
  gender: string;
  age: number;
  location: {
    country: string;
    city?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Define the User schema
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
      city: { type: String },
      area: { type: String },
    },
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model<GlimmerUser>("User", UserSchema);

console.log(User);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Connect to the database
  await dbConnect();
  /* GET-----------------------------------------------------------*/
  if (req.method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  }
  /* POST-----------------------------------------------------------*/
  if (req.method === "POST") {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        age: req.body.age,
        location: {
          country: req.body.location?.country,
          city: req.body.location?.city,
        },
      });
      console.log(user);

      const result = await user.save();
      res.status(201).json(result);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Error creating user", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
