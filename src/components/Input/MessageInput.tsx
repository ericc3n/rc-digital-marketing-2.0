import React from 'react';
import styles from "./styles.module.scss";
import { useFormContext } from '@/context/FormContext/FormContext';

export default function MessageInput() {

  const { formData, dispatch } = useFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch({ type: "SET_INPUT_VALUE", field: "message", value: e.target.value });
  }
  const handleFocus = (): void => {
    dispatch({ type: "SET_INPUT_ERROR", field: "message", error: false });
  }

  return (
    <div className={styles.inputBox}>
      <textarea 
        id="message"
        value={formData?.message.value}
        onChange={handleChange}
        onFocus={handleFocus}
        className={formData?.message.error ? styles.error : ""}
      />
      <label 
        htmlFor="message" 
        className={formData?.message.value ? styles.notEmpty : ""}
      >Message</label>
    </div>
  )
}
