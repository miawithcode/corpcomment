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
    <li className="p flex items-start gap-6 border border-t-0 p-6">
      {/* Company Logo */}
      <div>
        <p className="grid h-14 w-14 place-content-center rounded-full border border-black bg-[#D1E3FA] text-2xl font-bold">
          {feedback.badgeLetter}
        </p>
      </div>

      {/* Feedback Content */}
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex gap-1">
          <p className="font-semibold">{feedback.company}</p>
          {/* <p>· {feedback.daysAgo} days ago</p> */}
          <p>·</p>
          <p className="text-gray-400">
            {feedback.daysAgo === 0 ? "NEW" : `${feedback.daysAgo}d`}
          </p>
        </div>
        <p className="leading-tight">{feedback.text}</p>
      </div>

      {/* Upvote Button */}
      <div>
        <button
          onClick={handleClick}
          className="flex flex-col items-center disabled:text-gray-400"
        >
          <TriangleUpIcon className="h-6 w-6" />
          <span className="text-sm">{upvoteCount}</span>
        </button>
      </div>
    </li>
  );
};

export default Feedback;
