import React from "react";
import { useFormStore } from "../store/formStore";

export default function Step2() {
  const { formData, updateFormData } = useFormStore();

  const handleChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Step 2: Address Details</h2>
      <label className="block mt-4">
        Address:
        <input
          type="text"
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          className="block w-full p-2 border rounded mt-2"
        />
      </label>
      <label className="block mt-4">
        City:
        <input
          type="text"
          name="city"
          value={formData.city || ""}
          onChange={handleChange}
          className="block w-full p-2 border rounded mt-2"
        />
      </label>
    </div>
  );
}
