// app/users/[id]/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/mongoose";
import User from "@/mongoose-models/User";
import bcrypt from "bcryptjs";

export async function updateUser(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password")
    ? await bcrypt.hash(formData.get("password") as string, 10)
    : undefined;
  const gender = formData.get("gender") as string;
  const age = parseInt(formData.get("age") as string, 10);
  const city = formData.get("city") as string;
  const area = formData.get("area") as string;

  try {
    // Connect to the database
    await dbConnect();

    // Find and update the user by ID
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    // Update fields
    user.name = name;
    user.email = email;
    if (password) user.password = password; // Only update password if provided
    user.gender = gender;
    user.age = age;
    user.location = { city, area };

    await user.save();

    // Revalidate path to refresh the user list page
    revalidatePath("/users");

    return { message: "User updated successfully" };
  } catch (error) {
    console.error("Error updating user:", error);

    // Check if error is an instance of Error
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return { message: "Failed to update user", error: errorMessage };
  }
}
