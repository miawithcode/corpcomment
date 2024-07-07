import Hashtag from "./Hashtag";

type HashtagListProps = {
  hashtagList: string[];
};

const HashtagList = ({ hashtagList }: HashtagListProps) => {
  return (
    <ul>
      {hashtagList.map((hashtag) => (
        <Hashtag key={hashtag} hashtag={hashtag} />
      ))}
    </ul>
  );
};

export default HashtagList;
