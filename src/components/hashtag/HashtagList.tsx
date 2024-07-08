import { useFeedbackContext } from "../../hooks/useFeedbackContext";
import Hashtag from "./Hashtag";

const HashtagList = () => {
  const { hashtagList } = useFeedbackContext();

  return (
    <ul>
      {hashtagList.map((hashtag) => (
        <Hashtag key={hashtag} hashtag={hashtag} />
      ))}
    </ul>
  );
};

export default HashtagList;
