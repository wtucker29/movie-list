import React from 'react';
const { useState } = React;

var Search = ({ onSearchClick, onToWatchClick, onWatchedClick }) => {
  const [query, setQuery] = useState('');
  const [watchedActive, setWatchedActive] = useState(false);
  const [toWatchActive, setToWatchActive] = useState(false);

  const handleInputChange = (event) => {
    var newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleSearchClick = () => {
    onSearchClick(query);
  };

  const handleToWatchClick = () => {
    onToWatchClick();
    setToWatchActive(true);
    setWatchedActive(false);
  };

  const handleWatchedClick = () => {
    onWatchedClick();
    setToWatchActive(false);
    setWatchedActive(true);
  };

  return (
  <div className="search-bar">
    <button className={`btn-watched ${watchedActive ? 'active' : ''}`} onClick={handleWatchedClick}>
      <span>Watched</span>
    </button>
    <button className={`btn-to-watch ${toWatchActive ? 'active' : ''}`} onClick={handleToWatchClick}>
      <span>To Watch</span>
    </button>
    <input className="search-bar-form" type="text" onChange={handleInputChange}/>
    <button className="btn hidden-sm-down" onClick={handleSearchClick}>
      <span className="glyphicon glyphicon-search">Search!</span>
    </button>
  </div>
  )
}

export default Search;