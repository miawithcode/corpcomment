import { useState } from "react";
import CharCount from "../CharCount";
import { MAX_TEXT_LENGTH } from "../../lib/constants";
import { useFeedbacksContext } from "../../hooks/useFeedbacksContext";

const FeedbackForm = () => {
  const { handleAddFeedback } = useFeedbacksContext();

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
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-t-xl border p-4 ${showValidIndicator && "border-green-700"} ${showInValidIndicator && "border-red-700"}`}
    >
      <textarea
        className="min-h-24 w-full min-w-[512px] resize-none focus:outline-none"
        value={text}
        onChange={handleChange}
        placeholder="Any feedback? Don't forget to #hashtag the company."
        spellCheck={false}
      />
      <div className="flex items-center justify-between">
        <CharCount count={MAX_TEXT_LENGTH - text.length} />
        <button
          type="submit"
          className="rounded-[4px] border border-black bg-[#D1E3FA] px-4 py-2 text-sm font-medium"
        >
          Publish
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
