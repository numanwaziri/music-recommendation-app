import "./CustomCheckbox.css";
import { memo } from "react";

const CustomCheckbox = memo(({ dataName, value, setValue, height }) => {
  const handleChange = (event) => {
    setValue(event.target.checked);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <input
        type="checkbox"
        checked={value}
        onChange={handleChange}
        data-name={`${dataName}${value ? "" : ""}`}
        className={`checkbox ${height} bg-[rgba(30,172,80,0.2)] text-slate-200 transition-all duration-75`}
      />{" "}
    </div>
  );
});

export default CustomCheckbox;
