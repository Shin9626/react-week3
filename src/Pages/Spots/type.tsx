export interface SpotData {
  Zipcode: string;
  Add: string;
  Name: string;
  Description: string;
  Picture1: string;
}
export interface State {
  isLoading: boolean;
  isShowInfo: boolean;
  district: string;
  spotList: SpotData[];
  info: SpotData | null;
}
export const ACTION = {
  SET_LOADING: "SET_LOADING",
  SET_SHOW_INFO: "SET_SHOW_INFO",
  SET_DISTRICT: "SET_DISTRICT",
  SET_SPOT_LIST: "SET_SPOT_LIST",
  SET_INFO: "SET_INFO",
} as const;

export type ActionType =
  | { type: typeof ACTION.SET_LOADING; payload: boolean }
  | { type: typeof ACTION.SET_SHOW_INFO; payload: boolean }
  | { type: typeof ACTION.SET_DISTRICT; payload: string }
  | { type: typeof ACTION.SET_SPOT_LIST; payload: SpotData[] }
  | { type: typeof ACTION.SET_INFO; payload: SpotData | null };
