import { ChangeEvent } from "react";
import { SelectorContainer } from "./styled";
import districtData from "../../constants/zip_code.json";

const Selector = ({ value, onChange }: SelectorProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const zip = e.target.value;
    onChange(zip);
  };

  return (
    <SelectorContainer>
      <select value={value} onChange={handleChange}>
        <option value="" disabled>
          選擇行政區
        </option>
        {districtData.map(({ zip, name }, index) => (
          <option key={zip + index} value={zip}>
            {name}
          </option>
        ))}
      </select>
    </SelectorContainer>
  );
};

interface SelectorProps {
  value: string;
  onChange: React.Dispatch<string>;
}

export default Selector;
