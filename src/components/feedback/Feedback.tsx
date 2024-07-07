import { useState } from "react";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { type TFeedback } from "../../lib/types";

type FeedbackProps = {
  feedback: TFeedback;
};

const Feedback = ({ feedback }: FeedbackProps) => {
  const [upvoteCount, setUpvoteCount] = useState(feedback.upvoteCount);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount((prev) => prev + 1);
    e.currentTarget.disabled = true;
  };

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
      <button onClick={handleClick}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
    </li>
  );
};

export default Feedback;
