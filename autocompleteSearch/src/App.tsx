import { useEffect, useState } from "react";
import DropDown from "./components/DropDown"
import SearchBar from "./components/SearchBar"

const App = () => {

  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  async function fetchData() {
    const data = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
    const jsonData = await data.json();
    console.log(jsonData.products);
    setResults(jsonData.products)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        fetchData();
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <div className="bg-black min-h-screen w-screen flex flex-col justify-start items-center pt-20">
      <div className="w-full max-w-md flex flex-col">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <DropDown results={results} />
      </div>
    </div>
  )
}

export default App
