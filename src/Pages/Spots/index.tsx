import { useState, useEffect } from "react";
import { SpotWrapper, Items, Item } from "./styled";
import Loading from "../../components/Loading";
import Selector from "../../components/Selector";
import CardSpot from "../../components/Card";
import Info from "../../components/Info";

const Spots = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState("");
  const [spotList, setSpotList] = useState<SpotData[]>([]);

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
      return error;
    }
  };

  return (
    <SpotWrapper>
      <p>選擇行政區後可以產生對應景點列表，點擊該景點會出現詳細介紹～</p>
      <Selector selectedSpot={selectedSpot} setSelectedSpot={setSelectedSpot} />
      <Items>
        {selectedSpot &&
          spotList.map((item, index) => {
            if (item.Zipcode === selectedSpot)
              return (
                <Item
                  key={`${item.Zipcode}-${index}`}
                  onClick={() => setIsShowInfo(true)}
                >
                  <CardSpot imgUrl={item.Picture1}>{item.Name}</CardSpot>
                </Item>
              );
          })}
      </Items>
      {/* Loading animation */}
      {isLoading && <Loading />}
      {/* Card info */}
      {isShowInfo && <Info setIsShowInfo={setIsShowInfo} />}
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
