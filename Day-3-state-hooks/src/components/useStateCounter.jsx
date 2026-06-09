import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">🎯 useState Counter</h2>
      <strong className="block mb-2">
        Now let’s make a counter using useState:
      </strong>
      <div className="text-xl mb-4">Count: {count}</div>
      <div className="space-x-2 mb-8">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increase
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default UseStateCounter;