import { createStore } from "redux";
import { QuizReducer } from "./Reducers/QuizReducer";

export const store = createStore(QuizReducer)