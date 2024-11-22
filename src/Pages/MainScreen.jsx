import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ProfileContext from "../Context/ProfileContext";
import BgImage from "../assets/bg.png";
import GameWin from "../assets/gamewin.png";
import GemPiles from "../assets/Gemspile.png";
import UserIcon from "../assets/user-icon.png";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.png";
import Avatar5 from "../assets/avatar5.png";
import InstructionModal from "../Components/Modals/InstructionModal";
import "../App.css";

const MainScreen = () => {
  const [showContent, setShowContent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { profile } = useContext(ProfileContext);
  const [avatarForPlusIcon, setAvatarForPlusIcon] = useState(null);
  const [avatarList] = useState([Avatar1, Avatar2, Avatar3, Avatar4, Avatar5]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <img
        src={BgImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative flex flex-col items-center justify-center z-10 pb-9 pt-20 w-full max-w-[350px] px-4 content-container">
        <img src={GameWin} alt="Game" className="w-[266px] mb-0" />
        <img src={GemPiles} alt="Gems" className="w-[193px] mt-[-40px]" />
        <div className="flex flex-col items-center min-h-[150px]">
          {showContent && (
            <>
              <button
                onClick={handlePlayClick}
                className="bg-white text-black w-full max-w-[225px] px-4 py-2 rounded-full mb-12 text-[16px] font-mochiy opacity-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: showContent ? 1 : 0 }}
              >
                PLAY
              </button>
              <Link
                to="/leaderboard"
                className="text-white font-mochiy text-[16px] mb-16 border-b opacity-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: showContent ? 1 : 0 }}
              >
                VIEW LEADERBOARD
              </Link>
            </>
          )}
        </div>
        <p className="absolute w-[100vw] bg-[#0046B0] border-gradient text-white text-center font-mochiy text-[14px] py-[13px] px-[24px] -bottom-[22%]">
          PLAY TO WIN THE R1000 GRAND PRIZE!!!
        </p>
      </div>

      {showContent && (
        <Link to="/user-profile" className="absolute top-12 left-8">
          <div className="w-[48px] h-[48px] rounded-full border bg-white border-white flex items-center justify-center">
            <img
              src={profile?.avatar ? avatarList[profile.avatar - 1] : UserIcon}
              alt="User"
              className="w-[80%] h-[80%]"
            />
          </div>
          <p className="text-[12px] text-white text-center font-[400] font-mochiy">
            {profile?.nickname || "User"}
            {/* User */}
          </p>
        </Link>
      )}

      <div className="absolute top-14 right-8 flex justify-center items-center gap-4 rounded-full px-6 py-2 shadow-shadow-2 bg-gradient-to-r from-purple-500 to-blue-500">
        <button className="text-white text-[12px] font-mochiy  border-white border rounded-[28px] px-2 py-1 ">
          T&C's
        </button>
        <button className="text-white text-[12px] font-mochiy  border-white border rounded-[28px] px-2 py-1 ">
          FAQ's
        </button>
      </div>

      {showModal && <InstructionModal onClose={closeModal} />}
    </div>
  );
};

export default MainScreen;
