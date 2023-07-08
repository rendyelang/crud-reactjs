import React from "react";
import { ReactComponent as SvgComponent } from "../assets/img/manandcat.svg";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="container font-poppins flex flex-col-reverse sm:flex-row justify-between items-center pt-28 sm:pt-56 lg:pt-72 xl:pt-40 pb-0">
      <div>
        <p className="font-bold text-[60px] mb-0">404</p>
        <p className="font-bold text-[27px] mb-0">Ooops!</p>
        <p className="font-bold text-[27px] mb-0">Page Not Found</p>
        <p className=" text-gray-500 my-4">
          This page is doesn't exist or was removed! <br /> We suggest you back to home
        </p>
        <Link to="/">
          <button className="bg-blue-600 text-white text-sm hover:bg-blue-800 rounded-full py-3 px-7">Back to Home</button>
        </Link>
      </div>
      <SvgComponent className="w-[40%] sm:w-[30%] h-fit" />
    </div>
  );
};

export default Notfound;
