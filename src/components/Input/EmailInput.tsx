import React from 'react';
import styles from "./styles.module.scss";
import { useFormContext } from '@/context/FormContext/FormContext';

export default function EmailInput() {

  const { formData, dispatch } = useFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "SET_INPUT_VALUE", field: "email", value: e.target.value });
  }
  const handleFocus = (): void => {
    dispatch({ type: "SET_INPUT_ERROR", field: "email", error: false });
  }

  return (
    <div className={styles.inputBox}>
      <input 
        type="text" 
        id="email"
        value={formData?.email.value}
        onChange={handleChange}
        onFocus={handleFocus}
        className={formData?.email.error ? styles.error : ""}
      />
      <label 
        htmlFor="email" 
        className={formData?.email.value ? styles.notEmpty : ""}
      >Email</label>
    </div>
  )
}
