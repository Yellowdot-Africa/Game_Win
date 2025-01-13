import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarProfile from "../assets/Icons/avatar-prof.png";
import Home from "../assets/Icons/home.png";
import Leaderboard from "../assets/Icons/leaderboard.png";
import Profile from "../assets/Icons/profile.png";
import PrizeIcon from "../assets/Icons/prizes.png";
import BgImg from "../assets/Images/splash-img.png";
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
import PlusIcon from "../assets/Icons/plus-icon.png";
import ProfileContext from "../Context/ProfileContext";

const PrizesPage = () => {
  const prizesData = [
    { position: 1, dailyAirtime: "R60", monthlyCash: "R1000" },
    { position: 2, dailyAirtime: "R55", monthlyCash: "R750" },
    { position: 3, dailyAirtime: "R50", monthlyCash: "R500" },
    { position: 4, dailyAirtime: "R45", monthlyCash: "R450" },
    { position: 5, dailyAirtime: "R40", monthlyCash: "R400" },
    { position: 6, dailyAirtime: "R35", monthlyCash: "R350" },
    { position: 7, dailyAirtime: "R30", monthlyCash: "R300" },
    { position: 8, dailyAirtime: "R25", monthlyCash: "R250" },
    { position: 9, dailyAirtime: "R20", monthlyCash: "R200" },
    { position: 10, dailyAirtime: "R10", monthlyCash: "R100" },
  ];

  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(AvatarProfile);
  const navigate = useNavigate();
  const [userAvatar, setUserAvatar] = useState({ AvatarProfile });
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { msisdn } = useContext(ProfileContext);

  useEffect(() => {
    const storedAvatar = localStorage.getItem("selectedAvatar");
    if (storedAvatar) {
      setUserAvatar(storedAvatar);
    }
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const navStyle = {
    position: "fixed",
    bottom: scrollDirection === "down" ? "0px" : "0px",
    left: "50%",
    transform: "translateX(-50%)",
    transition: "bottom 0.5s ease",
  };

  const handleAvatarClick = () => {
    setShowAvatarSelector(!showAvatarSelector);
  };

  const handleViewLeaderboardClick = () => {
    navigate("/leaderboard");
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
        className="relative flex flex-col items-center  min-h-[1080px] md:h-[1430px] text-white"
        style={{
          backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
          backgroundSize: "cover",
        }}
      >
        {" "}
        <div
          className={`flex flex-col  min-h-screen  ${
            showAvatarSelector ? " blur-[3px]" : ""
          }`}
        >
          <div className="bg-[#E2EEF60D] w-[342px]  h-[933px] mt-[17px] mx-auto">
            <div className="bg-custom-gradient rounded-[26px] text-white flex justify-center items-center w-[238px] h-[49px]  mt-[21px] mx-auto">
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-between space-x-16  relative">
                  <div
                    className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
                    onClick={handleAvatarClick}
                  >
                    <img
                      src={userAvatar || AvatarProfile}
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
                      <p className="font-alien font-normal text-[12px] leading-[15.6px] text-center text-[#16D1F9]">
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
                      <p className="font-alien font-normal text-[12px] leading-[15.6px] text-center text-[#16D1F9]">
                        {" "}
                        FAQ's
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background w-[140px] h-[28px] rounded-b-[26px] flex items-center justify-center m-auto shadow-box-shadow">
              <p className="font-mtn-brighter-medium font-medium text-[10px] leading-[13px] text-center text-[#FFFFFF]">
                @{msisdn}
              </p>
            </div>

            <img src={PrizeIcon} alt="trophy" className="mx-auto mt-[4px]" />
            <h1 className="font-alien font-bold text-[18px] text-center leading-[19.8px] mx-auto text-[#FFFFFF]">
              Prizes
            </h1>
            <p className="text-[#FFFFFF] mx-auto font-alien font-normal text-[14px] w-[274px] leading-[15.4px] text-center mt-[11px]">
              The grand prize is{" "}
              <span className="font-alien font-bold text-[14px] leading-[15.4px] text-center">
                R1000!{" "}
              </span>
              With lots of Airtime to be won!
            </p>

            <div className="w-full  mt-6">
              <table className="table-auto  mx-auto md:mx-auto">
                <thead>
                  <tr className="text-center">
                    <th className="p-2 font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                      Position
                    </th>
                    <th className="p-2 font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                      Daily Airtime
                    </th>
                    <th className="p-2 font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                      Monthly Cash
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prizesData.map((prize, index) => {
                    const rankImage =
                      prize.position === 1
                        ? Rank1
                        : prize.position === 2
                        ? Rank2
                        : prize.position === 3
                        ? Rank3
                        : prize.position === 4
                        ? Rank4
                        : prize.position === 5
                        ? Rank5
                        : prize.position === 6
                        ? Rank6
                        : null;

                    const isTop3 =
                      prize.position === 1 ||
                      prize.position === 2 ||
                      prize.position === 3;

                    return (
                      <tr
                        key={index}
                        className={`text-center ${
                          isTop3
                            ? "bg-priz-background shadow-[0px_4px_4px_0px_#00000040] rounded-[25px] w-[344px]"
                            : ""
                        }`}
                      >
                        <td className="p-2 relative w-[50px] h-[50px] font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                          {rankImage ? (
                            <div className="relative flex justify-center items-center">
                              <img
                                src={rankImage}
                                alt={`Rank ${prize.position}`}
                                className="w-[30px] h-[25px]"
                              />
                              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[14px]">
                                {prize.position}
                              </span>
                            </div>
                          ) : (
                            <span className="font-bold text-white text-[14px]">
                              {prize.position}
                            </span>
                          )}
                        </td>
                        <td className="p-2 font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                          {prize.dailyAirtime}
                        </td>
                        <td className="p-2 font-alien font-normal text-[14px] leading-[15.4px] text-[#FFFFFF]">
                          {prize.monthlyCash}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full" style={navStyle}>
          <div className="flex justify-center -mt-[240px]">
            <button
              className="bg-btn-background mx-auto py-[14px] px-[33px] rounded-[42px] border border-[#00000033] font-mtn-brighter-bold text-[14px] text-black"
              onClick={handleViewLeaderboardClick}
            >
              View Leaderboard
            </button>
          </div>

          <div className="flex justify-center py-8 ">
            <div className="w-full max-w-[336px] h-[82px] backdrop-blur-sm flex justify-between items-center bg-[#FFFFFF1A]  rounded-b-[60px] pt-[12px] pb-[20px] px-[46px]">
              <Link
                to="/home"
                className="bg-icon-background rounded-[50px] w-[60px] h-[60px] flex items-center justify-center"
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
                className="bg-icon-background rounded-[50px] w-[60px] h-[60px] flex items-center justify-center"
              >
                <img src={Leaderboard} alt="leaderboard" />
              </Link>
            </div>
          </div>
        </div>
        {showAvatarSelector && (
          <div className="flex items-center justify-center mx-auto">
            <div className="absolute top-[30px] left-auto w-[265px] h-[138px]  bg-[#070E3C]  rounded-[26px]  ">
              <div className="flex items-center justify-center ">
                {/* <img
                  src={currentAvatar || AvatarProfile}
                  alt="Profile Avatar"
                /> */}
                <p className="text-white pt-[22px] font-alien font-normal text-[12px] leading-[13.2px] text-center w-[228px]">
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
                  className="text-[#FFFFFF] mx-auto font-alien flex items-center justify-center font-bold text-[14px] leading-[16.8px] text-center  mt-[5px]"
                  onClick={handleSave}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PrizesPage;
