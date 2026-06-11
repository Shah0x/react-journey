import RandomApi from "./components/RandomApi";
import TimerApp from "./components/TimerApp";
import WindowWidth from "./components/WindowWidth";

function App() {
  return (
    <div className="bg-green-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Day‑4: React Hook (useEffect)
      </h1>

      <p className="mb-4">
        <strong>Definition:</strong> <code>useEffect</code> is a React Hook that
        lets you run side effects in your components. Side effects are actions
        that happen outside the normal rendering flow — like fetching data,
        setting up timers, or listening to events.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🔹 Real Life Example</h2>
        <p>
          Imagine you open a chat app. When the screen loads, it automatically
          fetches your new messages from the server. That “fetching” is a side
          effect. In React, we handle this with <code>useEffect</code>.
        </p>
      </div>

      {/* 📘 Syntax */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🔹 Syntax</h2>
        <pre className="bg-gray-100 p-2 rounded">
          {`useEffect(() => {
  // effect code
  return () => {
    // cleanup code
  };
}, [dependencies]);`}
        </pre>
        <p className="mt-2">
          <strong>Dependencies:</strong> Decide when the effect runs.
          <br /> <code>[]</code> → run once (on mount).
          <br /> <code>[variable]</code> → run when that variable changes.
          <br /> No array → run after every render.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🔹 Pros & Cons</h2>
        <ul className="list-disc pl-6">
          <li>✅ Perfect for API calls, timers, event listeners.</li>
          <li>✅ Keeps side effects separate from rendering logic.</li>
          <li>✅ Supports cleanup to avoid memory leaks.</li>
          <li>❌ Wrong dependencies can cause infinite loops.</li>
          <li>❌ Debugging complex effects can be tricky.</li>
        </ul>
      </div>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">🎯 Practice Tasks</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">1. TimerApp</h3>
        <p>
          Counts seconds using <code>useEffect</code> with cleanup.
        </p>
        <TimerApp />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">2. RandomApi</h3>
        <p>
          Fetches random images from an API using <code>useEffect</code>.
        </p>
        <RandomApi />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">3. WindowWidth</h3>
        <p>
          Tracks browser window width using <code>useEffect</code> and event
          listeners.
        </p>
        <WindowWidth />
      </div>

      <hr className="my-6" />

      <h2 className="text-xl font-bold">📅 Suggested Learning Path</h2>
      <ul className="list-disc pl-6">
        <li>Day‑3 → useState (done ✅)</li>
        <li>Day‑4 → useEffect (side effects)</li>
        <li>Day‑5 → useRef (DOM & persistent values)</li>
        <li>Day‑6 → useContext (global data sharing)</li>
        <li>Day‑7 → useReducer (advanced state)</li>
      </ul>
    </div>
  );
}

export default App;
