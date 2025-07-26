import React from "react";
import Select from "react-select";

export default function MainSelect({ options, value, onChange, className }) {
  const selectedOption =
    options.find((option) => option.value === value) || null;
  return (
    <div
      className={`flex flex-col w-full gap-y-2 hidden-1-shadow rounded-2xl ${className}`}
    >
      <Select
        options={options}
        isSearchable={false}
        value={selectedOption}
        onChange={onChange}
        placeholder=""
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "#212121",
            borderRadius: "1rem",
            outline: "none",
            color: "#fff",
            padding: "0.4rem",
            minHeight: "41px",
            border: "none",
            cursor: "pointer",
            boxShadow: "none",
            "&:focus": {
              border: "none",
              boxShadow: "none",
            },
            "&:hover": {
              border: "none",
              boxShadow: "none",
            },
          }),
          menu: (base, state) => ({
            ...base,
            minWidth: "200px",
            marginTop: "4px",
            backgroundColor: "#212121",
            color: "#fff !important",
            borderRadius: "1rem",
            outline: "none",
            overflow: "hidden",
            zIndex: "2",
            // "::-webkit-scrollbar": {
            //     width: "4px",
            //     height: "0px",
            //   },
            //   "::-webkit-scrollbar-track": {
            //     background: "#f1f1f1"
            //   },
            //   "::-webkit-scrollbar-thumb": {
            //     background: "#888"
            //   },
            //   "::-webkit-scrollbar-thumb:hover": {
            //     background: "#555"
            //   }
          }),
          option: (base, state) => ({
            ...base,
            padding: "0.8rem 1rem",
            color: "#fff !important",
            backgroundColor: "#212121",
            outline: "none",
            border: "none",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#333333",
            },
          }),
          singleValue: (base, state) => ({
            ...base,
            color: "white",
          }),
          valueContainer: (base, state) => ({
            ...base,
            outline: "none",
            paddingLeft: "0.5rem",
          }),
          indicatorSeparator: (base, state) => ({
            ...base,
            display: "none",
          }),
          dropdownIndicator: (base, state) => ({
            color: "#FFF",
            marginRight: "0.25rem",
            // transition: "all 0.3s ease-in-out",
            transform: state.selectProps.menuIsOpen
              ? "rotate(180deg)"
              : "rotate(0deg)",
          }),
          clearIndicator: (base, state) => ({
            ...base,
            color: "#676767",
            outline: "none",
          }),
          input: (base, state) => ({
            ...base,
            backgroundColor: "#f00",
          }),
        }}
      />
    </div>
  );
}