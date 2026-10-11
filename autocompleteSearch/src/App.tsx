import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import DropDown, { type Product } from "./components/DropDown";

const App: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);

  async function fetchData() {
    try {
      const data = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
      const jsonData = await data.json();
      console.log(jsonData.products);
      setResults(jsonData.products || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim() !== "") {
        fetchData();
      } else {
        setResults([]);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <div className="bg-black min-h-screen w-screen flex flex-col justify-start items-center pt-20">
      <div className="w-full max-w-md flex flex-col">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <DropDown results={results} searchText={searchText} />
      </div>
    </div>
  );
};

export default App;
