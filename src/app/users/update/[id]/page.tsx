// app/users/[id]/page.tsx
import React from "react";
import dbConnect from "@/lib/mongoose";
import User from "@/app/models/User";
import { notFound } from "next/navigation";
import UpdateUserForm from "./UpdateUserForm";
import { updateUser } from "./action";

interface Params {
  id: string;
}
export default async function UserPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  await dbConnect();
  const user = await User.findById(id).lean();

  if (!user) {
    notFound();
  }

  const serializedUser = {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    gender: user.gender,
    age: user.age,
    city: user.location.city,
    area: user.location.area,
  };

  return <UpdateUserForm updateUserAction={updateUser} user={serializedUser} />;
}
