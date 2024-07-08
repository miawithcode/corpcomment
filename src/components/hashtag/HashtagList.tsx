import { useFeedbacksStore } from "../../stores/feedbacksStore";
import Hashtag from "./Hashtag";

const HashtagList = () => {
  const hashtagList = useFeedbacksStore((state) => state.getHashtagList());

  return (
    <ul>
      {hashtagList.map((hashtag) => (
        <Hashtag key={hashtag} hashtag={hashtag} />
      ))}
    </ul>
  );
};

export default HashtagList;
