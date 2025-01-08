// import React from "react";
// import BgImg from "../assets/Images/splash-img.png";


// const GamePage = () => {
//   return (
//     <>
//        <div
//         className="relative flex flex-col items-center  h-screen text-white"
//         style={{
//           backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
//           backgroundSize: "cover",
//         }}
//       >

//       </div>
//     </>
//   );
// };

// export default GamePage;



import React from "react";
import BgImg from "../assets/Images/splash-img.png";
import TimerImg from "../assets/Icons/timer.png"; 

const GamePage = () => {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center h-screen text-white"
        style={{
          backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Timer Section */}
        <div className="flex flex-col items-center justify-center mb-6 mx-auto">
          <div className="flex flex-row items-center  ">
          <img src={TimerImg} alt="Timer"  />
          <button className=" text-white text-[14px] font-alien font-bold ml-[50px]">
              Clear
            </button>
         
          </div>
          <p className="text-[32px] font-alien font-bold leading-[38px]">10:00</p>

        </div>

       

        {/* Instruction Text */}
        <p className="text-[16px] font-semibold mb-4">
          Arrange from <span className="text-yellow-400">LEFT</span> to{" "}
          <span className="text-yellow-400">RIGHT</span>
        </p>

        {/* Input Buttons */}
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: 7 }).map((_, index) => (
            <input
              key={index}
              type="text"
              className="w-12 h-12 text-center text-black bg-white rounded-lg border-2 border-gray-300 focus:outline-none"
            />
          ))}
        </div>

        {/* Selection Container */}
        <div className="flex flex-col items-center bg-input-background  rounded-[20px] p-6 w-[90%] max-w-[400px] border border-[#16D1F9]">
          <p className="text-[16px] font-semibold mb-4"> Selection</p>
          <input
            type="text"
            className="w-full h-12 text-black bg-white rounded-lg border-2 border-gray-300 text-center mb-4"
            placeholder="Type here..."
          />
          <div className="grid grid-cols-5 gap-2">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter, index) => (
              <button
                key={index}
                className="bg-[#013CAD] text-white text-[14px] font-bold py-2 px-3 rounded-lg"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;

