import React from "react";
import { useFormStore } from "../store/formStore";

export default function Step4() {
  const { formData } = useFormStore();

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Step 4: Review & Submit</h2>
      <div className="mt-4">
        <p>
          <strong>First Name:</strong> {formData.firstName || "Not provided"}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.lastName || "Not provided"}
        </p>
        <p>
          <strong>Address:</strong> {formData.address || "Not provided"}
        </p>
        <p>
          <strong>City:</strong> {formData.city || "Not provided"}
        </p>
        <p>
          <strong>Newsletter:</strong> {formData.newsletter ? "Yes" : "No"}
        </p>
        <p>
          <strong>Notifications:</strong> {formData.notifications ? "Yes" : "No"}
        </p>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}
