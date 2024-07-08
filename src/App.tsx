import FeedbackForm from "./components/feedback/FeedbackForm";
import FeedbackList from "./components/feedback/FeedbackList";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtag/HashtagList";
import Header from "./components/layout/Header";
import { useFeedbacksStore } from "./stores/feedbacksStore";
import { useEffect } from "react";

const App = () => {
  const fetchFeedbacks = useFeedbacksStore((state) => state.fetchFeedbacks);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center">
      <Header />

      <main>
        <FeedbackForm />
        <FeedbackList />
        <HashtagList />
      </main>

      <Footer />
    </div>
  );
};

export default App;
