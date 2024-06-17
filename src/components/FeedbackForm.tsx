import TextCounter from "./TextCounter";

const FeedbackForm = () => {
  return (
    <form>
      <textarea
        placeholder="Any feedback? Don't forget to #hashtag the company."
        spellCheck={false}
      />
      <div>
        <TextCounter />
        <button type="submit">Publish</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
