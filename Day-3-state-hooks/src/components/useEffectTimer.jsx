import { useState, useEffect } from "react";

const UseEffectTimer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h2 className="text-xl font-semibold mt-4 mb-2">🎯 Live useEffect Timer</h2>
      <p>This timer increases every second using <code>useEffect</code>.</p>
      <div className="text-xl mb-4">Seconds passed: {seconds}</div>
    </>
  );
};

export default UseEffectTimer;