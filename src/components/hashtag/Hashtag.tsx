import { useFeedbacksContext } from "../../hooks/useFeedbacksContext";

type HashtagProps = {
  hashtag: string;
};

const Hashtag = ({ hashtag }: HashtagProps) => {
  const { handleSelectHashtag } = useFeedbacksContext();

  return (
    <li>
      <button onClick={() => handleSelectHashtag(hashtag)}>#{hashtag}</button>
    </li>
  );
};

export default Hashtag;
