// app/users/create/page.tsx
"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom"; // Ensure correct import
import { createUser } from "./action";
import SubmitButton from "./SubmitButton";

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

const initialState: FormState = {
  message: "",
  errors: {},
};

export default function UserForm() {
  const [state, formAction] = useFormState(createUser, initialState);
  const { pending } = useFormStatus();

  return (
    <div>
      <h1>Create User</h1>
      <form action={formAction}>
        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
          {state.errors?.name && <p className="error">{state.errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
          {state.errors?.email && <p className="error">{state.errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />
          {state.errors?.password && (
            <p className="error">{state.errors.password}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>
          {state.errors?.gender && (
            <p className="error">{state.errors.gender}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age" min="0" required />
          {state.errors?.age && <p className="error">{state.errors.age}</p>}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" id="city" required />
          {state.errors?.city && <p className="error">{state.errors.city}</p>}
        </div>

        {/* Area */}
        <div>
          <label htmlFor="area">Area:</label>
          <input type="text" name="area" id="area" required />
          {state.errors?.area && <p className="error">{state.errors.area}</p>}
        </div>

        {/* Submit Button */}
        <SubmitButton />

        {/* Message Display */}
        {state.message && (
          <p aria-live="polite" role="status" className="sr-only">
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
