import React from "react";
import Stepper from "../components/Stepper";

export default function Home() {
  return (
    <div>
      <Stepper currentStep={0} />
      <h2 className="text-xl mt-6">Welcome to the Multi-Step Form</h2>
      <p className="mt-4">Click on Step 1 to begin!</p>
    </div>
  );
}
