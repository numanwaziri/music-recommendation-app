import { CustomSlider } from "../UI/CustomSlider.jsx";

export const SliderWithLabels = ({
  mainLabel,
  altLabel,
  min = 0,
  max = 1,
  step = 0.05,
  value,
  setValue,
  className = "",
}) => (
  <div
    className={`flex items-center justify-center gap-4 sm:h-48 sm:w-fit sm:flex-col lg:h-[50svh] lg:max-h-72 lg:min-h-48 ${className}`}
  >
    <h2 className="text-sm font-[500] text-neutral-200 max-sm:hidden">
      {mainLabel}
    </h2>
    <h2 className="text-sm font-[500] text-neutral-200 sm:hidden">
      {altLabel}
    </h2>
    <div className="flex flex-grow items-center justify-center max-sm:flex-col">
      <CustomSlider
        value={value}
        setValue={setValue}
        min={min}
        max={max}
        step={step}
        defaultValue={value}
        orientation={"vertical"}
      />
      <h2
        className={`pointer-events-none border-[#37733a] bg-[#101010] text-[10px] font-[500] text-[#3e8145] ${
          value === 0.5 ? "border-[1px] p-[3.5px]" : "opacity-0"
        } absolute select-none rounded-full text-center transition-all`}
      >
        Off
      </h2>
    </div>
    <h2 className="text-sm font-[500] text-neutral-200 sm:hidden">
      {mainLabel}
    </h2>
    <h2 className="text-sm font-[500] text-neutral-200 max-sm:hidden">
      {altLabel}
    </h2>
  </div>
);
