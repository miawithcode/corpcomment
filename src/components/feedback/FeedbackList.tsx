import Feedback from "./Feedback";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useFeedbacksContext } from "../../hooks/useFeedbacksContext";

const FeedbackList = () => {
  const { isLoading, errorMessage, filteredFeedbacks } = useFeedbacksContext();

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
