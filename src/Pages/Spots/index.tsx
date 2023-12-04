import { useEffect, useReducer, Reducer } from "react";
import { SpotWrapper, Items, Item } from "./styled";
import { SpotData, State, Action } from "./type";
import Loading from "../../components/Loading";
import Selector from "../../components/Selector";
import CardSpot from "../../components/Card";
import Info from "../../components/Info";

const initialState = {
  isLoading: true,
  isShowInfo: false,
  district: "",
  spotList: [],
  info: null,
};

const reducer: Reducer<State, Action> = (state, action) => {
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

const Spots = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, isShowInfo, district, spotList, info } = state;

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        dispatch({ type: "SET_SPOT_LIST", payload: data });
      } catch (error) {
        console.error("Error:", error);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    })();
  }, []);

  const getData = async (): Promise<SpotData[]> => {
    try {
      const response = await fetch(
        "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c"
      );
      const data = await response.json();
      const result = data?.data?.XML_Head?.Infos?.Info || [];
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const handleItemClick = (item: SpotData) => {
    dispatch({ type: "SET_SHOW_INFO", payload: true });
    dispatch({ type: "SET_INFO", payload: item });
  };

  return (
    <SpotWrapper>
      <p>選擇行政區後可以產生對應景點列表，點擊該景點會出現詳細介紹～</p>
      <Selector
        district={district}
        setDistrict={(value: string) =>
          dispatch({ type: "SET_DISTRICT", payload: value })
        }
      />
      <Items>
        {spotList
          .filter((item) => item.Zipcode === district)
          .map((item: SpotData, index: number) => (
            <Item
              key={`${item.Zipcode}-${index}`}
              onClick={() => handleItemClick(item)}
            >
              <CardSpot imgUrl={item.Picture1}>{item.Name}</CardSpot>
            </Item>
          ))}
      </Items>
      {isLoading && <Loading />}
      {isShowInfo && info && (
        <Info
          setIsShowInfo={() =>
            dispatch({ type: "SET_SHOW_INFO", payload: false })
          }
          info={info}
        />
      )}
    </SpotWrapper>
  );
};

export default Spots;
