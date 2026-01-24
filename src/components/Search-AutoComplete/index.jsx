import { useState } from "react";
import "./style.css";

export default function SearchAutocomplete() {
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);
    if (value === "") {
      setResults([]);
      return;
    }

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setResults(filtered);
  };

  return (
    <div className="search-container">
      <h1>Search Autocomplete</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search fruits..."
        className="search-input"
      />
      <ul className={`results-list ${results.length ? "show" : ""}`}>
        {results.map((item, index) => (
          <li
            key={index}
            onClick={() => setQuery(item)}
            className="result-item"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
