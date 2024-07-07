import Feedback from "./Feedback";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { type TFeedback } from "../lib/types";

type FeedbackListProps = {
  feedbacks: TFeedback[];
  isLoading: boolean;
  errorMessage: string;
};

const FeedbackList = ({
  feedbacks,
  isLoading,
  errorMessage,
}: FeedbackListProps) => {
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
