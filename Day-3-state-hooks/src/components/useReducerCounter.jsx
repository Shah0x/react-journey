import { useReducer } from "react";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <h2 className="text-xl font-semibold mt-4 mb-2">🎯 Live useReducer Advanced Counter</h2>
      <p>This counter uses <code>useReducer</code> for more structured state management.</p>
      <div className="text-xl mb-4">Count: {state.count}</div>
      <div className="space-x-2">
        <button onClick={() => dispatch({ type: "increment" })} className="bg-green-600 text-white px-4 py-2 rounded">Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })} className="bg-red-600 text-white px-4 py-2 rounded">Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })} className="bg-blue-600 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </>
  );
};

export default UseReducerCounter;