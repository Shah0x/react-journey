import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Card from "./components/Card";
import Greeting from "./components/Greeting";
import Student from "./components/Student";
import ProfileCardApp from "./pages/ProfileCardApp";
import ResuableButton from "./pages/ResuableButton";
import StudentListApp from "./pages/StudentListApp";
import ToDoListApp from "./pages/ToDoListApp";

const HomePage = () => {
  const navigate = useNavigate();
  const students = [
    { name: "Ali", age: 22, isStudent: true },
    { name: "Sara", age: 20, isStudent: false },
  ];

  return (
    <>
      <div className=" bg-amber-200 px-4 sm:px-10 md:px-20 lg:px-40 py-6">
        <h1 className="text-3xl text-black font-medium text-center p-2  sm:text-2xl md:text-3xl lg:text-4xl">
          Day 2 of Props in React Detailed
        </h1>
        <br />
        <p>
          <strong>
            Props = read-only properties that are shared between components. A
            parents components can send data to a child components
            {/* <component key=value /> */}
          </strong>
        </p>
        <hr />
        Now lets Jump on the Practical:
        <p>
          We Make an Student.jsx File in which we creat a Prop function and We
          pass values into a parent function lets see:
        </p>
        Now I Call Studend give Values to check where first prop;
        <Student name="Shahmeer" age={21} isStudent={true} />
        <Student name="Khizer" age={28} isStudent={false} />
        <Student />
        <hr />
        <br />
        <h2 className="text-2xl font-medium">Now Phases of Props:</h2>
        <h3>
          <b> Phase 1:</b> Basics — Passing simple data
        </h3>
        <p>
          I'm Creating an Greeting file in my Components folder in which i make
          a simple fuction return para of hello and Callback-Name
        </p>
        <strong> Now I Call it Below: I pass my Name in this Callback.</strong>
        <Greeting name={"Shahmeer"} />
        <Greeting name={"Ali"} />
        <hr />
        <h3>
          <b> Phase 2:</b> Multiple props
        </h3>
        <p>
          So i'm Creating an Component Student.jsx in which with name, age,
          isStudent.
        </p>
        <strong> Now I Call it Below: I pass my Name in this Callback.</strong>
        <Student name="Shahmeer" age={21} isStudent={true} />
        <hr />
        <h3>
          <b> Phase 3:</b> Default props
        </h3>
        <p>
          In Student Component a Add defaultProps: its work when we call
          component witout giving passing any prop they show default
        </p>
        <strong> Now I Call it Below: I pass my Name in this Callback.</strong>
        <Student />
        <hr />
        <h3>
          <b> Phase 4:</b> PropTypes validation
        </h3>
        <p>Import PropTypes: import PropTypes from "prop-types";</p>
        <p>Student.propTypes = name PropTypes string, like that </p>
        <strong> Now I Call it Below: I pass my Name in this Callback.</strong>
        <Student />
        <hr />
        <h3>
          <b> Phase 5:</b> Props with children
        </h3>
        <p>I'm Creating an component name Card.jsx to pass props</p>
        <strong> Now I Call it Below: I pass my Name in this Callback.</strong>
        <Card>
          {" "}
          <h2>Inside Card</h2>
          <p>This is child content</p>
        </Card>
        <p>Practice: Wrap different content inside Card</p>
        <hr />
        <h3>
          <b> Phase 6:</b> Props in lists
        </h3>
        <p>
          In This prop we create-array and each index has object in which
          name,age,students_so,
        </p>
        <strong> Now I Call it Below: I pass my Name in this Callback.</strong>
        {students.map((s, index) => (
          <Student
            key={index}
            name={s.name}
            age={s.age}
            isStudent={s.isStudent}
          />
        ))}
        <p> Practice: Add/remove students, see dynamic rendering.</p>
        <br />
        <div className="min-h-screen bg-amber-100 flex flex-col items-center justify-center px-6 py-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-gray-700 pb-2">
            Practice Project Ideas
          </h1>

          <div className="space-y-6 w-full max-w-md">
            <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
              <button
                onClick={() => navigate("/studentlistapp")}
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mb-2 hover:bg-blue-700"
              >
                Student List App
              </button>
              <p className="text-gray-700">
                Show multiple students with props.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
              <button
                onClick={() => navigate("/profilecardapp")}
                className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md mb-2 hover:bg-green-700"
              >
                Profile Card App
              </button>
              <p className="text-gray-700">
                Pass props for name, job, and photo.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
              <button
                onClick={() => navigate("/todolistapp")}
                className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-md mb-2 hover:bg-purple-700"
              >
                Todo List App
              </button>
              <p className="text-gray-700">
                Pass props for task text and status.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
              <button
                onClick={() => navigate("/resuable-button")}
                className="bg-pink-600 text-white font-semibold px-4 py-2 rounded-md mb-2 hover:bg-pink-700"
              >
                Reusable Button Component
              </button>
              <p className="text-gray-700">Pass props for label and color.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studentlistapp" element={<StudentListApp />} />
        <Route path="/profilecardapp" element={<ProfileCardApp />} />
        <Route path="/todolistapp" element={<ToDoListApp />} />
        <Route path="/resuable-button" element={<ResuableButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
