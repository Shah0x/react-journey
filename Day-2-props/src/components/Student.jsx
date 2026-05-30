import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <div className="flex flex-col justify-center border-y-2 border-black w-full py-5 text-center items-center">
      <p>Name: {props.name || "Guest"}</p>
      <p>Age: {props.age || 0}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
