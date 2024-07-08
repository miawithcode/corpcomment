import { useFeedbacksContext } from "../../hooks/useFeedbacksContext";
import Hashtag from "./Hashtag";

const HashtagList = () => {
  const { hashtagList } = useFeedbacksContext();

  return (
    <ul className="sticky top-0 flex flex-col gap-2">
      {hashtagList.map((hashtag) => (
        <Hashtag key={hashtag} hashtag={hashtag} />
      ))}
    </ul>
  );
};

export default HashtagList;
