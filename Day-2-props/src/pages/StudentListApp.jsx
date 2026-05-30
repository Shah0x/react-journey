import Student from "../components/StudentApp";

const StudentListApp = () => {
  
  let IdFun = () => {
    return Math.floor(Math.random()* 50000);
  };

  return (
    <>
      <div className="p-4 min-h-screen w-full bg-blue-100">
        <h1 className="flex justify-center text-4xl font-bold">
          Student List App
        </h1>

        <div className="flex w-full justify-between py-4">
          <input
            className="border rounded-sm px-2 w-5/8 h-10 text-gray-900 bg-white"
            type="number"
            placeholder="Search by Id..."
          />

          <button className="border rounded-sm h-10 w-[10%] bg-blue-700 text-white hover:bg-blue-600 hover:cursor-pointer">
            Add
          </button>
        </div>

       
        <div className="w-full  bg-white rounded-sm p-2">
          <Student name="Shahmeer" age={22} isStudent={false} id={IdFun()}  />
          <Student name="Khizer" age={28} isStudent={true} id={IdFun()} />
          <Student name="Ali" age={20} isStudent={true} id={IdFun()} />
        </div>
      </div>
    </>
  );
};

export default StudentListApp;
