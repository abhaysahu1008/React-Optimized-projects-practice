import React, { useEffect } from "react";

export interface Product {
  id: number;
  title: string;
  [key: string]: any;
}

interface DropDownProps {
  results: Product[];
  searchText: string;
}

const DropDown: React.FC<DropDownProps> = ({ results, searchText }) => {

  if (!searchText.trim()) return null;

  return (
    <div className="bg-gray-200 w-full mt-1 rounded-b-md shadow-lg p-2 text-black max-h-60 overflow-y-auto">
      {results.length > 0 ? (
        results.map((product) => (
          <div key={product.id} className="p-2 hover:bg-gray-300 cursor-pointer rounded">
            {product.title}
          </div>
        ))
      ) : (
        <div className="p-2 text-gray-500">No results found</div>
      )}
    </div>
  );
};

export default DropDown;
