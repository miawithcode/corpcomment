import React, { createContext, useMemo, useState } from "react";
import { type TFeedback } from "../lib/types";
import { useFeedbacks } from "../hooks/useFeedbacks";

type FeedbacksContextProviderProps = {
  children: React.ReactNode;
};

type TFeedbackContext = {
  filteredFeedbacks: TFeedback[];
  isLoading: boolean;
  errorMessage: string;
  hashtagList: string[];
  handleAddFeedback: (text: string) => void;
  handleSelectHashtag: (hashtag: string) => void;
};

export const FeedbackContext = createContext<TFeedbackContext | null>(null);

const FeedbacksContextProvider = ({
  children,
}: FeedbacksContextProviderProps) => {
  const { isLoading, errorMessage, feedbacks, setFeedbacks } = useFeedbacks();
  const [selectedHashtag, setSelectedHashtag] = useState("");

  const filteredFeedbacks = useMemo(
    () =>
      selectedHashtag
        ? feedbacks.filter((feedback) => feedback.company === selectedHashtag)
        : feedbacks,
    [feedbacks, selectedHashtag],
  );

  const hashtagList = useMemo(
    () =>
      feedbacks
        .map((item) => item.company)
        .filter((hashtag, index, array) => {
          return array.indexOf(hashtag) === index;
        }),
    [feedbacks],
  );

  const handleSelectHashtag = (hashtag: string) => {
    setSelectedHashtag(hashtag);
  };

  const handleAddFeedback = async (text: string) => {
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

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        filteredFeedbacks,
        isLoading,
        errorMessage,
        hashtagList,
        handleAddFeedback,
        handleSelectHashtag,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbacksContextProvider;
