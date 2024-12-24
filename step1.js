import React from "react";
import { useFormStore } from "../store/formStore";

export default function Step1() {
  const { formData, updateFormData } = useFormStore();

  const handleChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Step 1: Personal Information</h2>
      <label className="block mt-4">
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName || ""}
          onChange={handleChange}
          className="block w-full p-2 border rounded mt-2"
        />
      </label>
      <label className="block mt-4">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName || ""}
          onChange={handleChange}
          className="block w-full p-2 border rounded mt-2"
        />
      </label>
    </div>
  );
}
