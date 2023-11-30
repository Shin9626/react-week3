import { ChangeEvent } from "react";
import { SelectorContainer } from "./styled";
import district from "../../constants/zip_code.json";

const Selector = (props: SelectorProps) => {
  const { selectedSpot, setSelectedSpot } = props;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const zip = e.target.value;
    setSelectedSpot(zip);
  };

  return (
    <SelectorContainer>
      <select value={selectedSpot} onChange={(e) => handleChange(e)}>
        <option value="" disabled>
          選擇行政區
        </option>
        {district.map((item, index) => (
          <option key={item.zip + index} value={item.zip}>
            {item.name}
          </option>
        ))}
      </select>
    </SelectorContainer>
  );
};

interface SelectorProps {
  selectedSpot: string;
  setSelectedSpot: React.Dispatch<React.SetStateAction<string>>;
}

export default Selector;
