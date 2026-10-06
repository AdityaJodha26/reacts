import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-blue-900");

  return (
    <div className={`min-h-screen ${color}`}>
      <h1 className="bg-white text-3xl flex items-center justify-center">
        Background will be changed soon
      </h1>

      <button
        onClick={() => setColor("bg-red-500")}
        className="bg-red-500 text-white px-4 py-2 m-2 rounded-2xl border-2 border-black"
      >
        Red
      </button>

      <button
        onClick={() => setColor("bg-green-500")}
        className="bg-green-500 text-white px-4 py-2 m-2 rounded-2xl border-2 border-black"
      >
        Green
      </button>
    </div>
  );
}

export default App;