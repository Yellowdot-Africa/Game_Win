import React, { useState } from "react";
import BgImg from "../assets/Images/splash-img.png";
import Coins from "../assets/Icons/coins.png";
import Airtime from "../assets/Icons/airtime.png";
import { Link } from "react-router-dom";

const SubscriptionPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = ["20R/day", "100R/month"];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div
      className="relative flex flex-col items-center  h-screen text-white"
      style={{
        backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className={`relative flex justify-center items-center mt-[180px] ${
          isModalOpen ? "blur-md" : ""
        }`}
      >
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
        className="mt-[25px] text-[18px] leading-[21.6px] font-normal font-alien tracking-wide text-center text-shadow  text-[#FFFFFF]"
      >
        FASTEST FINGERS WIN
      </p>

      <div className="bg-[#E3E4E31A] mt-[12px] w-[342px] h-[174px] shadow-box-shadow p-[20px]">
        {/* First Prize */}
        <div className="flex items-center justify-between mb-[20px]">
          <img src={Coins} alt="coins" />
          <p className="pr-[17px] text-[#EEEEEE] font-alien text-[14px] font-normal leading-[16.8px]">
            First Prize
            <span style={{ fontFamily: "Arial, sans-serif" }}>(</span>CASH
            <span style={{ fontFamily: "Arial, sans-serif" }}>)</span>
          </p>
          <p className="text-[#ffffff] font-alien text-[16px] font-bold leading-[19.2px]">
            N100,000
          </p>
        </div>

        {/* Second Prize */}
        <div className="flex items-center justify-between mb-[20px]">
          <img src={Coins} alt="coins" />
          <p className="text-[#EEEEEE] font-alien text-[14px] font-normal leading-[16.8px]">
            Second Prize
            <span style={{ fontFamily: "Arial, sans-serif" }}>(</span>Cash
            <span style={{ fontFamily: "Arial, sans-serif" }}>)</span>
          </p>
          <p className="text-[#ffffff] font-alien text-[16px] font-bold leading-[19.2px]">
            N100,000
          </p>
        </div>

        {/* Airtime */}
        <div className="flex items-center justify-between">
          <img src={Airtime} alt="airtime" className="pl-[12px]" />
          <p className="pr-[108px] text-[#EEEEEE] font-alien text-[14px] font-normal leading-[16.8px]">
            AIRTIME
          </p>
          <p className="text-[#ffffff] font-alien text-[16px] font-bold leading-[19.2px]">
            10,000
          </p>
        </div>
      </div>

      <button
        onClick={openModal}
        className="bg-btn-background mt-[18px] font-alien text-[14px] font-bold leading-[16.8px] tracking-wider text-center rounded-[24px]  pt-[17px] pb-[13px] pl-[74px] pr-[79px] "
      >
        Subscribe to Play
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#070E3C] rounded-[20px] border border-[#16D1F9] shadow-lg w-[352px] h-[330px] pt-[54px] px-[39px]">
            {/* Modal Content */}
            <h2 className="text-[16px] font-alien font-normal text-center flex items-center justify-center whitespace-nowrap leading-[19.2px] mb-[22px]">
              Subscribe to a plan to proceed
            </h2>
            <div className="mb-4">
              <select
                className="w-full font-alien font-normal leading-[19.2px] text-[16px] border text-[#CACACA] border-[#16D1F9] outline-none rounded-[24px] bg-transparent px-4 py-3"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
              >
                <option value="">Click to select a plan</option>
                {plans.map((plan, index) => (
                  <option key={index} value={plan}>
                    {plan}
                  </option>
                ))}
              </select>
            </div>
            {/* Buttons */}
            <div className="flex flex-col justify-between mt-[58px]">
              <button
                className="bg-btn-background text-white text-[14px] font-bold font-alien leading-[16.8px] text-center px-4 py-3 rounded-[24px] mb-[12px]"
                onClick={() => {
                  window.location.href =
                    "http://optin.telkomsdp.co.za/service/30?ext_ref=123456776";
                }}
              >
                Subscribe Now
              </button>
              <button
                className=" text-white font-alien font-bold text-[14px] leading-[16.8px] px-4 py-[17px] mb-[35px]"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;








// import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import ProfileContext from "../Context/ProfileContext";
// import BgImage from "../assets/bgg.png";
// import GameWin from "../assets/gamewin.png";
// import GemPiles from "../assets/Gemspile.png";
// import UserIcon from "../assets/user-icon.png";
// import Avatar1 from "../assets/avatar1.png";
// import Avatar2 from "../assets/avatar2.png";
// import Avatar3 from "../assets/avatar3.png";
// import Avatar4 from "../assets/avatar4.png";
// import Avatar5 from "../assets/avatar5.png";
// import InstructionModal from "../Components/Modals/InstructionModal";
// import "../App.css";

// const MainScreen = () => {
//   const [showContent, setShowContent] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const { profile, fetchProfile } = useContext(ProfileContext);
//   const [avatarForPlusIcon, setAvatarForPlusIcon] = useState(null);
//   const [avatarList] = useState([Avatar1, Avatar2, Avatar3, Avatar4, Avatar5]);


//   useEffect(() => {
//     if (!profile) {
//       fetchProfile();
//     }

//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [profile, fetchProfile]);  

  

//   const handlePlayClick = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen">
//       <img
//         src={BgImage}
//         alt="Background"
//         className="absolute inset-0 object-cover w-full h-full"
//       />
//       <div className="relative flex flex-col items-center justify-center z-10 pb-9 pt-20 w-full max-w-[350px] px-4 content-container">
//         <img src={GameWin} alt="Game" className="w-[266px] mb-0" />
//         <img src={GemPiles} alt="Gems" className="w-[193px] mt-[-40px]" />
//         <div className="flex flex-col items-center min-h-[150px]">
//           {showContent && (
//             <>
//               <button
//                 onClick={handlePlayClick}
//                 className="bg-white text-black w-full max-w-[225px] px-4 py-2 rounded-full mb-12 text-[16px] font-mochiy opacity-0 transition-opacity duration-1000 ease-in-out"
//                 style={{ opacity: showContent ? 1 : 0 }}
//               >
//                 PLAY
//               </button>
//               <Link
//                 to="/leaderboard"
//                 className="text-white font-mochiy text-[16px] mb-16 border-b opacity-0 transition-opacity duration-1000 ease-in-out"
//                 style={{ opacity: showContent ? 1 : 0 }}
//               >
//                 VIEW LEADERBOARD
//               </Link>
//             </>
//           )}
//         </div>
//         <p className="absolute w-[100vw] bg-[#0046B0] border-gradient text-white text-center font-mochiy text-[14px] py-[13px] px-[24px] -bottom-[22%]">
//           PLAY TO WIN THE R1000 GRAND PRIZE!!!
//         </p>
//       </div>

//       {showContent && (
//         <Link to="/user-profile" className="absolute top-12 left-8">
//           <div className="w-[48px] h-[48px] rounded-full border bg-white border-white flex items-center justify-center">
//             <img
//               src={profile?.avatar ? avatarList[profile.avatar - 1] : UserIcon}
//               alt="User"
//               className="w-[80%] h-[80%]"
//             />
//           </div>
//           <p className="text-[12px] text-white text-center font-[400] font-mochiy">
//             {profile?.nickname || "User"}
//             {/* User */}
//           </p>
//         </Link>
//       )}

//       <div className="absolute top-14 right-8 flex justify-center items-center gap-4 rounded-full px-6 py-2 shadow-shadow-2 bg-gradient-to-r from-purple-500 to-blue-500">
//       <Link to="/terms-and-conditions">

//         <button className="text-white text-[12px] font-mochiy  border-white border rounded-[28px] px-2 py-1 ">
//           T&C's
//         </button>
//         </Link>
//         <Link to="/faq">

//         <button className="text-white text-[12px] font-mochiy  border-white border rounded-[28px] px-2 py-1 ">
//           FAQ's
//         </button>
//         </Link>

//       </div>

//       {showModal && <InstructionModal onClose={closeModal} />}
//     </div>
//   );
// };

// export default MainScreen;












