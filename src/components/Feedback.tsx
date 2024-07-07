import { TriangleUpIcon } from "@radix-ui/react-icons";

type Feedback = {
  id: number;
  company: string;
  badgeLetter: string;
  daysAgo: number;
  text: string;
  upvoteCount: number;
};

type FeedbackProps = {
  feedback: Feedback;
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
          <p>· {feedback.daysAgo} days ago</p>
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
