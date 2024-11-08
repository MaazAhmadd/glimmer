// app/users/[id]/SubmitButton.tsx
"use client";

import React from "react";

export default function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Updating User..." : "Update User"}
    </button>
  );
}
