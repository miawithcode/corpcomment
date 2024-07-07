type HashtagProps = {
  hashtag: string;
};

const Hashtag = ({ hashtag }: HashtagProps) => {
  return (
    <li>
      <button>#{hashtag}</button>
    </li>
  );
};

export default Hashtag;
