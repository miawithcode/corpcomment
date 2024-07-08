import { useFeedbacksStore } from "../../stores/feedbacksStore";

type HashtagProps = {
  hashtag: string;
};

const Hashtag = ({ hashtag }: HashtagProps) => {
  const selectHashtag = useFeedbacksStore((state) => state.selectHashtag);

  return (
    <li>
      <button onClick={() => selectHashtag(hashtag)}>#{hashtag}</button>
    </li>
  );
};

export default Hashtag;
