import { useState, useEffect, } from 'react';
import Loading from './Loading';
import SpotSelector from './SpotSelector';
import ListItems from './ListItems';

function List() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState("");

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
    <div className="tourlist" >
      <h2>高雄旅遊景點</h2>
      <SpotSelector setSelection={setSelection}/>
      <div className="tourlist-box">
        { loading ? <Loading/> : <ListItems data={data} zip={selection}/>}
      </div>   
    </div>
  );
}

export default List;