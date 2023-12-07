import { Reducer } from "react";
import { State, ActionType } from "./type";

export const reducer: Reducer<State, ActionType> = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_SHOW_INFO":
      return { ...state, isShowInfo: action.payload };
    case "SET_DISTRICT":
      return { ...state, district: action.payload };
    case "SET_SPOT_LIST":
      return { ...state, spotList: action.payload };
    case "SET_INFO":
      return { ...state, info: action.payload };
    default:
      return state;
  }
};
