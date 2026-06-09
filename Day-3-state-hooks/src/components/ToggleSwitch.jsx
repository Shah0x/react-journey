import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="my-2">
      <button
        onClick={() => setIsOn((prev) => !prev)}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default ToggleSwitch;