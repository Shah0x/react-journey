import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
const Practice = () => {
  return (
    <>
      <Header />
      <Body />
      <br/>
      <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center p-4 border-1 bg-gray-100 ">
        <Footer />
      </footer>
    </>
  );
};

export default Practice;
