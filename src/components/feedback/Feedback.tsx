import { TriangleUpIcon } from "@radix-ui/react-icons";
import { type TFeedback } from "../../lib/types";

type FeedbackProps = {
  feedback: TFeedback;
};

const Feedback = ({ feedback }: FeedbackProps) => {
  return (
    <li>
      {/* Company Logo */}
      <div>
        <img src="" alt="" />
      </div>

      {/* Feedback Content */}
      <div>
        <div>
          <p>{feedback.company}</p>
          {/* <p>· {feedback.daysAgo} days ago</p> */}
          <p>{feedback.daysAgo === 0 ? "NEW" : `${feedback.daysAgo}d`}</p>
        </div>
        <p>{feedback.text}</p>
      </div>

      {/* Upvote Button */}
      <button>
        <TriangleUpIcon />
        <span>{feedback.upvoteCount}</span>
      </button>
    </li>
  );
};

export default Feedback;
