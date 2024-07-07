type HashtagProps = {
  hashtag: string;
  handleSelectHashtag: (hashtag: string) => void;
};

const Hashtag = ({ hashtag, handleSelectHashtag }: HashtagProps) => {
  return (
    <li>
      <button onClick={() => handleSelectHashtag(hashtag)}>#{hashtag}</button>
    </li>
  );
};

export default Hashtag;
