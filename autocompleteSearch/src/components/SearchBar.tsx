import React from "react";

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  return (
    <div className="bg-gray-300 w-full p-3 rounded-t-md">
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder="Search..."
        className="w-full bg-transparent outline-none text-black"
      />
    </div>
  );
};

export default SearchBar;
