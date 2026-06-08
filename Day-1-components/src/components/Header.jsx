const Header = () => {
  return (
    <>
      <div className="flex justify-between  w-full items-center border px-6">
        <h1 className="text-3xl text-gray-700">Header.</h1>
        <div className="flex justify-center  text-center gap-4 font-sans  font-semibold tracking-wider">
          <a
            href="/"
            className="relative text-black hover:text-gray-500 transition-colors duration-500 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0  after:bg-gray-500 
             hover:after:w-full after:transition-all after:duration-500"
          >
            HOME
          </a>

          <a
            className="relative text-black hover:text-gray-500 transition-colors duration-500 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:bg-gray-500 
             hover:after:w-full after:transition-all after:duration-500"
            href="/"h
          >
            ABOUT
          </a>
          <a
            className="relative text-black hover:text-gray-500 transition-colors duration-500 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0  after:bg-gray-500 
             hover:after:w-full after:transition-all after:duration-500"
            href="/"
          > 
            SERVICE
          </a>
          <a
            className="relative text-black hover:text-gray-500 transition-colors duration-500 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0  after:bg-gray-500 
             hover:after:w-full after:transition-all after:duration-500"
            href="/"
          >
            CONTACT
          </a>
        </div>

        <button className="hover:text-gray-500 transition-colors duration-500  py-2 px-4 rounded-full hover:bg-gray-100 text-black font-black">
          ⋮
        </button>
      </div>
    </>
  );
};
export default Header;
