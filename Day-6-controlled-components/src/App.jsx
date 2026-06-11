import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import SearchBar from "./components/SearchBar";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div className="bg-pink-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Day‑6: React Forms & Controlled Components
      </h1>

      <p className="mb-4">
        <strong>Definition:</strong> A controlled component is a form element
        whose value is managed by React state. Instead of letting the browser
        handle input, React keeps the value in state and updates it on every
        change.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🔹 Real Life Example</h2>
        <p>
          Think of a login form. When you type your username and password, React
          stores those values in state. When you click “Submit,” React can
          validate them before sending to the server.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🔹 Syntax</h2>
        <pre className="bg-gray-100 p-2 rounded">
{`const [value, setValue] = useState("");

<input 
  type="text" 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>`}
        </pre>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🔹 Pros & Cons</h2>
        <ul className="list-disc pl-6">
          <li>✅ Easy to validate and control input values</li>
          <li>✅ Keeps UI and state in sync</li>
          <li>✅ Works well with complex forms</li>
          <li>❌ More code compared to uncontrolled inputs</li>
          <li>❌ Can feel verbose for very simple forms</li>
        </ul>
      </div>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">🎯 Practice Tasks</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">1. Login Form</h3>
        <LoginForm />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">2. Signup Form</h3>
        <SignupForm />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">3. Search Bar</h3>
        <SearchBar />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">4. Feedback Form</h3>
        <FeedbackForm />
      </div>

      <hr className="my-6" />

      <h2 className="text-xl font-bold">📅 Suggested Learning Path</h2>
      <ul className="list-disc pl-6">
        <li>Day‑3 → useState</li>
        <li>Day‑4 → useEffect</li>
        <li>Day‑5 → Custom Hooks</li>
        <li>Day‑6 → Forms & Controlled Components</li>
        <li>Day‑7 → Context API</li>
      </ul>
    </div>
  );
}

export default App;
