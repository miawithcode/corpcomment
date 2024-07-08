import { create } from "zustand";
import { TFeedback } from "../lib/types";

type Store = {
  feedbacks: TFeedback[];
  isLoading: boolean;
  errorMessage: string;
  selectedHashtag: string;
  addFeedback: (text: string) => Promise<void>;
  selectHashtag: (hashtag: string) => void;
  fetchFeedbacks: () => Promise<void>;
  getHashtagList: () => string[];
  getFilteredFeedbacks: () => TFeedback[];
};

export const useFeedbacksStore = create<Store>((set, get) => ({
  feedbacks: [],
  isLoading: false,
  errorMessage: "",
  selectedHashtag: "",
  addFeedback: async (text: string) => {
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

    // setFeedbacks([...feedbacks, newItem]);
    set((state) => ({
      feedbacks: [...state.feedbacks, newItem],
    }));

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
  },
  selectHashtag: (hashtag: string) => {
    // setSelectedHashtag(hashtag);
    set(() => ({
      selectedHashtag: hashtag,
    }));
  },
  fetchFeedbacks: async () => {
    // setIsLoading(true);
    set(() => ({
      isLoading: true,
    }));

    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      // setFeedbacks(data.feedbacks);
      set(() => ({
        feedbacks: data.feedbacks,
      }));
    } catch (error) {
      // setErrorMessage("Something went wrong. Please try again later");
      set(() => ({
        errorMessage: "Something went wrong. Please try again later",
      }));
    }

    // setIsLoading(false);
    set(() => ({
      isLoading: false,
    }));
  },
  getHashtagList: () => {
    return get()
      .feedbacks.map((item) => item.company)
      .filter((hashtag, index, array) => {
        return array.indexOf(hashtag) === index;
      });
  },
  getFilteredFeedbacks: () => {
    const state = get();

    return state.selectedHashtag
      ? state.feedbacks.filter(
          (feedback) => feedback.company === state.selectedHashtag,
        )
      : state.feedbacks;
  },
}));
