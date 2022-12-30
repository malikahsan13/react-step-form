import React, { useState } from "react";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    bio: "",
    city: "",
  });

  //Proceed Next Step
  const nextStep = () => setStep(step + 1);

  //Proceed Previous Step
  const prevStep = () => setStep(step - 1);

  return (
    <div>test</div>
  );
};

export default UserForm;
