import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import Header from "./components/Header";

const App = () => {
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
