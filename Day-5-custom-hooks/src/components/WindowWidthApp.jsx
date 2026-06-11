import useWindowWidth from "../hooks/useWindowWidth";

const WindowWidthApp = () => {
  const width = useWindowWidth();

  return (
    <div>
      <h2>📏 Window Width</h2>
      <p>Current width: {width}px</p>
    </div>
  );
};

export default WindowWidthApp;
