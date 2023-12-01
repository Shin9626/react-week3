import { useState, useEffect } from "react";
import { SpotWrapper, Items, Item } from "./styled";
import Loading from "../../components/Loading";
import Selector from "../../components/Selector";
import CardSpot from "../../components/Card";
import Info from "../../components/Info";

const Spots = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [district, setDistrict] = useState("");
  const [spotList, setSpotList] = useState<SpotData[]>([]);
  const [info, setInfo] = useState<SpotData | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        setSpotList(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c"
      );
      const data = await response.json();
      const result = data.data.XML_Head.Infos.Info;
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  };

  const handleItemClick = (item: SpotData) => {
    setIsShowInfo(true);
    setInfo(item);
  };

  return (
    <SpotWrapper>
      <p>選擇行政區後可以產生對應景點列表，點擊該景點會出現詳細介紹～</p>
      <Selector district={district} setDistrict={setDistrict} />
      <Items>
        {spotList
          .filter((item) => item.Zipcode === district)
          .map((item, index) => (
            <Item
              key={`${item.Zipcode}-${index}`}
              onClick={() => handleItemClick(item)}
            >
              <CardSpot imgUrl={item.Picture1}>{item.Name}</CardSpot>
            </Item>
          ))}
      </Items>
      {/* Loading animation */}
      {isLoading && <Loading />}
      {/* Card info */}
      {isShowInfo && info && <Info setIsShowInfo={setIsShowInfo} info={info} />}
    </SpotWrapper>
  );
};

interface SpotData {
  Zipcode: string;
  Add: string;
  Name: string;
  Description: string;
  Picture1: string;
}

export default Spots;
