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
      <img src={data.Picture1} width="95%"/>
      <div className="tour-item-content">
        <p>{data.Toldescribe}</p>
      </div>
      <p>{data.Add}</p>
    </div>
  );
}

export default Spot;