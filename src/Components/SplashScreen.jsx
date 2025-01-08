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
          // backgroundPosition: "center",
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






// import React, { useState } from "react";

// const SubscribeModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState("");

//   const plans = ["Plan 1 - $10/month", "Plan 2 - $20/month", "Plan 3 - $30/month"];

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleSubscribe = () => {
//     if (!selectedPlan) {
//       alert("Please select a plan before subscribing.");
//       return;
//     }
//     alert(`Subscribed to: ${selectedPlan}`);
//     closeModal();
//   };

//   return (
//     <div>
//       {/* Button to trigger modal */}
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         onClick={openModal}
//       >
//         Subscribe to Play
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//             {/* Modal Content */}
//             <h2 className="text-lg font-semibold mb-4">Subscribe to a plan to proceed</h2>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Select a Plan</label>
//               <select
//                 className="w-full border border-gray-300 rounded-md px-3 py-2"
//                 value={selectedPlan}
//                 onChange={(e) => setSelectedPlan(e.target.value)}
//               >
//                 <option value="">Click a plan</option>
//                 {plans.map((plan, index) => (
//                   <option key={index} value={plan}>
//                     {plan}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {/* Buttons */}
//             <div className="flex justify-between">
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//                 onClick={handleSubscribe}
//               >
//                 Subscribe Now
//               </button>
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SubscribeModal;





// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AvatarProfile from "../assets/Icons/avatar-prof.png";
// import Coins from "../assets/Icons/coins.png";
// import Trophy from "../assets/Icons/trophy.png";
// // import Arrow from "../assets/Icons/Arrow.png";
// import Home from "../assets/Icons/home.png";
// import LeaderboardIcon from "../assets/Icons/leaderboard.png";
// import Profile from "../assets/Icons/profile.png";
// import Rank1 from "../assets/Icons/rank4.png";
// import Rank2 from "../assets/Icons/rank1.png";
// import Rank3 from "../assets/Icons/rank2.png";
// import Rank4 from "../assets/Icons/rank3.png";
// import Rank5 from "../assets/Icons/rank3.png";
// import Rank6 from "../assets/Icons/rank3.png";
// import Avatar1 from "../assets/Icons/avatar1.png";
// import Avatar2 from "../assets/Icons/avatar2.png";
// import Avatar3 from "../assets/Icons/avatar3.png";
// import Avatar4 from "../assets/Icons/avatar4.png";
// import Avatar5 from "../assets/Icons/avatar5.png";
// import PlusIcon from "../assets/Icons/plus-icon.png";
// // import { LeaderboardContext } from "../Context/LeaderboardContext";
// // import UserContext from "../Context/UserContext";
// // import { Circles } from "react-loader-spinner";
// // import Skeleton from "react-loading-skeleton";
// // import "react-loading-skeleton/dist/skeleton.css";

// const LeaderboardPage = ({ subscriberMsisdn }) => {
//   const [selectedAvatar, setSelectedAvatar] = useState(null);
//   const [showAvatarSelector, setShowAvatarSelector] = useState(false);
//   const [currentAvatar, setCurrentAvatar] = useState(AvatarProfile);
//   const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];
//   const navigate = useNavigate();
//   const [scrollDirection, setScrollDirection] = useState(null);
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [userAvatar, setUserAvatar] = useState({ AvatarProfile });
//   const [gameScore, setGameScore] = useState(0);

// //   const {
// //     leaderboard,
// //     handleUpdateLeaderboardScore,
// //     fetchLeaderboardStanding,
// //     obscureMSISDN,
// //     loading,
// //     error,
// //   } = useContext(LeaderboardContext);
// //   const { userProfile, fetchProfile, msisdn, handleUpdateSubscriberProfile } =
// //     useContext(UserContext);

//   useEffect(() => {
//     const storedAvatar = localStorage.getItem("selectedAvatar");
//     if (storedAvatar) {
//       setUserAvatar(storedAvatar);
//     }
//   }, []);

//   useEffect(() => {
//     fetchLeaderboardStanding(subscriberMsisdn);
//   }, [subscriberMsisdn]);

//   // useEffect(() => {
//   //   if (msisdn) {
//   //     // console.log("Updated MSISDN:", msisdn);

//   //     handleUpdateLeaderboardScore(msisdn, gameScore);
//   //   }
//   // }, [msisdn, gameScore]);

//   useEffect(() => {
//     let lastScrollTop = 0;

//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;

//       if (scrollTop > lastScrollTop) {
//         setScrollDirection("down");
//       } else {
//         setScrollDirection("up");
//       }
//       setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   const navStyle = {
//     position: "fixed",
//     bottom: scrollDirection === "down" ? "0px" : "0px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     transition: "bottom 0.5s ease",
//   };

//   const handleViewPrizesClick = () => {
//     navigate("/prizes");
//   };

//   const handleAvatarClick = () => {
//     setShowAvatarSelector(!showAvatarSelector);
//   };

//   const handleAvatarSelect = (avatar) => {
//     setSelectedAvatar(avatar);
//   };

//   const handleSave = () => {
//     if (selectedAvatar) {
//       setCurrentAvatar(selectedAvatar);
//       setShowAvatarSelector(false);
//     }
//   };
//   // console.log("subscriberMsisdn:", subscriberMsisdn);
//   // console.log("leaderboard:", leaderboard);

//   // const userPosition = leaderboard.find((player) => player.msisdn === msisdn);
//   const userPosition =
//     leaderboard?.length > 0
//       ? leaderboard.find((player) => player.msisdn === msisdn)
//       : null;

//   // console.log("User Position:", userPosition);
//   // console.log("leaderboard:", leaderboard);
//   // console.log("msisdn:", msisdn);

//   // if (error) {
//   //   return <div>Error: {error}</div>;
//   // }

//   useEffect(() => {
//     if (error) {
//       navigate("/error");
//     }
//   }, [error, navigate]);

//   return (
//     <>
//       <div className="relative">
//         <div
//           className={`flex flex-col min-h-[1080px] md:h-[1430px] bg-darrk-gradient  ${
//             showAvatarSelector ? " blur-[3px]" : ""
//           }`}
//         >
//           {!leaderboard || leaderboard.length === 0 ? (
//             // <div className=" flex justify-center items-center mt-[30px] mx-[20px]">
//             //  <Skeleton count={18}  baseColor="#202020" highlightColor="#444" containerClassName="flex-1" />
//             // </div>
//             <div className="bg-[#E2EEF60D] w-[342px] h-[933px] mt-[17px] mx-auto">
//               {/* Skeleton for the header */}
//               <div className="flex flex-col items-center mt-4">
//                 <Skeleton
//                   width={175}
//                   height={49}
//                   baseColor="#202020"
//                   highlightColor="#444"
//                   className="rounded-[26px]"
//                 />
//                 <Skeleton
//                   width={140}
//                   height={28}
//                   baseColor="#202020"
//                   highlightColor="#444"
//                   className="rounded-b-[26px] mt-4"
//                 />
//                 <Skeleton
//                   width={50}
//                   height={50}
//                   baseColor="#202020"
//                   highlightColor="#444"
//                   className="rounded-full mt-4"
//                 />
//                 <Skeleton
//                   width={150}
//                   height={24}
//                   baseColor="#202020"
//                   highlightColor="#444"
//                   className="mt-4"
//                 />
//                 <Skeleton
//                   width={274}
//                   height={24}
//                   baseColor="#202020"
//                   highlightColor="#444"
//                   className="mt-2"
//                 />
//               </div>

//               {/* Skeleton for table structure */}
//               <div className="w-full mt-6">
//                 <table className="table-auto mx-auto md:mx-auto">
//                   <thead>
//                     <tr className="text-center">
//                       {[...Array(4)].map((_, index) => (
//                         <th key={index} className="p-2">
//                           <Skeleton
//                             width={50}
//                             height={24}
//                             baseColor="#202020"
//                             highlightColor="#444"
//                           />
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {[...Array(6)].map((_, index) => (
//                       <tr key={index} className="text-center">
//                         <td className="p-2">
//                           <Skeleton
//                             width={25}
//                             height={25}
//                             baseColor="#202020"
//                             highlightColor="#444"
//                             className="rounded-full"
//                           />
//                         </td>
//                         <td className="p-2">
//                           <Skeleton
//                             width={70}
//                             height={24}
//                             baseColor="#202020"
//                             highlightColor="#444"
//                           />
//                         </td>
//                         <td className="p-2">
//                           <Skeleton
//                             width={70}
//                             height={24}
//                             baseColor="#202020"
//                             highlightColor="#444"
//                           />
//                         </td>
//                         <td className="p-2">
//                           <Skeleton
//                             width={70}
//                             height={24}
//                             baseColor="#202020"
//                             highlightColor="#444"
//                           />
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           ) : (
//             <div className="bg-[#E2EEF60D] w-[342px] h-[933px] mt-[17px] mx-auto">
//               <div className="bg-nav-gradient rounded-[26px] text-white flex justify-center items-center w-[175px] h-[49px]  mt-[21px] mx-auto">
//                 {/* Avatar and Coin Section */}

//                 <div className="flex justify-between items-center w-[225px] h-[49px]">
//                   <div className="flex items-center justify-between space-x-14  relative">
//                     <div
//                       className="w-[50px] h-[50px]  flex items-center justify-center cursor-pointer"
//                       onClick={() => setShowAvatarSelector(!showAvatarSelector)}
//                     >
//                       <img
//                         src={userAvatar || AvatarProfile}
//                         alt="Profile Avatar"
//                         className="-ml-[8px] -mb-[6px]"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = AvatarProfile;
//                         }}
//                         loading="lazy"
//                       />
//                     </div>

//                     {/* <div className="flex items-center justify-center">
//                     <img src={Coins} alt="coin" />
//                     <p className="font-mtn-brighter-medium font-medium text-[12px] text-center leading-[15.6px] text-[#FFFFFF]">
//                       R10k
//                     </p>
//                   </div> */}
//                     <Link
//                       to="/terms-and-conditions"
//                       className="border border-[#FFCB05] rounded-[26px] w-[51px] h-[27px] bg-[#7F806266] flex justify-center px-4 items-center mt-[12px] mb-[10px] mr-[10px]"
//                     >
//                       <p className="font-mtn-brighter-medium font-medium text-[12px] leading-[15.6px] text-center text-[#FFCB05]">
//                         T&C's
//                       </p>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-background w-[140px] h-[28px] rounded-b-[26px] flex items-center justify-center m-auto shadow-box-shadow">
//                 <p className="font-mtn-brighter-medium font-medium text-[10px] leading-[13px] text-center text-[#FFFFFF]">
//                   @{msisdn}
//                 </p>
//               </div>

//               <img src={Trophy} alt="trophy" className="mx-auto mt-[4px]" />
//               <h1 className="font-mtn-brighter-xtra-bold font-extrabold text-[18px] text-center leading-[23.4px] mx-auto text-[#FFFFFF]">
//                 Leaderboard
//               </h1>

//               <p className="text-[#FFFFFF] mx-auto font-mtn-brighter-regular font-regular text-[18px] w-[274px] leading-[23.4px] text-center mt-[11px]">
//                 These are our{" "}
//                 <span className="font-mtn-brighter-bold font-bold text-[18px] leading-[23.4px] text-center">
//                   Top Players
//                 </span>{" "}
//                 and you are currently #{userPosition?.position}
//               </p>

//               {/* Table */}
//               <div className="w-full mt-6   ">
//                 <table className="table-fixed  mx-auto md:mx-auto">
//                   <thead>
//                     <tr className="text-center">
//                       <th className="p-2 w-12  font-mtn-brighter-medium font-medium text-[14px] leading-[18.2px] text-[#FFFFFF]">
//                         Rank
//                       </th>
//                       <th className="p-2 w-32 font-mtn-brighter-medium font-medium text-[14px] leading-[18.2px] text-[#FFFFFF]">
//                         Phone
//                       </th>
//                       <th className="p-2 w-24 font-mtn-brighter-medium font-medium text-[14px] leading-[18.2px] text-[#FFFFFF]">
//                         Daily Score
//                       </th>
//                       <th className="p-2 w-32  font-mtn-brighter-medium font-medium text-[14px] leading-[18.2px] text-[#FFFFFF]">
//                         Monthly Score
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {/* {leaderboard.length === 0 ? ( */}
//                     {!leaderboard || leaderboard.length === 0 ? (
//                       <tr>
//                         <td colSpan="4" className="text-center text-white">
//                           {/* No leaderboard data available. */}
//                         </td>
//                       </tr>
//                     ) : (
//                       leaderboard.map((player, index) => {
//                         const rankImage =
//                           player.position === 1
//                             ? Rank1
//                             : player.position === 2
//                             ? Rank2
//                             : player.position === 3
//                             ? Rank3
//                             : player.position === 4
//                             ? Rank4
//                             : player.position === 5
//                             ? Rank5
//                             : player.position === 6
//                             ? Rank6
//                             : null;

//                         const isTop3 =
//                           player.position === 1 ||
//                           player.position === 2 ||
//                           player.position === 3;

//                         return (
//                           <tr
//                             key={index}
//                             className={`text-center ${
//                               isTop3
//                                 ? "bg-gradient-to-b from-[#221F20] to-[#000000] shadow-[0px_4px_4px_0px_#00000040] rounded-[25px]"
//                                 : ""
//                             }`}
//                           >
//                             <td className="p-1 relative w-[50px] h-[50px] font-mtn-brighter-medium font-medium text-[14px] leading-[20.8px] text-[#FFFFFF]">
//                               {rankImage ? (
//                                 <div className="relative flex justify-center items-center ">
//                                   <img
//                                     src={rankImage}
//                                     alt={`Rank ${player.position}`}
//                                     className="w-[30px] h-[25px]"
//                                   />
//                                   <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[14px]">
//                                     {player.position}
//                                   </span>
//                                 </div>
//                               ) : (
//                                 <span className="font-bold text-white text-[14px]">
//                                   {player.position}
//                                 </span>
//                               )}
//                             </td>

//                             <td className="p-1 font-mtn-brighter-medium font-medium text-[14px] w-32 truncate leading-[20.8px] text-[#FFFFFF]">
//                               {/* {player.msisdn} */}
//                               {obscureMSISDN(player.msisdn)}
//                             </td>
//                             <td className="p-1 font-mtn-brighter-medium font-medium text-[14px] w-24 truncate leading-[20.8px] text-[#FFFFFF]">
//                               {player.dailyPoints}
//                             </td>
//                             <td className="p-1 font-mtn-brighter-medium font-medium text-[14px] w-32 text-ellipsis overflow-hidden leading-[20.8px] text-[#FFFFFF] ">
//                               {player.monthlyPoints}
//                             </td>
//                           </tr>
//                         );
//                       })
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="w-full " style={navStyle}>
//           {leaderboard?.length !== 0 && (
//             <div className="flex justify-center mb-[51px] ">
//               <button
//                 className="bg-button-gradient mx-auto py-[14px] px-[33px] rounded-[42px] border border-[#00000033] font-mtn-brighter-bold text-[14px] text-black"
//                 onClick={handleViewPrizesClick}
//               >
//                 View Prizes
//               </button>
//             </div>
//           )}
//           <div className=" flex justify-center py-8 ">
//             <div className="w-full max-w-[336px]  h-[82px] backdrop-blur-sm flex justify-between items-center bg-foot-nav-gradient rounded-b-[60px] pt-[12px] pb-[20px] px-[46px]">
//               <Link
//                 to="/home"
//                 className="bg-foot-nav-gradient rounded-[50px] w-[60px] h-[60px] flex items-center justify-center"
//               >
//                 <img src={Home} alt="home" />
//               </Link>

//               <Link
//                 to="/user-profile"
//                 className="bg-[#FFCB05] rounded-[50px] w-[76px] h-[76px] flex items-center justify-center -mt-[40px]"
//               >
//                 <img
//                   src={Profile}
//                   alt="profile"
//                   className="w-[40px] h-[40px]"
//                 />
//               </Link>

//               <Link
//                 to="/leaderboard"
//                 className="bg-foot-nav-gradient rounded-[50px] w-[60px] h-[60px] flex items-center justify-center"
//               >
//                 <img src={LeaderboardIcon} alt="leaderboard" />
//               </Link>
//             </div>
//           </div>
//         </div>
//         {showAvatarSelector && (
//           <div className="flex items-center justify-center mx-auto">
//             <div className="absolute top-[30px] left-auto w-[265px] h-[138px]  bg-background-avatar  rounded-[26px]  ">
//               <div className="flex  ">
//                 <img
//                   src={currentAvatar || AvatarProfile}
//                   alt="Profile Avatar"
//                 />
//                 <p className="text-white pt-[12px] font-mtn-brighter-medium font-medium text-[14px] leading-[18.2px] text-center w-[126px]">
//                   Please select an avatar
//                 </p>
//                 {selectedAvatar && (
//                   <button
//                     className="text-[#FFCB05] ml-[32px] font-mtn-brighter-bold font-bold text-[14px] leading-[18.2px] text-center  -mt-[5px]"
//                     onClick={handleSave}
//                   >
//                     Save
//                   </button>
//                 )}
//               </div>

//               <div className="flex px-[10px] mt-4">
//                 {avatars.map((avatar, index) => (
//                   <div
//                     key={index}
//                     className={`relative  ${
//                       selectedAvatar === avatar
//                         ? "border-[3px] rounded-[28px] flex items-center justify-center border-[#FFCB05]"
//                         : ""
//                     } cursor-pointer`}
//                     onClick={() => handleAvatarSelect(avatar)}
//                   >
//                     <img
//                       src={avatar}
//                       alt={`Avatar ${index + 1}`}
//                       className="w-[50px] h-[50px]"
//                     />
//                     {selectedAvatar !== avatar && (
//                       <div className=" absolute bottom-[5px] right-0  w-[10px] h-[10px]  bg-[#FFCB05] rounded-[28px]">
//                         <img
//                           src={PlusIcon}
//                           alt="Plus Icon"
//                           className="w-[15px] h-[15px]  "
//                         />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default LeaderboardPage;


{/* <div
className=" mx-auto backdrop-blur-sm flex justify-between items-center w-[342px] h-[82px] bg-[#FFFFFF1A] 
   pt-[12px] pb-[20px] px-[46px] "
>
<Link
  to="/home"
  className="bg-icon-background rounded-[50px] w-[50px] h-[50px] flex items-center justify-center"
>
  <img src={Home} alt="home" />
</Link>
<Link
  to="/user-profile"
  className="bg-[#0258FD] mt-[-70px] rounded-[50px] w-[76px] h-[76px] flex items-center justify-center"
>
  <img src={Profile} alt="profile" className="w-[40px] h-[40px]" />
</Link>
<Link
  to="/leaderboard"
  className="bg-icon-background rounded-[50px] w-[50px] h-[50px] flex items-center justify-center"
>
  <img src={Leaderboard} alt="leaderboard" />
</Link>
</div> */}


// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Avatar1 from "../assets/Icons/avatar1.png";
// import AvatarProfile from "../assets/Images/avatar-prof.png";
// import Volume from "../assets/Icons/volume.png";
// import Radix from "../assets/Icons/radix.png";
// import Coins from "../assets/Icons/coins.png";
// import Trophy from "../assets/Icons/trophy.png";
// import Crown from "../assets/Icons/crown.png";
// import SkateRush from "../assets/Images/rush.jpeg";
// import XWinger from "../assets/Images/x-winger.png";
// import StarWars from "../assets/Images/ground.jpeg";
// import TempleRun from "../assets/Images/game2.png";
// import TempleQuest from "../assets/Images/quest.jpeg";
// import Home from "../assets/Icons/home.png";
// import Leaderboard from "../assets/Icons/leaderboard.png";
// import Profile from "../assets/Icons/profile.png";
// import AuthContext from "../Context/AuthContext";

// // import GameContext from "../Context/GameContext";
// import UserContext from "../Context/UserContext";
// import { LeaderboardContext } from "../Context/LeaderboardContext";
// import { Circles } from "react-loader-spinner";



// const ProfilePage = () => {
//   const navigate = useNavigate();
//   const [scrollDirection, setScrollDirection] = useState(null);
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   // const { games, loading } = useContext(GameContext);
//   const {
//     userProfile,
//     fetchProfile,
  
//     error,
//     msisdn,
//     handleUpdateSubscriberProfile,
//   } = useContext(UserContext);
//   const {
//     leaderboard,
//     fetchLeaderboardStanding,
//     handleUpdateLeaderboardScore,
//   } = useContext(LeaderboardContext);
//   const [myPoints, setMyPoints] = useState(0);
//   const [topPoints, setTopPoints] = useState(0);
//   const [userAvatar, setUserAvatar] = useState({ AvatarProfile });
//   const [iframeSrc, setIframeSrc] = useState("");
//   const [gameScore, setGameScore] = useState(0);
//   const [games, setGames] = useState("");
//   const [loading, setLoading] = useState("");
//   const { auth } = useContext(AuthContext);



  
//   useEffect(() => {
//     const storedAvatar = localStorage.getItem("selectedAvatar");
//     if (storedAvatar) {
//       setUserAvatar(storedAvatar);
//     }
//   }, []);

//   useEffect(() => {
   
//     if (leaderboard?.length > 0 && userProfile) {
//       const myEntry = leaderboard.find(
//         (entry) => entry.msisdn === userProfile.msisdn
//       );

//       setMyPoints(myEntry ? myEntry.dailyPoints : 0);

//       const maxPoints = Math.max(
//         ...leaderboard.map((entry) => entry.dailyPoints)
//       );
//       setTopPoints(maxPoints);

//     }
//   }, [leaderboard, userProfile]);

  


 
 
  
//   // const truncateTitle = (title) => {
//   //   const maxLength = 10;
//   //   if (title.length > maxLength) {
//   //     return title.substring(0, maxLength) + "...";
//   //   }
//   //   return title;
//   // };


//   const truncateTitle = (title) => {
//     const maxLength = 10;
  
//     if (title && title.length > maxLength) {
//       return title.substring(0, maxLength) + "...";
//     }
    
//     // Return the title as-is, or an empty string if title is undefined or null
//     return title || "";
//   };

 

//   const handleViewLeaderboardClick = () => {
//     navigate("/leaderboard");
//   };

//   const gameConfig = {
//     xWingFighter: {
//       url: "/x-wing-fighter/index.html",
//       localStorageKey: "x-wing-fighter-gameScore",

//       getScore: () => {
//         const score = localStorage.getItem("x-wing-fighter-gameScore");
//         return score ? Number(score) : 0;
//       },
//     },

//     templeQuest: {
//       url: "/temple-quest/index.html",
//       localStorageKey: "inl-tmpl-qst",

//       // Get the current session score by subtracting PlayerCoinsAtStart from PlayerCoins
//       getScore: (data) => {
//         const playerCoins = data?.PlayerCoins || 0;
//         const playerCoinsAtStart = data?.PlayerCoinsAtStart || 0;

//         // Calculate the current score by subtracting the initial coins from the current coins
//         const currentScore = playerCoins - playerCoinsAtStart;

//         // If the score is negative (which shouldn't happen), return 0
//         return currentScore > 0 ? currentScore : 0;
//       },
//     },

//     skateRush: {
//       url: "/skate-rush/index.html",
//       localStorageKey: "skaterushv4",

//       // Method to get the highest score
//       getScore: () => {
//         const localStorageScore = localStorage.getItem("skaterushv4");

//         // Convert stored string to an array of numbers
//         const scoresArray = localStorageScore
//           ? localStorageScore.split(",").map(Number) // Convert to numbers
//           : [];

//         // Get the last score from the array
//         const lastScore =
//           scoresArray.length > 0 ? scoresArray[scoresArray.length - 1] : 0;

//         return lastScore; // Return the last score or 0 if array is empty
//       },

//       // Method to set a new score
//       setScore: (newScore) => {
//         // Ensure the new score is a number and greater than zero
//         if (!isNaN(newScore) && newScore > 0) {
//           const currentScores = localStorage.getItem("skaterushv4");

//           // Parse the current scores or initialize an empty array
//           const scoresArray = currentScores
//             ? currentScores.split(",").map(Number) // Convert to numbers
//             : [];

//           // Add the new score to the array
//           scoresArray.push(Number(newScore));

//           // Update the localStorage with the new scores
//           localStorage.setItem("skaterushv4", scoresArray.join(","));
//         }
//       },
//     },
//     starWars: {
//       url: "/star-wars-rogue/index.html",
//       localStorageKey: "sw_boots_1.0",
//       getScore: (data) => data?.arcade?.lastScore || 0,
//     },
//     templeRun: {
//       url: "/temple-run-2/index.html",
//       localStorageKey: "TR2_GAME_STATE",

//       getScore: (data) => {
//         const currentScore = data?.currentDayDataFinal?.score || 0;
//         const lastSessionScore =
//           parseFloat(localStorage.getItem("lastTempleRunScore")) || 0; // Ensure we parse it as a number

//         const currentChallengeDate = data?.currentChallengeDate;
//         const lastPlayDate = localStorage.getItem("lastPlayDate");

//         // Check if it's a new day, if so, reset the last session score
//         if (lastPlayDate !== currentChallengeDate) {
//           localStorage.setItem("lastTempleRunScore", 0);
//           localStorage.setItem("lastPlayDate", currentChallengeDate);
//         }

//         // Calculate the session score
//         const sessionScore = currentScore - lastSessionScore;

//         // Update the last session score
//         localStorage.setItem("lastTempleRunScore", currentScore);

//         // Return the session score, rounded up to the nearest integer
//         return Math.ceil(sessionScore > 0 ? sessionScore : 0);
//       },
//     },
//   };

//   const handlePlay = (gameKey, msisdn) => {
//     const game = gameConfig[gameKey];

//     if (!game) {
//       console.error("Game configuration not found");
//       return;
//     }

//     const storedData = localStorage.getItem(game.localStorageKey);
//     // console.log(`Stored score for ${gameKey}:`, storedData);

//     let parsedData;
//     try {
//       // Try to parse the data as JSON
//       parsedData = storedData ? JSON.parse(storedData) : null;
//     } catch (error) {
//       console.warn("Data is not in JSON format, handling as a string:", error);
//       // Handle SkateRush data as a comma-separated string
//       parsedData = storedData ? storedData.split(",") : null;
//     }

//     // If the game score is stored as JSON, use the game's getScore function
//     const gameScore = game.getScore(parsedData);

//     if (gameScore === undefined || gameScore === null) {
//       console.error("Score not found in localStorage for", gameKey);
//     }
//     // console.log(`Best score for ${gameKey}:`, gameScore);

//     setIframeSrc(game.url);

//     return gameScore;
//   };

//   const handleXwingPlay = () => {
//     const gameScore = handlePlay("xWingFighter", msisdn);
//     // console.log("X-Wing Fighter score:", gameScore);
//   };

//   const handleSkatePlay = () => {
//     const gameScore = handlePlay("skateRush", msisdn);
//     // console.log("Skate Rush score:", gameScore);
//   };

//   const handleTemplePlay = () => {
//     const gameScore = handlePlay("templeQuest", msisdn);
//     // console.log("Temple run score:", gameScore);
//   };

//   const handleStarWarsPlay = () => {
//     const gameScore = handlePlay("starWars", msisdn);
//     // console.log("Star wars score:", gameScore);
//   };

//   const gameMappings = {
//     "/x-wing-fighter/index.html": "xWingFighter",
//     "/skate-rush/index.html": "skateRush",
//     "/star-wars-rogue/index.html": "starWars",
//     // "/temple-run-2/index.html": "templeRun",
//     "/temple-quest/index.html": "templeQuest",
//   };

//   // useEffect(() => {
//   //   if (msisdn) {
//   //     // console.log("Updated MSISDN:", msisdn);

//   //     handleUpdateLeaderboardScore(msisdn, gameScore);
//   //   }
//   // }, [msisdn, gameScore]);

//   const handleBackToApp = async (gameKey, msisdn) => {
//     setIframeSrc("");
//     // console.log("Game Key:", gameKey);
//     const game = gameConfig[gameKey];
//     if (!game) {
//       console.error("Game configuration not found for key:", gameKey);
//       return;
//     }

//     const storedData = localStorage.getItem(game.localStorageKey);
//     let parsedData;
//     try {
//       // Try to parse the data as JSON
//       parsedData = storedData ? JSON.parse(storedData) : null;
//     } catch (error) {
//       console.warn("Data is not in JSON format, handling as a string:", error);
//       // Handle SkateRush data as a comma-separated string
//       parsedData = storedData ? storedData.split(",") : null;
//     }

//     // console.log("Parsed Data:", parsedData);

//     const gameScore = game.getScore(parsedData);

//     // console.log("Game Score Retrieved:", gameScore);

//     if (gameScore !== undefined && gameScore !== null) {
//       // console.log("Stored score outside for bestScore:", gameScore);
//       try {
//         // console.log("MSISDN before updating leaderboard:", msisdn);

//         await handleUpdateLeaderboardScore(msisdn, gameScore);
//         // console.log("Leaderboard updated successfully with score:", gameScore);
//         await fetchLeaderboardStanding();
//         // console.log("Leaderboard standing with score:", gameScore);
//       } catch (error) {
//         console.error("Error updating leaderboard:", error);
//       }
//     } else {
//       console.error("Game score is invalid:", gameScore);
//     }
//   };
//   useEffect(() => {
//     if (msisdn && gameScore) {
//       // console.log("Updated MSISDN:", msisdn);
//       handleUpdateLeaderboardScore(msisdn, gameScore)
//         .then(() => {
//           // console.log(
//           //   "Leaderboard updated successfully with score:",
//           //   gameScore
//           // );
//           fetchLeaderboardStanding();
//         })
//         .catch((error) => {
//           console.error("Error updating leaderboard:", error);
//         });
//     }
//   }, [msisdn, gameScore]);


//   useEffect(() => {
//     if (auth?.token && msisdn) {
//       fetchProfile(msisdn);
//     }
//   }, [auth?.token, msisdn]);
  

//   if (loading) {
//     return <div>
//           <Circles color="black" height={50} width={50} />

//     </div>;
//   }
//   // if (error) return <p>{error}</p>;

//   // useEffect(() => {
//   //   if (error) {
//   //     navigate("/error");
//   //   }
//   // }, [error, navigate]);

//   return (
//     <>
//      {!iframeSrc ? (

//       <div className="flex flex-col h-[1059px] md:h-[1390px] bg-profile-gradient   justify-center items-center">
//         {/* <div className="bg-[#FFCB05] w-full h-[143px] mx-0"></div> */}
//         <div className="bg-darrk-gradient h-[749px]   w-full">
//           <div className="flex justify-between items-center -mt-[47px]   ">
//             <img
//               src={userAvatar || Avatar1}
//               alt="Avatar Icon"
//               className="w-[108px] h-[108px] rounded-full ml-[40px] md:ml-[170px]"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = Avatar1;
//               }}
//             />
//             <div className="flex gap-[23px] mr-[31px] md:mr-[100px]">
//               <img
//                 src={Volume}
//                 alt="Volume"
//                 className=" bg-[#000000] grayscale border border-[#2C3035] rounded-[26px] pt-[13.53px] pb-[15.55px] px-[16px]"
//               />
//               <img
//                 src={Radix}
//                 alt="Mode"
//                 className=" bg-[#000000] grayscale border border-[#2C3035] rounded-[26px] pt-[13.53px] pb-[15.55px] px-[16px]"
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between mt-[11px]">
//             <div className="text-center text-white ml-[13px] md:ml-[170px]">
//               <p className="font-mtn-brighter-medium font-medium text-[14px] leading-[18.2px] text-center">
//                 @{msisdn}
//               </p>
//               <p className="text-[#FFCA00] font-mtn-brighter-bold font-bold text-[16px] leading-[20.8px] text-center">
//                 {/* Subscribed */}
//                 {/* {userProfile?.isSubscribed ? "Subscribed" : "Unsubscribed"} */}
//               </p>
//             </div>
//             {/* <div className="mr-[24px] md:mr-[100px] flex items-center justify-center border border-[#FFCB05] rounded-[30px] pl-[35px] pr-[44px] px-[12px] ">
//               <img src={Coins} alt="Coin" className="w-12 h-12" />
//               <p className="text-[#FFFFFF] font-mtn-brighter-medium font-medium text-[16px] leading-[20.8px] text-center">
//                 N10k
//               </p>
//             </div> */}
//           </div>
//           <button
//             className="bg-button-gradient color-[#000000] mx-auto mt-[20px] py-[14px] px-[33px]  flex items-center justify-center rounded-[42px] border border-[#00000033] font-mtn-brighter-bold font-bold text-[14px] leading-[18.2px] text-center"
//             onClick={handleViewLeaderboardClick}
//           >
//             <img src={Trophy} alt="trophy" />
//             View Leaderboard
//           </button>

//           <div className="flex items-center justify-center gap-[10px] mt-[30px] mx-[10px]">
//             <div className="w-full max-w-[200px] h-[71px] flex items-center justify-center gap-[4px] border-[1.5px] border-[#FFFFFF4A] bg-[#2C3035] shadow-box-shadow rounded-[12px] ">
//               <img
//                 src={userAvatar || Avatar1}
//                 alt="Score Icon"
//                 className="w-12 h-12"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = Avatar1;
//                 }}
//                 loading="lazy"
//               />
//               <div className="block">
//                 <p className="font-mtn-brighter-regular font-regular text-[16px] leading-[20.8px] text-center text-[#FFFFFFCC]   ">
//                   Your Score
//                 </p>
//                 <p className="font-mtn-brighter-bold font-bold text-[20px] leading-[26px] text-center text-[#FFCB05] overflow-hidden text-ellipsis w-[120px]">
//                   {myPoints}
//                 </p>
//               </div>
//             </div>

//             <div className="w-full max-w-[200px] h-[71px] flex items-center justify-center gap-[10px] border-[1.5px] border-[#FFFFFF4A] bg-[#2C3035] shadow-box-shadow rounded-[12px]">
//               <img src={Crown} alt="Score Icon" className="w-10 h-10" />
//               <div className="block">
//                 <p className="font-mtn-brighter-regular font-regular text-[16px] leading-[20.8px] text-center text-[#FFFFFFCC]">
//                   Top Score
//                 </p>
//                 <p className="font-mtn-brighter-bold font-bold text-[20px] leading-[26px] text-center text-[#FFCB05] overflow-hidden text-ellipsis w-[120px]">
//                   {topPoints}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <p className="font-mtn-brighter-xtra-bold font-extrabold text-[24px] leading-[31.2px] text-center text-[#FFFFFF] mt-[40px]">
//             Continue Playing
//           </p>

//           <div className="flex flex-col items-center justify-center gap-[14px] mt-6 w-full ">
//             <div className="bg-[#2C3035] px-[25px] py-[13px] border-[1.5px] border-[#FFFFFF66] shadow-lg rounded-[12px] w-[342px] h-[71px] flex items-center ">
//               <img
//                 src={SkateRush}
//                 alt="rush"
//                 className="w-[47px] h-[46px] rounded-[10px] object-cover"
//                 loading="lazy"
//               />
//               <div className="block pl-[16px]  text-justify">
//                 <p className="font-mtn-brighter-regular font-regular w-[184px] text-[16px] leading-[20.8px]  text-[#FFFFFF]">
//                   SKATE RUSH
//                 </p>
//                 <p className="font-mtn-brighter-medium font-medium text-[16px] leading-[20.8px] text-[#FFFFFF]">
//                   #200
//                 </p>
//               </div>
//               <div className=" flex -mb-[22px] ">
//                 <Link to="#">
//                   <button
//                     onClick={() =>
//                       handleSkatePlay(gameConfig.skateRush, msisdn)
//                     }
//                     className="text-[#FFCA00] font-mtn-brighter-medium font-medium text-[16px] leading-[20.8px] text-center "
//                   >
//                     Play
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             <div className="bg-[#2C3035] px-[25px] py-[13px] border-[1.5px] border-[#FFFFFF66] shadow-lg rounded-[12px] w-[342px] h-[71px] flex items-center ">
//               <img
//                 src={StarWars}
//                 alt="rush"
//                 className="w-[47px] h-[46px] rounded-[10px] object-cover"
//                 loading="lazy"
//               />
//               <div className="block pl-[16px]  text-justify">
//                 <p className="font-mtn-brighter-regular font-regular w-[184px] text-[16px] leading-[20.8px]  text-[#FFFFFF]">
//                   STAR WARS
//                 </p>
//                 <p className="font-mtn-brighter-medium font-medium text-[16px] leading-[20.8px] text-[#FFFFFF]">
//                   #200
//                 </p>
//               </div>
//               <div className=" flex -mb-[22px] ">
//                 <Link to="#">
//                   <button
//                     onClick={() =>
//                       handleStarWarsPlay(gameConfig.starWars, msisdn)
//                     }
//                     className="text-[#FFCA00] font-mtn-brighter-medium font-medium text-[16px] leading-[20.8px] text-center "
//                   >
//                     Play
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <div className="bg-[#2C3035] px-[25px] py-[13px] border-[1.5px] border-[#FFFFFF66] shadow-lg rounded-[12px] w-[342px] h-[71px] flex items-center ">
//               <img
//                 src={TempleQuest}
//                 alt="rush"
//                 className="w-[47px] h-[46px] rounded-[10px] object-cover"
//                 loading="lazy"
//               />
//               <div className="block pl-[16px]  text-justify">
//                 <p className="font-mtn-brighter-regular font-regular w-[184px] text-[16px] leading-[20.8px]  text-[#FFFFFF]">
//                   TEMPLE QUEST
//                 </p>
//                 <p className="font-mtn-brighter-medium font-medium text-[16px] leading-[20.8px] text-[#FFFFFF]">
//                   #200
//                 </p>
//               </div>
//               <div className=" flex -mb-[22px] ">
//                 <Link to="#">
//                   <button
//                     onClick={() =>
//                       handleTemplePlay(gameConfig.templeQuest, msisdn)
//                     }
//                     className="text-[#FFCA00] font-mtn-brighter-medium font-medium text-[16px] leading-[20.8px] text-center "
//                   >
//                     Play
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

         

//           {/* <div className="fixed  flex justify-center py-4 "> */}
//           <div className="w-max mx-auto">

//             <div
//               // style={navStyle}
//               className="fixed mx-auto left-0 right-0 bottom-0  backdrop-blur-sm   w-[342px] h-[82px] flex justify-between items-center  bg-foot-nav-gradient rounded-b-[60px] pt-[12px] pb-[20px] px-[46px]  "
//             >
//               <Link
//                 to="/home"
//                 className="bg-foot-nav-gradient rounded-[50px] w-[60px] h-[60px] flex items-center justify-center"
//               >
//                 <img src={Home} alt="home" />
//               </Link>

//               <Link
//                 to="/user-profile"
//                 className="bg-[#FFCB05] rounded-[50px] w-[76px] h-[76px] flex items-center justify-center -mt-[40px]"
//               >
//                 <img
//                   src={Profile}
//                   alt="profile"
//                   className="w-[40px] h-[40px]"
//                   loading="lazy"
//                 />
//               </Link>
//               <Link
//                 to="/leaderboard"
//                 className="bg-foot-nav-gradient rounded-[50px] w-[60px] h-[60px] flex items-center justify-center"
//               >
//                 <img src={Leaderboard} alt="leaderboard" loading="lazy" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div> ):(

//             // <div className="absolute inset-0 bg-white z-50">
//             <div className="mx-auto h-screen bg-black">
 
//               <iframe
//                 src={iframeSrc}
//                 title="Game"
//                 // sandbox="allow-scripts allow-same-origin"
//                 className="w-full h-[88vh]"
//                 loading="lazy"
//               />
//               <button
//                 onClick={() => {
//                   const gameKey = gameMappings[iframeSrc];
//                   if (gameKey) {
//                     handleBackToApp(gameKey, msisdn);
//                   } else {
//                     console.error(
//                       "No game mapping found for the current iframe source."
//                     );
//                   }
//                 }}
//                 className="my-4 w-full bg-sky-900 text-white px-4 py-2 rounded-[28px] font-mtn-brighter-medium font-medium text-[18px]"
//               >
//                 Back to App
//               </button>
//             </div>
//           )}
//     </>
//   );
// };

// export default ProfilePage;







