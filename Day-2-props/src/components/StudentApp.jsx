import PropTypes from "prop-types";
// import defaultProps from "default-props";

const StudentApp = ({ name, age, isStudent, id }) => {
  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm divide-x divide-gray-300">
      <div className="px-4 py-2">
        <span className="text-gray-500 font-semibold">Name:</span> {name}
      </div>
      <div className="px-4 py-2">
        <span className="text-gray-500 font-semibold">Age:</span> {age}
      </div>
      <div className="px-4 py-2">
        <span className="text-gray-500 font-semibold">Student:</span>{" "}
        {isStudent ? "Yes" : "No"}
      </div>
      <div className="px-4 py-2">
        <span className="text-gray-500 font-semibold">ID:</span> {id}
      </div>
    </div>
  );
};

StudentApp.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
  id: PropTypes.number,
};

StudentApp.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
  id: 0,
};

export default StudentApp;
