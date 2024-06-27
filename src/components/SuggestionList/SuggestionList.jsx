export default function SuggestionList({
  suggestions = [],
  highlight,
  onSelect,
}) {
  // console.log("suggestion1", suggestions);
  return (
    <>
      {suggestions.map((suggestion, index) => {
        return (
          <li
            className="suggestion-item"
            key={index}
            onClick={(e) => {
              // console.log("onclicksuggestionname", suggestion.name);
              onSelect(suggestion.name);
            }}
          >
            {getHighLightedText(suggestion.name, highlight)}
          </li>
        );
      })}
    </>
  );
}

const getHighLightedText = (text, highlight) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, index) => {
        return part.toLowerCase() === highlight.toLowerCase() ? (
          <b style={{ color: "red" }} key={index}>
            {part}
          </b>
        ) : (
          part
        );
      })}
    </span>
  );
};
