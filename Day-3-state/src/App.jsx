import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-amber-200 p-4">
        <h1>React Hooks</h1>
        <p>
          Actually in React there are many types of Hooks. In our Day‑3 progress
          we discuss the most frequently used hook: <strong>useState</strong>.
          Example: <code>const [count, setCount] = useState(0);</code>— here we
          declare the initial value.
        </p>

        <div>Concept</div>
        <ul>
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

        <strong>Now let’s make a counter using useState:</strong>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
    </>
  );
};

export default App;
