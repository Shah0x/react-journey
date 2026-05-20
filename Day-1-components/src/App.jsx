import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Practice from "./Practice";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="min-h-screen bg-amber-200 px-4 sm:px-10 md:px-20 lg:px-40 py-6
"
      >
        <h1
          className="text-3xl text-black font-medium text-center p-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl
 "
        >
          Day 1 of mastering React Components
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Not just learning syntax — understanding WHY components exist, how
          React thinks, and how reusable UI is built.
        </p>
        <label htmlFor="small" className="text-[14px]">
          React Vite | Day 1 of Learning
        </label>
        <p className="text-sm sm:text-base md:text-lg">
          <strong>A component = a reusable piece of UI in React.</strong>
          <br />
          Think of it like a Lego block — you build small blocks and combine
          them into bigger structures. Every React app is made of components.
          <br />
          <strong>“Component = Chhota block jo milke app banata hai.”</strong>
        </p>
        <hr />
        <p className="text-center text-sm sm:text-base md:text-lg">
          Lets Start:
        </p>
        <hr />
        Here I Call my Greeting Component: <Greeting />
        <hr />
        <p className="text-sm sm:text-base md:text-lg">
          In this Page we See Two components Greeting and Footer we builde both
          on the components and we just import in this App.jsx and Call like:{" "}
          <Greeting /> <Footer />{" "}
        </p>
        <br />
        <strong>
          IMPORTANT Component Rules:
          <li>
            Component names must start with Capital letter (Greeting, not
            greeting).
          </li>
          <li>Must return JSX (HTML‑like syntax).</li>
          <li>Must be exported (export default).</li>
          <li>Can be reused anywhere.</li>
        </strong>
        <br />
        <p>
          Now We do Some Practice to Grip strongly,
          <strong>
            {" "}
            Practice: We Make 3 Components Header , Body, & Footer and an SPA
            UI.
          </strong>
        </p>
        <div
          className=" flex flex-col
 items-center gap-4 p-4 "
        >
          <button
            onClick={() => navigate("/practice")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            PRACTICE DONE!
          </button>

          <p className="text-center max-w-xl ">
            One more thing we notice is that after the practice is done, we need
            to connect the link of our Practice Page UI. At this moment, React
            Router helps us connect links without reloading the page.
          </p>
        </div>
        <br />
        <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center p-4 border-1 bg-amber-100">
          <Footer />
        </footer>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
