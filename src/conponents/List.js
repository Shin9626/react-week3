import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Loading() {
  return (
    <div className="loader" />
  )
}

function ListItems({data}) {
  const navigate = useNavigate();

  const handleGoToSpot = (e, item) => {
    e.preventDefault();
    navigate(`./${item.Id}`, { state: { item }})
  }

  return (
    <>
      {
        data.map(item => 
          <div className="card" key={item.Id}>
            <a href="#" onClick={e => handleGoToSpot(e, item)}>
              <img src={item.Picture1} width="100%" height="240"/>
              <p>{item.Name}</p>
            </a>
          </div>)
      }
    </>
  )
}

function List() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c')
      .then(res => res.json())
      .then(result=> {
        setData(result.data.XML_Head.Infos.Info);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  },[])
  
  return (
    <div className="tourlist">
      { loading ? <></> : <h2>高雄旅遊景點</h2>}
      <div className="tourlist-box">
        { loading ? <Loading/> : <ListItems data={data}/>}
      </div>   
    </div>
  );
}

export default List;