import "./SuggestionsList.css";

type SuggestionsListProps = {
  suggestions: string[];
  onClick: (item: string) => void;
};

function SuggestionsList({
  suggestions,
  onClick,
}: Readonly<SuggestionsListProps>) {
  return (
    <div className="suggestions-list">
      {suggestions.map((item) => (
        <div key={item} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default SuggestionsList;
