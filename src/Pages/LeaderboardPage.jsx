import React, { useEffect, useState } from "react";
import BgImg from "../assets/Images/splash-img.png";
import { Link, useNavigate } from "react-router-dom";
import AvatarProfile from "../assets/Icons/avatar-prof.png";
import Coins from "../assets/Icons/coins.png";
import Trophy from "../assets/Icons/trophy.png";
import Home from "../assets/Icons/home.png";
import LeaderboardIcon from "../assets/Icons/leaderboard.png";
import Profile from "../assets/Icons/profile.png";
import Rank1 from "../assets/Icons/rank4.png";
import Rank2 from "../assets/Icons/rank1.png";
import Rank3 from "../assets/Icons/rank2.png";
import Rank4 from "../assets/Icons/rank3.png";
import Rank5 from "../assets/Icons/rank3.png";
import Rank6 from "../assets/Icons/rank3.png";
import Avatar1 from "../assets/Icons/avatar1.png";
import Avatar2 from "../assets/Icons/avatar2.png";
import Avatar3 from "../assets/Icons/avatar3.png";
import Avatar4 from "../assets/Icons/avatar4.png";
import Avatar5 from "../assets/Icons/avatar5.png";

const LeaderboardPage = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(AvatarProfile);
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];
  const navigate = useNavigate();

  const handleViewPrizesClick = () => {
    navigate("/prizes");
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleSave = () => {
    if (selectedAvatar) {
      setCurrentAvatar(selectedAvatar);
      setShowAvatarSelector(false);
    }
  };

  return (
    <>
      <div
        className="relative flex flex-col items-center  h-screen text-white"
        style={{
          backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-[#EFF3F50D] w-[342px] h-full mt-[29px] mx-auto">
          <div className="bg-custom-gradient rounded-[26px] text-white flex justify-center items-center w-[231px] h-[49px]  mt-[21px] mx-auto">
            <div className="flex justify-between items-center  ">
              <div className="flex items-center justify-between space-x-14  relative">
                <div
                  className="w-[50px] h-[50px]  flex items-center justify-center cursor-pointer "
                  onClick={() => setShowAvatarSelector(!showAvatarSelector)}
                >
                  <img
                    //   src={userAvatar || AvatarProfile}
                    src={Avatar1}
                    alt="Profile Avatar"
                    className="-ml-[8px] -mb-[6px]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = AvatarProfile;
                    }}
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-center gap-[10px]  ">
                  <Link
                    to="/terms-and-conditions"
                    className="border border-[#16D1F9] rounded-[26px] w-[51px] h-[27px] bg-[#7F806266] flex justify-center items-center mt-[12px] mb-[10px] "
                  >
                    <p className="font-alien font-medium text-[12px] leading-[15.6px] text-center text-[#16D1F9]">
                      T<span style={{ fontFamily: 'Arial, sans-serif' }}>&</span>C's
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
              {/* @{msisdn} */}
              @+2778 414 2470
            </p>
          </div>

          <img src={Trophy} alt="trophy" className="mx-auto mt-[4px]" />
          <h1 className="font-alien font-bold text-[18px] text-center leading-[19.8px] mx-auto text-[#FFFFFF]">
            Leaderboard
          </h1>
          <p className="text-[#FFFFFF] mx-auto font-alien font-normal text-[14px] w-[274px] leading-[15.4px] text-center mt-[11px]">
            These are our{" "}
            <span className="font-alien font-bold text-[14px] leading-[15.4px] text-center">
              Top Players
            </span>{" "}
            and you are currently #4
          </p>

          {/* Table */}
          <div className="w-full mt-6   ">
            <table className="table-fixed  mx-auto md:mx-auto">
              <thead>
                <tr className="text-center">
                  <th className="p-2 w-12  font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                    Rank
                  </th>
                  <th className="p-2 w-32 font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                    Phone
                  </th>
                  <th className="p-2 w-24 font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                    Daily Score
                  </th>
                  <th className="p-2 w-32  font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                    Monthly Score
                  </th>
                </tr>
              </thead>

{/* 
                 <tbody>
                   {!leaderboard || leaderboard.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center text-white">
                        </td>
                      </tr>
                    ) : (
                      leaderboard.map((player, index) => {
                        const rankImage =
                          player.position === 1
                            ? Rank1
                            : player.position === 2
                            ? Rank2
                            : player.position === 3
                            ? Rank3
                            : player.position === 4
                            ? Rank4
                            : player.position === 5
                            ? Rank5
                            : player.position === 6
                            ? Rank6
                            : null;

                        const isTop3 =
                          player.position === 1 ||
                          player.position === 2 ||
                          player.position === 3;

                        return (
                          <tr
                            key={index}
                            className={`text-center ${
                              isTop3
                                ? "bg-gradient-to-b from-[#221F20] to-[#000000] shadow-[0px_4px_4px_0px_#00000040] rounded-[25px]"
                                : ""
                            }`}
                          >
                            <td className="p-1 relative w-[50px] h-[50px] font-mtn-brighter-medium font-medium text-[14px] leading-[20.8px] text-[#FFFFFF]">
                              {rankImage ? (
                                <div className="relative flex justify-center items-center ">
                                  <img
                                    src={rankImage}
                                    alt={`Rank ${player.position}`}
                                    className="w-[30px] h-[25px]"
                                  />
                                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[14px]">
                                    {player.position}
                                  </span>
                                </div>
                              ) : (
                                <span className="font-bold text-white text-[14px]">
                                  {player.position}
                                </span>
                              )}
                            </td>

                            <td className="p-1 font-mtn-brighter-medium font-medium text-[14px] w-32 truncate leading-[20.8px] text-[#FFFFFF]">
                              {obscureMSISDN(player.msisdn)}
                            </td>
                            <td className="p-1 font-mtn-brighter-medium font-medium text-[14px] w-24 truncate leading-[20.8px] text-[#FFFFFF]">
                              {player.dailyPoints}
                            </td>
                            <td className="p-1 font-mtn-brighter-medium font-medium text-[14px] w-32 text-ellipsis overflow-hidden leading-[20.8px] text-[#FFFFFF] ">
                              {player.monthlyPoints}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>  */}
            </table>
          </div>
          <div className="flex justify-center mb-[51px] ">
              <button
                className="bg-btn-background mx-auto py-[14px] px-[33px] rounded-[24px] font-alien text-[14px] font-bold leading-[16.8px] text-white"
                onClick={handleViewPrizesClick}
              >
                View Prize List
              </button>
            </div>

            <div className=" flex justify-center py-8 ">
            <div className="w-full max-w-[336px]  h-[82px] backdrop-blur-sm flex justify-between items-center bg-[#E3E4E31A]  pt-[12px] pb-[20px] px-[46px]">
              <Link
                to="/home"
                className="bg-icon-background  rounded-[50px] w-[60px] h-[60px] flex items-center justify-center"
              >
                <img src={Home} alt="home" />
              </Link>

              <Link
                to="/user-profile"
                className="bg-[#0258FD] rounded-[50px] w-[76px] h-[76px] flex items-center justify-center -mt-[40px]"
              >
                <img
                  src={Profile}
                  alt="profile"
                  className="w-[40px] h-[40px]"
                />
              </Link>

              <Link
                to="/leaderboard"
                className="bg-icon-background  rounded-[50px] w-[60px] h-[60px] flex items-center justify-center"
              >
                <img src={LeaderboardIcon} alt="leaderboard" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;






