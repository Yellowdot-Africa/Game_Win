import React, { useState, useEffect, useContext } from "react";
import BgImg from "../assets/Images/splash-img.png";
import Avatar1 from "../assets/Icons/avatar1.png";
import AvatarProfile from "../assets/Icons/avatar-prof.png";
import Volume from "../assets/Icons/volume.png";
import Radix from "../assets/Icons/radix.png";
import Crown from "../assets/Icons/crown.png";
import { Link, useNavigate } from "react-router-dom";
import Home from "../assets/Icons/home.png";
import Leaderboard from "../assets/Icons/leaderboard.png";
import Profile from "../assets/Icons/profile.png";
import ProfileContext from "../Context/ProfileContext";
import LeaderboardContext from "../Context/LeaderboardContext";
import InstructionModal from "../Modals/InstructionModal";
import NicknameModal from "../Modals/NicknameModal";

const UserProfile = () => {
  const [myPoints, setMyPoints] = useState(0);
  const [topPoints, setTopPoints] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const [userAvatar, setUserAvatar] = useState({ AvatarProfile });

  const navigate = useNavigate();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const {
    leaderboard,

    fetchLeaderboard,
    obscureMSISDN,
  } = useContext(LeaderboardContext);

  const {
    profile,
    nickname,
    setNickname,
    avatar,
    setAvatar,
    loading,
    error,
    fetchProfile,
    saveUserSubProfile,
    operationStatus,
    msisdn,
  } = useContext(ProfileContext);

  useEffect(() => {
    const storedAvatar = localStorage.getItem("selectedAvatar");
    if (storedAvatar) {
      setUserAvatar(storedAvatar);
    }
  }, []);

  useEffect(() => {
    if (msisdn) {
      fetchProfile(msisdn);
    }
  }, [msisdn]);

  useEffect(() => {
    if (leaderboard?.length > 0 && profile) {
      const myEntry = leaderboard.find(
        (entry) => entry.msisdn === profile.msisdn
      );

      setMyPoints(myEntry ? myEntry.points : 0);

      const maxPoints = Math.max(...leaderboard.map((entry) => entry.points));
      setTopPoints(maxPoints);
    }
  }, [leaderboard, profile]);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleNicknameClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center h-[1009px] md:h-[1390px] text-white"
        style={{
          backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-[#f4f4f41a] mt-[168px] w-full h-full">
          <div className="flex justify-between items-center -mt-[47px]">
            <img
              className="w-[108px] h-[108px] rounded-full ml-[40px] md:ml-[170px]"
              // src={Avatar1}
              src={userAvatar || Avatar1}
              alt="avatar icon"
            />
            <div className="flex gap-[23px] mr-[31px] md:mr-[100px]">
              <img
                src={Volume}
                alt="Volume"
                className=" bg-transparent grayscale border border-[#ffffff] rounded-[26px] pt-[13.53px] pb-[15.55px] px-[16px]"
              />
              <img
                src={Radix}
                alt="Mode"
                className=" bg-transparent grayscale border border-[#ffffff] rounded-[26px] pt-[13.53px] pb-[15.55px] px-[16px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-[11px]">
            <div className="text-center text-white ml-[13px] md:ml-[170px]">
              <p className="font-mtn-brighter-medium font-medium text-[14px] leading-[18.2px] text-center">
                @{msisdn}
              </p>
              <p className="font-mtn-brighter-medium font-medium text-[14px] leading-[18.2px] text-center">
                {nickname}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[10px] mt-[30px] mx-[10px]">
            <div className="w-full max-w-[200px] h-[71px] flex items-center justify-center gap-[4px] border-none bg-[#E3E4E31A] shadow-box-shadow">
              <img
                // src={Avatar1}
                src={userAvatar || Avatar1}
                alt="Score Icon"
                className="w-12 h-12"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = Avatar1;
                }}
                loading="lazy"
              />
              <div className="block">
                <p className="font-alien font-normal text-[14px] leading-[15.4px] text-center text-[#FFFFFFCC]   ">
                  Your Score
                </p>
                <p className="font-alien font-bold text-[20px] leading-[22px] text-center text-[#FFFFFF] overflow-hidden text-ellipsis w-[120px] mt-[5px]">
                  {myPoints}
                </p>
              </div>
            </div>

            <div className="w-full max-w-[200px] h-[71px] flex items-center justify-center gap-[10px] border-none border-[#FFFFFF4A] bg-[#E3E4E31A] shadow-box-shadow">
              <img src={Crown} alt="Score Icon" className="w-10 h-10" />
              <div className="block">
                <p className="font-alien font-normal text-[14px] leading-[15.4px] text-center text-[#FFFFFFCC]">
                  Top Score
                </p>
                <p className="font-alien font-bold text-[20px] leading-[22px] text-center text-[#FFFFFF] overflow-hidden text-ellipsis w-[120px]">
                  {topPoints}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handlePlayClick}
              className="mt-[40px] font-alien font-bold text-[14px] leading-[16.8px] bg-[#014AD5] rounded-[24px]  px-[100px] py-4"
            >
              Back to Play
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleNicknameClick}
              className="mt-[40px] font-alien font-bold text-[14px] leading-[16.8px] border border-[#014AD5] rounded-[24px]  px-[100px] py-4"
            >
              Create Nickname
            </button>
          </div>

          <div className="w-max mx-auto ">
            <div
              className="fixed left-0 right-0 bottom-0  mx-auto backdrop-blur-sm flex justify-between items-center w-[342px] h-[82px] rounded-b-[60px] bg-[#FFFFFF1A] 
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
                <img
                  src={Profile}
                  alt="profile"
                  className="w-[40px] h-[40px]"
                />
              </Link>
              <Link
                to="/leaderboard"
                className="bg-icon-background rounded-[50px] w-[50px] h-[50px] flex items-center justify-center"
              >
                <img src={Leaderboard} alt="leaderboard" />
              </Link>
            </div>
          </div>
        </div>
        {isModalOpen && <InstructionModal onClose={closeModal} />}
        {ModalOpen && <NicknameModal onClose={closeModal} />}
      </div>
    </>
  );
};

export default UserProfile;
