import useToggle from "../hooks/useToggle";

const ToggleApp = () => {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <h2>🔀 Toggle Example</h2>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleApp;
