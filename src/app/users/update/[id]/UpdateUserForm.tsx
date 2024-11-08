// app/users/[id]/UpdateUserForm.tsx
"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

export default function UpdateUserForm({
  updateUserAction,
  user,
}: {
  updateUserAction: (formData: FormData) => void;
  user: {
    id: string;
    name: string;
    email: string;
    gender: string;
    age: number;
    city: string;
    area: string;
  };
}) {
  const { pending } = useFormStatus();

  return (
    <form action={updateUserAction}>
      <h1>Update User</h1>
      <input type="hidden" name="id" value={user.id} />

      {/* Name field */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={user.name}
          required
        />
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={user.email}
          required
        />
      </div>

      {/* Password field (optional) */}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter new password"
        />
      </div>

      {/* Gender field */}
      <div>
        <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender" defaultValue={user.gender} required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>
      </div>

      {/* Age field */}
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          defaultValue={user.age}
          min="0"
          required
        />
      </div>

      {/* City field */}
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          defaultValue={user.city}
          required
        />
      </div>

      {/* Area field */}
      <div>
        <label htmlFor="area">Area:</label>
        <input
          type="text"
          name="area"
          id="area"
          defaultValue={user.area}
          required
        />
      </div>

      {/* Submit Button */}
      <SubmitButton pending={pending} />
    </form>
  );
}
