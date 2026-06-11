import UsersApp from "./components/UsersApp";
import ToggleApp from "./components/ToggleApp";
import WindowWidthApp from "./components/WindowWidthApp";

function App() {
  return (
    <div className="bg-yellow-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Day‑5: Custom Hooks
      </h1>

      <p className="mb-4">
        Custom hooks let you reuse React logic across components. They are just
        functions starting with <code>use</code>.
      </p>

      <UsersApp />
      <ToggleApp />
      <WindowWidthApp />
    </div>
  );
}

export default App;
