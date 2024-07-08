import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbacksContextProvider";

export const useFeedbackContext = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("FeedbackContext is not defined ");
  }
  return context;
};
