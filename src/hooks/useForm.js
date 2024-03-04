import { useState } from "react";

export default function useForm(initialValues) {

  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event, onSubmitCallback) => {
    event.preventDefault();
    // Puedes realizar alguna lógica adicional antes de llamar a la devolución de llamada
    if (onSubmitCallback) {
      onSubmitCallback(values);
    }
  };

  return {
    values,
    handleChange,
    
    handleSubmit,
  };
}