import { useState } from "react";
import styles from './styles.module.css';

export const Form = ({ fields, initialFormState, buttonText, onSubmit }) => {
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((currFormData) => ({...currFormData, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // form does not refresh on submit
    setFormData(initialFormState);
    onSubmit(formData);
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={styles.form_topics}
    >
      {
        fields?.map((field, index) => {
          return (
            <input
              key={index} 
              onChange={handleInputChange}
              value={formData[field.name]}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              name={field.name}
          />
          )
        })
      }
      <button type="submit">{buttonText}</button>
    </form>
  )

}
