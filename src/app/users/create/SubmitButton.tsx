// app/users/create/SubmitButton.tsx
"use client";

import React from "react";
import { useFormStatus } from "react-dom"; // Corrected import

export default function SubmitButton() {
  const { pending } = useFormStatus(); // Updated hook usage

  return (
    <button type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? "Adding User..." : "Add User"}
    </button>
  );
}
