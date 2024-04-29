"use client";
const SearchInventions = ({ onSearchChange }) => {
  return (
    <div className="text-center text-white text-2xl mb-8">
      <label htmlFor="search-inventions" className="pr-5">
        Search
      </label>
      <input
        id="search-inventions"
        className="w-1/2"
        type="text"
        placeholder="Search by invention or inventor"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
export default SearchInventions;
