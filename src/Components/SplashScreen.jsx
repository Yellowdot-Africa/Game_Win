import React, { useState, useEffect } from "react";
import BgImg from "../assets/Images/splash-img.png";
import { useNavigate } from "react-router-dom";
import SplashIcon from "../assets/Icons/loader-icon.png";

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setLoadingComplete(true);
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      navigate("/home");
    }
  }, [loadingComplete, navigate]);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen text-white"
        style={{
          backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center items-center  ">
          <h1
            style={{
              textShadow: "0px 4px 4px #FFFFFF40",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
            className=" text-[46px] leading-[55.2px] tracking-spacing-4 text-center  shadow-custom-drop font-bold font-alien bg-[#0258FD66] text-[#ffffff]  border-4 border-[#16D1F9] rounded-[24px]  px-[43px] py-[46px]"
          >
            GAMEWIN
          </h1>
        </div>

        <p
          style={{ textShadow: "0px 4px 4px #FFFFFF40" }}
          className="mt-6 text-[18px] leading-[21.6px] font-normal font-alien tracking-wide text-center text-shadow  text-[#FFFFFF]"
        >
          FASTEST FINGERS WIN
        </p>

        <div className="flex items-center justify-center mt-[132px]">
          {/* <div className="w-6 h-6 border-4 border-t-white border-gray-300 rounded-full animate-spin"></div> */}
          <p
            style={{
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
            className=" text-[#FFFFFF] text-[18px] italic font-roboto font-bold leading-[21.6px] -tracking-wider text-center"
          >
            Loading...
          </p>
        </div>
        {!loadingComplete && (
          <div className="relative w-[214px] h-[7px] bg-[#EEEEEE99]  rounded-[15px] mt-[33px]">
            <div
              className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
            <img
              src={SplashIcon}
              alt="Progress Splash Icon"
              className="absolute top-[-4px] w-[14px] h-[14px] transition-transform"
              style={{ transform: `translateX(${progress * 2.0}px)` }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SplashScreen;
