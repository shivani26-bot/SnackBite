import "./SearchBar.css";
import { useCallback, useState, useEffect } from "react";
import debounce from "lodash/debounce";
import snacks from "../../staticData/staticData";
import SuggestionList from "../SuggestionList/SuggestionList";
import { useDispatch } from "react-redux";
import { setDisplayedSnacks } from "../../redux/features/displaySnackSlice";
function SearchBar() {
  const [clicked, setClicked] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const staticData = [
    ...snacks.savoury,
    ...snacks.sweet,
    ...snacks.healthy,
    ...snacks.iceCreams,
  ];
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };
  const handleClick = () => {
    setClicked(!clicked);
    // console.log("suggestion", suggestions);
    if (suggestions.length > 0) {
      sessionStorage.setItem("suggestions", JSON.stringify(suggestions));
    }
    const storedSuggestion = sessionStorage.getItem("suggestions");
    const suggestionToDisplay = storedSuggestion
      ? JSON.parse(storedSuggestion)
      : suggestions;

    dispatch(setDisplayedSnacks(suggestionToDisplay));
    setSuggestions([]);
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestionsDebounced(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const getSuggestions = (query) => {
    // setError(null);
    // setLoading(true);
    try {
      let result;
      // console.log("staticData", staticData);
      if (staticData) {
        result = staticData.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });
      }

      setSuggestions(result);
    } catch (error) {
      // setError("Failed to fetch suggestions.");
      setSuggestions([]);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  const getSuggestionsDebounced = useCallback(
    debounce(getSuggestions, 300),
    []
  );

  const handleSuggestionClick = (suggestionName) => {
    setInputValue(suggestionName);

    const selected = suggestions.find(
      (suggestion) => suggestion.name === suggestionName
    );
    if (selected) dispatch(setDisplayedSnacks([selected]));
    setSuggestions([]);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={inputValue}
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
      />

      {/* {inputValue.length > 1 && suggestions.length === 0 && (
        <p className=" suggestions-list error">Failed to fetch suggestions.</p>
      )} */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          <SuggestionList
            highlight={inputValue}
            onSelect={handleSuggestionClick}
            suggestions={suggestions}
          />
        </ul>
      )}

      <button className={`${clicked ? "clicked" : ""}`} onClick={handleClick}>
        <img src="/public/search.png" alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
