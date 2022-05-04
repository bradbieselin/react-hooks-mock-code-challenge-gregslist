import React from "react";

function Search({ search, onSearchChange, onSearchSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(search)
  }

  function handleChange(e) {
    onSearchChange(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
