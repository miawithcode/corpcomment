import { useFeedbacksContext } from "../../hooks/useFeedbacksContext";

type HashtagProps = {
  hashtag: string;
};

const Hashtag = ({ hashtag }: HashtagProps) => {
  const { handleSelectHashtag } = useFeedbacksContext();

  return (
    <li className="rounded-3xl border border-black px-4 py-1 text-slate-800">
      <button onClick={() => handleSelectHashtag(hashtag)}>#{hashtag}</button>
    </li>
  );
};

export default Hashtag;
