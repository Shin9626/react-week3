import { useEffect, useReducer } from "react";
import { SpotData, ACTION } from "./type";
import { SpotWrapper, Items, Item } from "./styled";
import { reducer } from "./reducer";
import Loading from "../../components/Loading";
import Selector from "../../components/Selector";
import CardSpot from "../../components/Card";
import Info from "../../components/Info";

// fetch data
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

// component
const Spots = () => {
  const initialState = {
    isLoading: true,
    isShowInfo: false,
    district: "",
    spotList: [],
    info: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, isShowInfo, district, spotList, info } = state;
  const { SET_DISTRICT, SET_INFO, SET_LOADING, SET_SHOW_INFO, SET_SPOT_LIST } =
    ACTION;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const data = await getData();
        if (isMounted) {
          dispatch({ type: SET_SPOT_LIST, payload: data });
          dispatch({ type: SET_LOADING, payload: false });
        }
      } catch (error: any) {
        console.error("Error:", error.message);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleItemClick = (item: SpotData) => {
    dispatch({ type: SET_SHOW_INFO, payload: true });
    dispatch({ type: SET_INFO, payload: item });
  };

  const handleSelectChange = (value: string) =>
    dispatch({ type: SET_DISTRICT, payload: value });

  const handleInfoClose = () =>
    dispatch({ type: SET_SHOW_INFO, payload: false });

  return (
    <SpotWrapper>
      <p>選擇行政區後可以產生對應景點列表，點擊該景點會出現詳細介紹～</p>
      <Selector value={district} onChange={handleSelectChange} />
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
      {isShowInfo && info && <Info onClick={handleInfoClose} value={info} />}
    </SpotWrapper>
  );
};

export default Spots;
