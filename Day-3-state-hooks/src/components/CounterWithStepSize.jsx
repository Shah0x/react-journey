import { useState } from "react";

const CounterWithStepSize = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter: {count}</div>
      <div className="flex  gap-1">
        <button
          onClick={() => setCount(count + 2)}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Increacse + 2
        </button>
        <button
          onClick={() => setCount(count - 2)}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Decrease - 2
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default CounterWithStepSize;
