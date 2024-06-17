const FeedbackForm = () => {
  return (
    <form>
      <textarea
        placeholder="Any feedback? Don't forget to #hashtag the company."
        spellCheck={false}
      />
      <div>
        <p>150</p>
        <button type="submit">Publish</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
