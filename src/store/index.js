import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
    doneLoading: false,
    color: [22,22,22],
    diff: false
}
export const store = createStore(reducer, initialState);