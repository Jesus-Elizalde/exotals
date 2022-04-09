import React, { useState } from "react";

import "./SearchBar.css";

import { ReactComponent as SearchIcon } from "../../svg/searchcar.svg";
import { ReactComponent as XIcon } from "../../svg/xbutton.svg";

const SearchBar = ({ placeholder, data }) => {
  console.log("🚀 ~ file: index.js ~ line 9 ~ SearchBar ~ data", data);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFiltered = data.filter((ele) => {
      return ele.Model?.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFiltered);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <XIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResults">
          {filteredData?.slice(0, 15).map((ele, i) => (
            <a className="dataItem" href={`/cars/${ele.id}`} key={i}>
              <img className="dataImg" src={ele?.Images[0]?.url} />
              <p>{ele?.Model?.name}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
