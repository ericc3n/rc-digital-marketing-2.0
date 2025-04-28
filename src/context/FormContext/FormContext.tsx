"use client";

import React, { createContext, Dispatch, useContext, useReducer, useState } from "react";
import { FormContextType, FormContextValue, Action, ApiRoute } from "./FormContextTypes";
import { MdErrorOutline } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import styles from "./styles.module.scss";

// Context impementation
const FormContext = createContext<FormContextValue | undefined>(undefined);
const useFormContext = () :FormContextValue => {
  const context = useContext(FormContext);
  if(!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}

// Reducer 
const reducer = (state: FormContextType, action: Action & { initialState?: FormContextType }) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.value,
        },
      };
    case "SET_INPUT_ERROR":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          error: action.error,
        },
      };
    case "RESET":
      return action.initialState || state; // Reset to the provided initial state
    default:
      return state;
  }
}

// The provider
const FormProvider: React.FC<{ 
  children: React.ReactNode, 
  initialState: FormContextType, 
  verificationFunc: (formData: FormContextType, dispatch: Dispatch<Action>) => void,
  route: ApiRoute,
  className?: string
}> = ({ 
    children, 
    initialState,
    verificationFunc,
    route,
    className
  }) => {

  const [formData, dispatch] = useReducer((state, action) => reducer(state, { ...action, initialState }), initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent,
    verificateForm: (formData: FormContextType, dispatch: Dispatch<Action>) => void
  ): Promise<() => void> => {

    e.preventDefault();
    setIsLoading(true)
    setErrorMsg("");
    setSuccessMsg("");

    const controller = new AbortController();
    const signal = controller.signal; 
  
    try {
      verificateForm(formData, dispatch);
      
      const response = await fetch(route, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(formData),
        signal
      })
      if (!response.ok) {
        const text = await response.text();
        if (!text) {
          throw new Error("Risposta vuota dal server");
        }
        let errorData;
        try {
          errorData = JSON.parse(text);
        } catch {
          throw new Error("Risposta non valida dal server");
        }
        throw errorData;
      }
      

      setSuccessMsg("Email inviata con successo!");
      dispatch({ type: "RESET", initialState });

    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          console.log("Richiesta annullata");
        } else {
          setErrorMsg(error?.message || "Errore nella richiesta");
        }
      }
    }

    finally {
      setIsLoading(false);
    }

    return () => controller.abort();
  }

  return (
    <FormContext.Provider value={{ formData, dispatch }}>
      <form onSubmit={(e: React.FormEvent) => {handleSubmit(e, verificationFunc)}} className={className}>
        {children}
        <div className={styles.postMessage}>
          {errorMsg && <p className={styles.errorMessage}><MdErrorOutline style={{ verticalAlign: 'middle' }} /> {errorMsg}</p>}
          {successMsg && <p className={styles.successMessage}><IoCheckmarkOutline style={{ verticalAlign: 'middle' }} /> {successMsg}</p>}
        </div>
        <button 
          type="submit" 
          className={`btn-1${isLoading ? " loading" : ""}`} 
          style={{ width: "100%" }}
        >Invia
        </button>
      </form>
    </FormContext.Provider>
  );
}

export { FormProvider, useFormContext }