import React from "react";
import { useFormStore } from "../store/formStore";

export default function Step3() {
  const { formData, updateFormData } = useFormStore();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    updateFormData({ ...formData, [name]: checked });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Step 3: Preferences</h2>
      <label className="block mt-4">
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter || false}
          onChange={handleChange}
          className="mr-2"
        />
        Subscribe to newsletter
      </label>
      <label className="block mt-4">
        <input
          type="checkbox"
          name="notifications"
          checked={formData.notifications || false}
          onChange={handleChange}
          className="mr-2"
        />
        Enable notifications
      </label>
    </div>
  );
}
