import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Spot() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setData(location.state.item);
  }, [data]);
  
  return (
    <div className="tour-item-box">
      <h2>{data.Name}</h2>
      <img src={data.Picture1} width="80%"/>
      <div className="tour-item-content">
        <p>{data.Description}</p>
      </div>
      <p>聯絡電話：{data.Tel}</p>
      開放時間：{data.Opentime}
      <p>景點地址：{data.Add}</p>
    </div>
  );
}

export default Spot;