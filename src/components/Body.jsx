const Body = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-8">

      <div className="w-full md:w-1/2 flex items-center bg-white rounded-lg shadow-md p-6 md:p-8 md:mr-8 mb-6 md:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight">
          SILENCE IS THE BEST ------------ <br /> WAY TO SOLVE <br /> MANY
          PROBLEMS
        </h1>
      </div>

      
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-4 md:p-6 flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBD4cVsSAmYCOapA58zayZJM_o-pBtufxdg&s"
          alt="img"
          className="rounded-md w-full h-auto md:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Body;
