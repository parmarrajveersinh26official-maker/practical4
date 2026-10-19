import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      className="min-h-screen p-8 text-center flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Background Color Changer
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Select a color to change the background:
        </p>

        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-24 h-16 cursor-pointer rounded-lg border-4 border-gray-300"
        />

        <p className="text-xl font-semibold text-gray-700 mt-6">
          Selected Color:{" "}
          <span className="font-bold">{color}</span>
        </p>
      </div>
    </div>
  );
}

export default ColorChanger;