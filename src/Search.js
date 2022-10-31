import React, { useState } from "react";
import { useContext } from "react";
import { SearchData } from "./Context/Search";

const Search = () => {
  //   const [apiData, setApiData] = useState([]);
  const searchValue = useContext(SearchData);
  console.log(searchValue.text.searchValue, "Text");
  //   useEffect(()=>{

  //   },[searchValue.text.searchValue])

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default Search;
