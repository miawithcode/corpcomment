import { useEffect, useState } from "react";
import Feedback from "./Feedback";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
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

  return (
    <ol>
      {isLoading && <Loading />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbacks.map((feedback) => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
    </ol>
  );
};

export default FeedbackList;
