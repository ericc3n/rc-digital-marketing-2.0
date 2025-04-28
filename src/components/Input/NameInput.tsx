import React from 'react';
import styles from "./styles.module.scss";
import { useFormContext } from '@/context/FormContext/FormContext';

export default function NameInput() {

  const { formData, dispatch } = useFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "SET_INPUT_VALUE", field: "name", value: e.target.value });
  }
  const handleFocus = (): void => {
    dispatch({ type: "SET_INPUT_ERROR", field: "name", error: false });
  }

  return (
    <div className={styles.inputBox}>
      <input 
        type="text" 
        id="name"
        value={formData?.name.value}
        onChange={handleChange}
        onFocus={handleFocus}
        className={formData?.name.error ? styles.error : ""}
      />
      <label 
        htmlFor="name" 
        className={formData?.name.value ? styles.notEmpty : ""}
      >Nome</label>
    </div>
  )
}
