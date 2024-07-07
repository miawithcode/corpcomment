import { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import Header from "./components/Header";
import { type TFeedback } from "./lib/types";

const App = () => {
  const [feedbacks, setFeedbacks] = useState<TFeedback[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddFeedback = (text: string) => {
    const company = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedback = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: company,
      badgeLetter: company.substring(0, 1).toUpperCase(),
    };

    setFeedbacks([...feedbacks, newItem]);
  };

  const fetchFeedback = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setFeedbacks(data.feedbacks);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center">
      <Header />
      <main>
        <FeedbackForm handleAddFeedback={handleAddFeedback} />
        <FeedbackList
          feedbacks={feedbacks}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
        <HashtagList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
