import { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "../components/styles/Text";
import Wrapper from "../components/styles/Wrapper";
import Loading from "../components/Loading";
import Selector from "../components/Selector";
import CardSpot from "../components/CardSpot";

const SpotWrapper = styled(Wrapper)`
  justify-content: start;

  padding: 80px 40px;
`;

const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  max-width: 1224px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 8px;
  padding-bottom: 20px;
  width: 400px;

  border: 1px solid #001b2e;
  border-radius: 16px;

  background-color: white;

  text-align: center;

  overflow: hidden;
  cursor: pointer;

  box-sizing: border-box;
`;

const Spots = () => {
  const [isLoading, setIsLoading] = useState(true);
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
      <Text>選擇行政區後可以產生對應景點列表，點擊該景點會出現詳細介紹～</Text>
      <Selector selectedSpot={selectedSpot} setSelectedSpot={setSelectedSpot} />
      {isLoading && <Loading />}
      <Items>
        {selectedSpot &&
          spotList.map((item, index) => {
            if (item.Zipcode === selectedSpot)
              return (
                <Item key={`${item.Zipcode}-${index}`}>
                  <CardSpot imgUrl={item.Picture1}>{item.Name}</CardSpot>
                </Item>
              );
          })}
      </Items>
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
