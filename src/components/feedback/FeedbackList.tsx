import Feedback from "./Feedback";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useFeedbacksStore } from "../../stores/feedbacksStore";

const FeedbackList = () => {
  const isLoading = useFeedbacksStore((state) => state.isLoading);
  const errorMessage = useFeedbacksStore((state) => state.errorMessage);
  const filteredFeedbacks = useFeedbacksStore((state) =>
    state.getFilteredFeedbacks(),
  );

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
