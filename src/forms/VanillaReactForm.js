import { useState } from "react";
import WhoAreYouFormUI from "../components/WhoAreYouForm";
import { formData } from "../schemas/userFormSchema";
import { validateForm } from "../validation/vanillaValidation";

export default function VanillaReactForm() {
  const [values, setValues] = useState(formData);
  const [errors, setErrors] = useState({});

 

  function handleChange(name, value) {
     setValues((prev) => {
      const newValues = { ...prev };
      const keys = name.split('.');
      let current = newValues;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newValues;
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", values);
  }
  
  return (
    <WhoAreYouFormUI
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
