import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function List() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c')
      .then(res => res.json())
      .then(result=> {
        setData(result.data.XML_Head.Infos.Info);
      }).catch(err => {
        console.log(err);
      })
  },[])

  const handleGoToSpot = (e, item) => {
    e.preventDefault();
    navigate(`./${item.Id}`, { state: { item }})
  }

  return (
    <div>
      <h3>高雄旅遊景點</h3>
      <ul>
        {data.map(item => <li key={item.Id}><a href="#" onClick={e => handleGoToSpot(e, item)}>{item.Name}</a></li>)}
      </ul>
    </div>
  );
}

export default List;