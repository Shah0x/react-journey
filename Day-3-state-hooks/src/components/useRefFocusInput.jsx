import { useRef } from "react";

const UseRefFocusInput = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h2 className="text-xl font-semibold mt-4 mb-2">🎯 Live useRef Focus Input</h2>
      <p>Click the button to focus the input using <code>useRef</code>.</p>
      <div className="mb-4">
        <input ref={inputRef} type="text" placeholder="Type something..." className="border p-2 rounded mr-2" />
        <button onClick={focusInput} className="bg-purple-500 text-white px-4 py-2 rounded">Focus Input</button>
      </div>
    </>
  );
};

export default UseRefFocusInput;