import { useState } from "react";

const ShowHide = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="p-6 max-w-sm mx-auto text-center bg-white rounded-xl shadow-md space-y-4 mt-4">
      {visible && (
        <p className="text-xl font-medium text-gray-800">
          Hello, My name is Shahmeer
        </p>
      )}

      <button
        onClick={() => setVisible(!visible)}
        className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition"
      >
        {visible ? "Hide" : "Visible"}
      </button>
    </div>
  );
};

export default ShowHide;
