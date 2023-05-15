import React from "react";
const Searchbar = () => {
  
    return (
        <header className="Searchbar">
  <form className="form">
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}
export default Searchbar