import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <FeedbackForm />
        <FeedbackList />
        <HashtagList />
      </main>
      <Footer />
    </>
  );
};

export default App;
