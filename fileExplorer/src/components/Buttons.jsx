import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    "Button 1",
    "Button 2",
    "Button 3",
    "Button 4",
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else {
      const updatedItems = [...items];
      const temp = updatedItems[selectedIndex];
      updatedItems[selectedIndex] = updatedItems[index];
      updatedItems[index] = temp;

      setItems(updatedItems);
      setSelectedIndex(null);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2>Dynamic Item Swapper</h2>
      <p>Click two buttons to swap their positions.</p>
      {selectedIndex !== null && (
        <p style={{ color: "blue" }}>
          Selected: {items[selectedIndex]} (Click another to swap)
        </p>
      )}

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              padding: "15px 25px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: selectedIndex === index ? "#ddd" : "#fff",
              border: "2px solid #333",
              borderRadius: "5px",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
