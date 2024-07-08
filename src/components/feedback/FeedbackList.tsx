import Feedback from "./Feedback";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackContext } from "../../hooks/useFeedbackContext";

const FeedbackList = () => {
  const { isLoading, errorMessage, filteredFeedbacks } = useFeedbackContext();

  return (
    <ol>
      {isLoading && <Loading />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {filteredFeedbacks.map((feedback) => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
    </ol>
  );
};

export default FeedbackList;
