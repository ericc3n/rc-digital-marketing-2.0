import { Dispatch } from "react";

// TYPES
type ApiRoute = "/api/sendMessage"; 

interface FormField {
  value: string;
  error: boolean;
}
interface FormContextType {
  // route: ApiRoute;   SISTEMARE
  [key: string]: FormField;   // Dynamic form fields (name, email, password, etc.)
}
interface FormContextValue {
  formData: FormContextType;
  dispatch: Dispatch<Action>;
}
type Action =
  | { type: "SET_INPUT_VALUE"; field: keyof FormContextType; value: string }
  | { type: "SET_INPUT_ERROR"; field: keyof FormContextType; error: boolean }
  | { type: "RESET" }

export type { FormContextType, FormContextValue, Action, ApiRoute }