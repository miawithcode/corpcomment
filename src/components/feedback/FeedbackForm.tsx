import { useState } from "react";
import CharCount from "../CharCount";
import { MAX_TEXT_LENGTH } from "../../lib/constants";

type FeedbackFormProps = {
  handleAddFeedback: (text: string) => void;
};

const FeedbackForm = ({ handleAddFeedback }: FeedbackFormProps) => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_TEXT_LENGTH) return;
    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddFeedback(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Any feedback? Don't forget to #hashtag the company."
        spellCheck={false}
      />
      <div>
        <CharCount count={MAX_TEXT_LENGTH - text.length} />
        <button type="submit">Publish</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
