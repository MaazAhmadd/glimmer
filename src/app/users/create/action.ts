// app/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/mongoose";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import { z } from "zod";

// Define the form state type
type FormState = {
  message: string;
  errors: {
    name?: string;
    email?: string;
    password?: string;
    gender?: string;
    age?: string;
    city?: string;
    area?: string;
  };
};

export async function createUser(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Define schema for validation
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    gender: z.enum(["Male", "Female", "Unisex"]),
    age: z.preprocess(
      (val) => parseInt(val as string, 10),
      z.number().min(0, "Age must be a positive number")
    ),
    city: z.string().min(1, "City is required"),
    area: z.string().min(1, "Area is required"),
  });

  // Parse and validate form data
  const result = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    gender: formData.get("gender"),
    age: formData.get("age"),
    city: formData.get("city"),
    area: formData.get("area"),
  });

  if (!result.success) {
    // Transform fieldErrors from string arrays to single strings
    const mappedErrors: FormState["errors"] = {};
    for (const [key, value] of Object.entries(
      result.error.flatten().fieldErrors
    )) {
      if (value && value.length > 0) {
        mappedErrors[key as keyof FormState["errors"]] = value[0];
      }
    }

    return {
      message: "",
      errors: mappedErrors,
    };
  }

  const { name, email, password, gender, age, city, area } = result.data;

  try {
    // Connect to the database
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { message: "User with this email already exists.", errors: {} };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      gender,
      age,
      location: {
        city,
        area,
      },
    });

    await user.save();

    // Revalidate the users page
    revalidatePath("/users");

    return { message: "User added successfully", errors: {} };
  } catch (error) {
    console.error(error);
    return { message: "Failed to add the user", errors: {} };
  }
}