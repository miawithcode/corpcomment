import { useState } from "react";
import CharCount from "../CharCount";
import { MAX_TEXT_LENGTH } from "../../lib/constants";
import { useFeedbackContext } from "../../hooks/useFeedbackContext";

const FeedbackForm = () => {
  const { handleAddFeedback } = useFeedbackContext();

  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInValidIndicator, setShowInValidIndicator] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_TEXT_LENGTH) return;
    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation
    if (text.includes("#") && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInValidIndicator(true);
      setTimeout(() => setShowInValidIndicator(false), 2000);

      return;
    }

    handleAddFeedback(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className={`border ${showValidIndicator && "border-green-700"} ${showInValidIndicator && "border-red-700"}`}
        value={text}
        onChange={handleChange}
        placeholder="Any feedback? Don't forget to #hashtag the company."
        spellCheck={false}
      />
      <div className="border-red-400">
        <CharCount count={MAX_TEXT_LENGTH - text.length} />
        <button type="submit">Publish</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
