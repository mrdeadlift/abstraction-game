export type WordSet = {
  words: string[];
  correctAnswer: string;
};

export const wordSets: Record<string, WordSet> = {
  easy: {
    words: ["リンゴ", "バナナ", "オレンジ"],
    correctAnswer: "果物",
  },
  medium: {
    words: ["飛行機", "新幹線", "自動車"],
    correctAnswer: "乗り物",
  },
  hard: {
    words: ["愛", "希望", "勇気"],
    correctAnswer: "抽象概念",
  },
};
