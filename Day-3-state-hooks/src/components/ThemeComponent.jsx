import { useContext } from "react";
import { ThemeContext } from "../App";

const ThemeComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="p-4 mt-4 rounded"
      style={{
        backgroundColor: theme === "light" ? "#fef9c3" : "#1f2937",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3 className="text-lg font-semibold">Theme Component</h3>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default ThemeComponent;