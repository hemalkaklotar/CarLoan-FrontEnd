import React, { useEffect } from "react";

const SearchBar = ({ setSearchTerm }) => {
  function handleSearch(e) {
    const delayDebounceFn = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 2000);
    return () => clearTimeout(delayDebounceFn);
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      setSearchTerm(e.target.value);
    }
  }
  return (
    <div className="d-flex justify-content-end" style={{zIndex:"999"}}>
      <input
        type="text"
        style={{
          border: "2px solid var(--color-primary)",
          borderRadius: "18px",
          padding: "12px",
          minWidth: "290px",
          fontSize: "1.2rem",
          letterSpacing: "2px",
          color: "var(--color-secondary)",
        }}
        onChange={(e) => handleSearch(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
