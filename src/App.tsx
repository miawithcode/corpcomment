import FeedbackForm from "./components/feedback/FeedbackForm";
import FeedbackList from "./components/feedback/FeedbackList";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtag/HashtagList";
import Header from "./components/layout/Header";
import FeedbacksContextProvider from "./context/FeedbacksContextProvider";

const App = () => {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center">
      <Header />

      <FeedbacksContextProvider>
        <main>
          <FeedbackForm />
          <FeedbackList />
          <HashtagList />
        </main>
      </FeedbacksContextProvider>

      <Footer />
    </div>
  );
};

export default App;
