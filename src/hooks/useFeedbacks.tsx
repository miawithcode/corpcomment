import { useEffect, useState } from "react";
import { TFeedback } from "../lib/types";

export const useFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<TFeedback[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchFeedback = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setFeedbacks(data.feedbacks);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return {
    feedbacks,
    setFeedbacks,
    isLoading,
    errorMessage,
  };
};
