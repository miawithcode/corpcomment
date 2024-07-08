import FeedbackForm from "./components/feedback/FeedbackForm";
import FeedbackList from "./components/feedback/FeedbackList";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtag/HashtagList";
import Header from "./components/layout/Header";
import FeedbacksContextProvider from "./context/FeedbacksContextProvider";

const App = () => {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-screen-sm flex-col items-center justify-center gap-6 py-24">
      <Header />

      <FeedbacksContextProvider>
        <main className="relative flex gap-8">
          <div className="flex-1">
            <FeedbackForm />
            <FeedbackList />
          </div>
          <div>
            <HashtagList />
          </div>
        </main>
      </FeedbacksContextProvider>

      <Footer />
    </div>
  );
};

export default App;
