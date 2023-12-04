import { ChangeEvent } from "react";
import { SelectorContainer } from "./styled";
import districtData from "../../constants/zip_code.json";

const Selector = (props: SelectorProps) => {
  const { district, setDistrict } = props;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const zip = e.target.value;
    setDistrict(zip);
  };

  return (
    <SelectorContainer>
      <select value={district} onChange={(e) => handleChange(e)}>
        <option value="" disabled>
          選擇行政區
        </option>
        {districtData.map((item, index) => (
          <option key={item.zip + index} value={item.zip}>
            {item.name}
          </option>
        ))}
      </select>
    </SelectorContainer>
  );
};

interface SelectorProps {
  district: string;
  setDistrict: React.Dispatch<string>;
}

export default Selector;
