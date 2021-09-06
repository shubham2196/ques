export const QuizReducer = (
  state = {
    questions: [
      {
        question:
          "The Fibres Which Are Obtained By Blending Natural And Synthetic Fibres Are Called",
        options: [
          {
            option: "Joint fibres ",
            correct: false,
          },
          {
            option: "Synthetic fibres",
            correct: false,
          },
          {
            option: "Mixed fibres",
            correct: true,
          },
          {
            option: " Real fibres",
            correct: false,
          },
        ],
        answered: false,
        point: 0,
        selectedOption: "",
      },
      {
        question: "What Does We Get When Pull From A Piece Of Cotton Fabric?",
        options: [
          {
            option: "Fibre",
            correct: false,
          },
          {
            option: "Strands",
            correct: false,
          },
          {
            option: "Yarn",
            correct: true,
          },
          {
            option: "Fleece",
            correct: false,
          },
        ],
        answered: false,
        point: 0,
        selectedOption: "",
      },
    ],
    score: 0,
  },
  action
) => {
  switch (action.type) {
    case "SELECT":
      let newState = [...state.questions];
      newState[action.payload.question_number].answered = true;
      newState[action.payload.question_number].selectedOption =
        action.payload.selectedOption;
      if (
        newState[action.payload.question_number].options[
          action.payload.selectedOption
        ].correct
      ) {
        newState[action.payload.question_number].point = 1;
      } else {
        newState[action.payload.question_number].point = 0;
      }
      state.questions = newState;

      break;
    default:
      break;
  }
  return state;
};
