import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PlusIcon from "../assets/Icons/plus-icon.png";
import BgImg from "../assets/Images/splash-img.png";
import Avatar1 from "../assets/Icons/avatar1.png";
import Avatar2 from "../assets/Icons/avatar2.png";
import Avatar3 from "../assets/Icons/avatar3.png";
import Avatar4 from "../assets/Icons/avatar4.png";
import Avatar5 from "../assets/Icons/avatar5.png";
import AvatarProfile from "../assets/Icons/avatar-prof.png";
import Coins from "../assets/Icons/coins.png";
import Airtime from "../assets/Icons/airtime.png";
import Home from "../assets/Icons/home.png";
import Leaderboard from "../assets/Icons/leaderboard.png";
import Profile from "../assets/Icons/profile.png";
import InstructionModal from "../Modals/InstructionModal";
import ProfileContext from "../Context/ProfileContext";

const HomePage = () => {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(AvatarProfile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navigate = useNavigate();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { profile, saveUserSubProfile, msisdn } = useContext(ProfileContext);

  useEffect(() => {
    const storedAvatar = localStorage.getItem("selectedAvatar");
    if (storedAvatar) {
      setSelectedAvatar(storedAvatar);
      setCurrentAvatar(storedAvatar);
    } else {
      setCurrentAvatar(AvatarProfile);
    }
  }, []);
  const storedMsisdn = localStorage.getItem("cli");

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleAvatarClick = () => {
    setShowAvatarSelector(!showAvatarSelector);
  };

  const handleAvatarSelect = (avatarId) => {
    setSelectedAvatar(avatarId);
  };

  const handleSave = async () => {
    try {
      if (!selectedAvatar) return;
      const avatarId = avatars.indexOf(selectedAvatar) + 1;

      const msisdn = profile?.msisdn || storedMsisdn;
      if (!msisdn) {
        setError("MSISDN is required");
        return;
      }
      const nickname = msisdn;

      localStorage.setItem("selectedAvatar", selectedAvatar);

      await saveUserSubProfile(msisdn, nickname, avatarId);

      setCurrentAvatar(selectedAvatar);

      setShowAvatarSelector(false);
    } catch (error) {
      console.error("Error saving avatar:", error);
    }
  };

  const navStyle = {
    position: "fixed",
    bottom: scrollDirection === "down" ? "0px" : "0px",
    left: "50%",
    transform: "translateX(-50%)",
    transition: "bottom 0.5s ease",
  };
  return (
    <>
      <div
        className="relative flex flex-col items-center min-h-[780px] md:h-[1380px] text-white"
        style={{
          backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="">
          <div
            className={`flex flex-col min-h-screen  ${
              showAvatarSelector ? " blur-[3px]" : ""
            }`}
          >
            <div className="bg-custom-gradient rounded-[26px] text-white flex justify-center items-center w-[238px] h-[49px]  mt-[50px] mx-auto">
              <div className="flex justify-between items-center ">
                <div className="flex items-center  space-x-16  relative">
                  <div
                    className="w-[50px] h-[50px]  flex items-center justify-center cursor-pointer"
                    onClick={handleAvatarClick}
                  >
                    <img
                      src={currentAvatar || AvatarProfile}
                      alt="Profile Avatar"
                      className="-ml-[8px] -mb-[6px]"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-[10px]  ">
                    <Link
                      to="/terms-and-conditions"
                      className="border border-[#16D1F9] rounded-[26px] w-[51px] h-[27px] bg-[#7F806266] flex justify-center items-center mt-[12px] mb-[10px] "
                    >
                      <p className="font-alien font-medium text-[12px] leading-[15.6px] text-center text-[#16D1F9]">
                        T
                        <span style={{ fontFamily: "Arial, sans-serif" }}>
                          &
                        </span>
                        C's
                      </p>
                    </Link>
                    <Link
                      to="/faq"
                      className="border border-[#16D1F9]   rounded-[26px] w-[51px] h-[27px]  flex items-center  justify-center gap-[6px]   py-[5px] px-[20px]  "
                    >
                      <p className="font-alien font-medium text-[12px] leading-[15.6px] text-center text-[#16D1F9]">
                        {" "}
                        FAQ's
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background w-[140px] h-[27px] rounded-b-[26px] flex items-center justify-center mx-auto shadow-box-shadow">
              <p className="font-mtn-brighter-medium font-medium text-[10px] leading-[13px] text-center text-[#FFFFFF]">
                @{msisdn}
              </p>
            </div>
            <div
              className={`relative flex flex-col  justify-center items-center  mt-[11px] ${
                isModalOpen ? "blur-md" : ""
              }`}
            >
              <h1
                style={{
                  textShadow: "0px 4px 4px #FFFFFF40",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
                className=" text-[46px] leading-[55.2px]  tracking-spacing-4 text-center  shadow-custom-drop font-bold font-alien bg-[#0258FD66] text-[#ffffff]  border-4 border-[#16D1F9] rounded-[24px]  px-[43px] py-[46px]"
              >
                GAMEWIN
              </h1>

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
                    <span style={{ fontFamily: "Arial, sans-serif" }}>(</span>
                    CASH
                    <span style={{ fontFamily: "Arial, sans-serif" }}>)</span>
                  </p>
                  <p className="text-[#ffffff] font-alien text-[16px] font-bold leading-[19.2px]">
                    R20,000
                  </p>
                </div>

                {/* Second Prize */}
                <div className="flex items-center justify-between mb-[20px]">
                  <img src={Coins} alt="coins" />
                  <p className="text-[#EEEEEE] font-alien text-[14px] font-normal leading-[16.8px]">
                    Second Prize
                    <span style={{ fontFamily: "Arial, sans-serif" }}>(</span>
                    Cash
                    <span style={{ fontFamily: "Arial, sans-serif" }}>)</span>
                  </p>
                  <p className="text-[#ffffff] font-alien text-[16px] font-bold leading-[19.2px]">
                    R10,000
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
                onClick={handlePlayClick}
                className="bg-btn-background mt-[18px] font-alien text-[14px] font-bold leading-[16.8px] tracking-wider text-center rounded-[24px]  pt-[17px] pb-[13px] pl-[74px] pr-[79px] "
              >
                Play Fastest Finger
              </button>
            </div>
          </div>
        </div>
        <div className="w-max mx-auto -mt-[204px]" style={navStyle}>
          <div
            className=" mx-auto backdrop-blur-sm flex justify-between items-center w-[342px] h-[82px] rounded-b-[60px] bg-[#FFFFFF1A] 
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
          </div>
        </div>
        {showAvatarSelector && (
          <div className="flex items-center justify-center mx-auto">
            <div className="absolute top-[30px] left-auto w-[265px] h-[138px]  bg-[#070E3C]  rounded-[26px]  ">
              <div className="flex items-center justify-center ">
                <p className="text-white pt-[12px] font-alien font-normal text-[12px] leading-[13.2px] text-center w-[228px]">
                  Please select an avatar
                </p>
              </div>

              <div className="flex px-[10px] mt-4">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`relative  ${
                      selectedAvatar === avatar
                        ? "border-[3px] rounded-[28px] flex items-center justify-center border-[#FFFFFF]"
                        : ""
                    } cursor-pointer`}
                    onClick={() => handleAvatarSelect(avatar)}
                  >
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className="w-[50px] h-[50px]"
                    />
                    {selectedAvatar !== avatar && (
                      <div className=" absolute bottom-[5px] right-0  w-[10px] h-[10px]  bg-white rounded-[28px]">
                        <img
                          src={PlusIcon}
                          alt="Plus Icon"
                          className="w-[15px] h-[15px]  "
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {selectedAvatar && (
                <button
                  className="text-[#FFFFFF] mx-auto font-alien flex items-center justify-center font-bold text-[14px] leading-[16.8px] text-center  mt-[12px]"
                  onClick={handleSave}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        )}
        {isModalOpen && <InstructionModal onClose={closeModal} />}
      </div>
    </>
  );
};

export default HomePage;
