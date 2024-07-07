import Hashtag from "./Hashtag";

type HashtagListProps = {
  hashtagList: string[];
  handleSelectHashtag: (hashtag: string) => void;
};

const HashtagList = ({
  hashtagList,
  handleSelectHashtag,
}: HashtagListProps) => {
  return (
    <ul>
      {hashtagList.map((hashtag) => (
        <Hashtag
          key={hashtag}
          hashtag={hashtag}
          handleSelectHashtag={handleSelectHashtag}
        />
      ))}
    </ul>
  );
};

export default HashtagList;
