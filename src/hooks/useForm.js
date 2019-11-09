import { useState, useEffect } from "react";
import validator from "../functions/validator";

function useForm({ form }) {
  const [data, setData] = useState({});

  useEffect(() => {
    let isValid = false;
    const results = validator(form);
    const errors = results[0];
    const validations = results[1];
    isValid = Object.keys(errors).length > 0 ? true : false;

    setData({
      isValid,
      validations,
      errors
    });
  }, [form]);

  return data;
}

export default useForm;
