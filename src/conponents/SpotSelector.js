import { zipCode } from '../assets/zipCode';

export default function SpotSelector({setSelection}) {
  const handleSelect = (value) => {
    setSelection(value);
  }
  return (
    <div className="SpotSelector">
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option value="" >選擇行政區</option>
        { 
          zipCode.map(item => 
          <option value={item.zip} key={item.zip}>
            {item.name}
          </option>)
        }
      </select>
    </div>
  )
}