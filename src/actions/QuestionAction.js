export function getAllQuestions() {
  let allQuests = [
    {
      q:
        "Look at this series: 2, 4, 6, 8, 10, ... What number should come next?",
      a1: "11",
      a2: "12",
      a3: "13",
      a4: "14",
      correctAnswer: "12",
    },
    {
      q:
        "Look at this series: 58, 52, 46, 40, 34, ... What number should come next?",
      a1: "26",
      a2: "28",
      a3: "30",
      a4: "32",
      correctAnswer: "28",
    },
    {
      q: "Which word does NOT belong with the others?",
      a1: "leopard",
      a2: "cougar",
      a3: "elephant",
      a4: "lion",
      correctAnswer: "elephant",
    },
    {
      q: "book must has",
      a1: "fiction",
      a2: "pages",
      a3: "pictures",
      a4: "learning",
      correctAnswer: "pages",
    },
    {
      q: "Which word does NOT belong with the others?",
      a1: "fair",
      a2: "just",
      a3: "equitable",
      a4: "favorable",
      correctAnswer: "favorable",
    },
  ];
  return {
    type: "GET_ALL_QUESTIONS",
    payload: allQuests,
  };
}
