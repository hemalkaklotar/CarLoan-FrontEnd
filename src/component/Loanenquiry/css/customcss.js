export const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: "#202020",
    backgroundColor: state.isSelected ? "#acffac" : "#36a8361e",
  }),
  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#fff",
    border: "1px solid #36a836",
    boxShadow: "none",
    padding: "6px",
    textAlign: "center",
    borderRadius: "26px !important",
    color: "#36a836",
    fontWeight: "500",
    fontSize: "17px",
    letterSpacing: "2px",
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    outline: "none !important",
    border: "none !important",
    color: "#36a836",
    textAlign: "center",
  }),
};
