import { useFeedbackContext } from "../../hooks/useFeedbackContext";

type HashtagProps = {
  hashtag: string;
};

const Hashtag = ({ hashtag }: HashtagProps) => {
  const { handleSelectHashtag } = useFeedbackContext();

  return (
    <li>
      <button onClick={() => handleSelectHashtag(hashtag)}>#{hashtag}</button>
    </li>
  );
};

export default Hashtag;
