import React, { useState } from "react";
import FormPersonalDetail from "./FormPersonalDetail";
import FormUserDetail from "./FormUserDetail";
import Confirm from "./Confirm";
import Success from "./Success";
import { Typography } from "@mui/material";

const UserForm = () => {
  const formTitles = ["Personal Details", "User Details", "Confirm", "Finish"];
  const [step, setStep] = useState(0);
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

  const formsToDisplay = () => {
    switch(step){
      case 0:
        return (
          <FormPersonalDetail nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
        )
      case 1:
        return (
          <FormUserDetail nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
        )
      case 2:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} formData={formData} />
        )
      case 3:
        return (
          <Success nextStep={nextStep} prevStep={prevStep} formData={formData} />
        )
      default:
        return (<FormPersonalDetail nextStep={nextStep} prevStep={prevStep} formData={formData} />)
    }
  }
  return (
    <div style={{width:"300px", margin:"auto"}}>
      <Typography sx={{marginTop:"110px"}} variant="h4">{formTitles[step]}</Typography>
      {formsToDisplay()}      
    </div>
  );
};

export default UserForm;
