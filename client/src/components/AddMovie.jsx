import React from 'react';
const { useState } = React;

var AddMovie = ({ onAddClick }) => {
  const[query, setQuery] = useState('');

  const handleInputChange = (event) => {
    var newQuery = event.target.value;
    setQuery(newQuery);
  }

  const handleAddClick = () => {
    onAddClick(query);
  };

  return (
    <div className="add-movie-bar">
      <input className="add-movie" type="text" onChange={handleInputChange}/>
      <button className="btn-add" onClick={handleAddClick}>
        <span className="span-add">Add</span>
      </button>
    </div>
  )
}

export default AddMovie;