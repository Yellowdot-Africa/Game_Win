import React from "react";
import { useNavigate } from "react-router-dom";
// import ErrorImg from "../assets/Images/err404.jpg";
import BgImg from "../assets/Images/splash-img.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
      className="relative flex flex-col items-center justify-center  h-screen text-white"
      style={{
        backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
        backgroundSize: "cover",
      }}
    >
        <h1 className="text-2xl text-white mt-4 mx-4 font-alien text-center">Opps!</h1>
        <p className="text-xl text-white mt-4 mx-4 font-alien text-center">
          The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-btn-background mt-[18px] font-alien text-[14px] font-bold leading-[16.8px] tracking-wider text-center rounded-[24px]  pt-[17px] pb-[13px] pl-[74px] pr-[79px] "

        >
          Go to Homepage
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
