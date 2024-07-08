import { useFeedbacksContext } from "../../hooks/useFeedbacksContext";
import Hashtag from "./Hashtag";

const HashtagList = () => {
  const { hashtagList } = useFeedbacksContext();

  return (
    <ul>
      {hashtagList.map((hashtag) => (
        <Hashtag key={hashtag} hashtag={hashtag} />
      ))}
    </ul>
  );
};

export default HashtagList;
