"use client";

import React, { Dispatch } from 'react';
import styles from "./styles.module.scss";
import { Action, FormContextType } from '@/context/FormContext/FormContextTypes';
import { FormProvider } from '@/context/FormContext/FormContext';
import NameInput from '../Input/NameInput';
import EmailInput from '../Input/EmailInput';
import MessageInput from '../Input/MessageInput';

// Regex
const nameRegex = /^[\p{L}]+$/u
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i

export default function MailForm() {
  const initialFormData: FormContextType = {
    name: { value: "", error: false },
    email: { value: "", error: false },
    message: { value: "", error: false },
  }
  const verificationFunc = (formData: FormContextType, dispatch: Dispatch<Action>) => {
    const { name, email, message } = formData;
    let errorMessage: string = "";

    if(name.value.length < 3) {
      errorMessage = "Nome troppo corto"; 
      dispatch({ type: "SET_INPUT_ERROR", field: "name", error: true });
    } 
    else if(!nameRegex.test(name.value)) {
      errorMessage = "Invalid name";
      dispatch({ type: "SET_INPUT_ERROR", field: "name", error: true });
    }
    else if(name.value.length > 50) {
      errorMessage = "Nome troppo lungo";
      dispatch({ type: "SET_INPUT_ERROR", field: "name", error: true });
    }
    if(!emailRegex.test(email.value)) {
      errorMessage = "Formato email invalido";
      dispatch({ type: "SET_INPUT_ERROR", field: "email", error: true });
    } 
    else if(email.value.length > 50) {
      errorMessage = "Email troppo lunga"
      dispatch({ type: "SET_INPUT_ERROR", field: "email", error: true });
    }
    
    if(message.value.length < 4) {
      errorMessage = "Messaggio troppo corto";
      dispatch({ type: "SET_INPUT_ERROR", field: "message", error: true });
    }
    else if(message.value.length > 500) {
      errorMessage = "Messaggio troppo lungo";
      dispatch({ type: "SET_INPUT_ERROR", field: "message", error: true });
    }

    if(errorMessage) throw new Error(errorMessage);
  }
  return (
      <FormProvider 
        route="/api/sendMessage" 
        initialState={initialFormData} 
        verificationFunc={verificationFunc} 
        className={styles.emailForm}
      >
        <h3>Lasciaci un messaggio</h3>
        <NameInput /> 
        <EmailInput />
        <MessageInput />
      </FormProvider>
  )
}
