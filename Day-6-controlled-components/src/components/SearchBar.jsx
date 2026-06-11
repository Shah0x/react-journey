import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-yellow-100 p-6 rounded max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">🔍 Search Bar</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
        className="border p-2 rounded w-full mb-2"
      />
      <p className="mt-2">You are searching for: {query}</p>
    </div>
  );
}

export default SearchBar;
