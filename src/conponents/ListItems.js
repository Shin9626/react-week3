import { useNavigate } from 'react-router-dom';

export default function ListItems({data, zip}) {
  const navigate = useNavigate();
  const handleGoToSpot = (e, item) => {
    e.preventDefault();
    navigate(`./${item.Id}`, { state: { item }})
  }

  return (
    <>
      {
        data.filter(item => item.Zipcode === zip)
          .map(item => 
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