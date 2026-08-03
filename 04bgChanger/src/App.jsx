import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-gray-900");

  return (
    <div className={`min-h-screen ${color}`}>
      <h1 className="bg-white text-3xl">
        Background will be changed soon
      </h1>

      <button
        onClick={() => setColor("bg-gray-500")}
        className="bg-red-500 text-white px-4 py-2 m-2 rounded"
      >
        Red
      </button>

      <button
        onClick={() => setColor("bg-green-500")}
        className="bg-green-500 text-white px-4 py-2 m-2 rounded"
      >
        Green
      </button>
    </div>
  );
}

export default App;