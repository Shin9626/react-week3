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
export type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_SHOW_INFO"; payload: boolean }
  | { type: "SET_DISTRICT"; payload: string }
  | { type: "SET_SPOT_LIST"; payload: SpotData[] }
  | { type: "SET_INFO"; payload: SpotData | null };
