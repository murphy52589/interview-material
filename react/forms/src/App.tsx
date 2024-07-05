import React, { useState } from 'react';

interface FormValues {
  username: string;
}

const FormValidationExample: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    username: '',
  });
  const [errors, setErrors] = useState<FormValues>({
    username: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted with values:', values);
    } else {
      console.log('Form has errors. Cannot submit.');
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: FormValues = { username: '' };

    if (!values.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div>
      <h2>Form Validation Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidationExample;