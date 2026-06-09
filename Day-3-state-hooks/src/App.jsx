// Day-3: React Hooks (useState + Overview of Other Hooks)

import { createContext, useState } from "react";
import CounterWithStepSize from "./components/CounterWithStepSize";
import ShowHide from "./components/ShowHide";
import ThemeComponent from "./components/ThemeComponent";
import ToggleSwitch from "./components/ToggleSwitch";
import UseEffectTimer from "./components/useEffectTimer";
import UseReducerCounter from "./components/useReducerCounter";
import UseRefFocusInput from "./components/useRefFocusInput";
import UseStateCounter from "./components/useStateCounter";

export const ThemeContext = createContext("light");

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="bg-amber-200 p-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Day‑3: React Hooks (useState, useEffect, useRef, useContext,
          useReducer)
        </h1>

        <p className="mb-4">
          In React there are many types of Hooks. Today we focus on the most
          frequently used one: <strong>useState</strong>. <br />
          Example: <code>const [count, setCount] = useState(0);</code> — here we
          declare the initial value.
        </p>

        <div className="mb-4 font-semibold">Concept</div>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Hooks are special functions in React that let you use features like
            state and lifecycle inside functional components.
          </li>
          <li>
            The State Hook <code>useState</code> allows a component to remember
            values between renders.
          </li>
          <li>
            <strong>Props vs State:</strong>
          </li>
          <li>Props → external data passed into a component.</li>
          <li>State → internal data managed by the component itself.</li>
        </ul>

        <div className="mb-4 font-semibold">Pros & Cons</div>
        <ul className="list-disc pl-6 mb-6">
          <li>✅ Simple local state management.</li>
          <li>✅ Easy to update UI dynamically.</li>
          <li>✅ Works inside functional components.</li>
          <li>❌ Can get messy with complex logic.</li>
          <li>❌ Frequent updates may cause re‑renders.</li>
          <li>
            ❌ For advanced cases, <code>useReducer</code> or context is better.
          </li>
        </ul>

        <UseStateCounter />

        <hr className="my-6" />

        <strong className="block mb-4">
          Other Frequently Used Hooks in React
        </strong>

        <h2 className="text-2xl font-semibold mb-2">useEffect</h2>
        <p>
          <strong>Purpose:</strong> Handle side effects like fetching data,
          timers, and subscriptions.
        </p>
        <pre className="bg-gray-100 p-2 rounded mb-2">
          {`useEffect(() => {
  // effect code
  return () => {
    // cleanup code
  };
}, [dependencies]);`}
        </pre>
        <p>
          <strong>Practice Ideas:</strong> Timer app, fetch users from API,
          track window resize.
        </p>

        <UseEffectTimer />

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">useRef</h2>
        <p>
          <strong>Purpose:</strong> Store values that don’t trigger re‑renders
          or access DOM elements directly.
        </p>
        <pre className="bg-gray-100 p-2 rounded mb-2">
          {`const inputRef = useRef(null);
<input ref={inputRef} />`}
        </pre>
        <p>
          <strong>Practice Ideas:</strong> Focus input on button click, store
          previous state, build stopwatch.
        </p>

        <UseRefFocusInput />

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">useContext</h2>
        <p>
          <strong>Purpose:</strong> Share data across components without props
          drilling.
        </p>
        <pre className="bg-gray-100 p-2 rounded mb-2">
          {`const ThemeContext = createContext("light");
const value = useContext(ThemeContext);`}
        </pre>
        <p>
          <strong>Practice Ideas:</strong> Theme switcher, user authentication,
          language context.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          🎯 Live useContext Theme Switcher
        </h2>
        <p>
          Toggle between light and dark themes using <code>useContext</code>.
        </p>
        <div className="space-x-2 mb-4">
          <button
            onClick={() => setTheme("light")}
            className="bg-yellow-400 text-black px-4 py-2 rounded"
          >
            Light Theme
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Dark Theme
          </button>
        </div>
        <ThemeComponent />

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">useReducer (bonus)</h2>
        <p>
          <strong>Purpose:</strong> Manage complex state logic (like Redux
          lite).
        </p>
        <pre className="bg-gray-100 p-2 rounded mb-2">
          {`const [state, dispatch] = useReducer(reducer, initialState);`}
        </pre>
        <p>
          <strong>Practice Ideas:</strong> Counter with multiple actions, To‑Do
          list with add/remove/complete.
        </p>

        <UseReducerCounter />

        <hr className="my-6" />

        <h2 className="text-xl font-bold">📅 Suggested Learning Path</h2>
        <ul className="list-disc pl-6 mb-8">
          <li>Day‑3 → useState (done ✅)</li>
          <li>Day‑4 → useEffect (side effects)</li>
          <li>Day‑5 → useRef (DOM & persistent values)</li>
          <li>Day‑6 → useContext (global data sharing)</li>
          <li>Day‑7 → useReducer (advanced state)</li>
        </ul>

        <hr className="my-6 border-amber-300" />

        <div className="bg-amber-100 p-6 rounded-xl border border-amber-300 space-y-6">
          <h2 className="text-2xl font-bold text-amber-950 mb-2">
            🛠️ My useState Practice Projects
          </h2>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <CounterWithStepSize />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Toggle Switch Component</h3>
            <ToggleSwitch />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <ShowHide />
          </div>
        </div>

      </div> 
    </ThemeContext.Provider>
  );
};

export default App;