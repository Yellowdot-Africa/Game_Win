import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/leaderboard-bg.png";
import LogoImage from "../assets/gamewin.png";
import DiamondImage from "../assets/DiamondGems.png";
import Image1 from "../assets/one.png";
import Image2 from "../assets/two.png";
import Image3 from "../assets/three.png";
import Rank1 from "../assets/rank1.png";
import Rank2 from "../assets/rank2.png";
import Rank3 from "../assets/rank3.png";
import Rank4 from "../assets/rank4.png";
import LeaderboardContext from "../Context/LeaderboardContext";

const Leaderboard = () => {
  const navigate = useNavigate();
  const {
    leaderboard,
    loading,
    error,
    fetchLeaderboard,
    msisdn,
    obscureMSISDN,
  } = useContext(LeaderboardContext);

  const userPosition =
    leaderboard?.length > 0
      ? leaderboard.findIndex((player) => player.msisdn === msisdn) + 1
      : null;

  console.log("Current MSISDN:", msisdn);
  console.log("User Position:", userPosition);

  const GoHome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="relative w-full h-[328px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <img
          src={LogoImage}
          alt="Logo"
          className="absolute top-4 left-4 w-[73px] h-[52px]"
        />
        <div className="relative w-[200px] h-[200px] mx-auto mt-20">
          <img
            src={DiamondImage}
            alt="Top 3"
            className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[174px] h-[100px]"
          />
          <img
            src={Image1}
            alt="1"
            className="absolute w-[50px] top-[25%] left-1/2 transform -translate-x-1/2"
          />
          <img
            src={Image2}
            alt="2"
            className="absolute w-[50px] top-[47%] left-[3%]"
          />
          <img
            src={Image3}
            alt="3"
            className="absolute w-[50px] top-[50%] right-[0%]"
          />
        </div>

        <div className="text-center mb-4 ">
          {userPosition > 0 ? (
            <p className="text-[12px] font-mochiy font-semibold text-white">
              {/* These are our Top Players and  */}
              You are currently number #{userPosition} on the leaderboard
            </p>
          ) : (
            <p className="text-[12px] font-mochiy font-semibold text-white">
              You are not yet on the leaderboard.
            </p>
          )}
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="relative flex-1 flex -mt-16 flex-col justify-center">
        <div className="flex justify-center mt-8 ">
          <div className="container mx-auto p-4">
            <h1 className="w-[70vw] mx-auto text-center bg-[#004ADA] px-[35px] py-[8px] text-white font-mochiy text-[16px] font-normal leading-[23.17px]">
              LEADERBOARD
            </h1>

            <div className="bg-white flex flex-col items-center justify-center shadow rounded overflow-hidden mt-4">
              {/* Table Header */}
              <div className="flex items-center justify-between p-4 bg-[#f1f1f1] font-semibold text-gray-700 w-[80vw]">
                <div className="w-1/4 text-center">Rank</div>
                <div className="w-1/2 text-center">Phone</div>
                <div className="w-1/4 text-right">Points</div>
              </div>
              {/* Table Rows */}
              {leaderboard.map((player) => (
                <div
                  key={player.position}
                  className={`flex items-center justify-between p-4 border-b border-gray-200 mx-[22px] ${
                    player.position > 6 ? "bg-white" : ""
                  }`}
                  style={{
                    width: "80vw",
                    height: "49px",
                    borderRadius: player.position <= 3 ? "25px" : "0px",
                    boxShadow:
                      player.position <= 3
                        ? "0px 4px 4px 0px #00000040"
                        : "none",
                  }}
                >
                  {/* Rank Column */}
                  <div className="flex items-center justify-center w-1/4">
                    {player.position <= 3 ? (
                      <div className="relative flex items-center">
                        <img
                          src={
                            player.position === 1
                              ? Rank1
                              : player.position === 2
                              ? Rank2
                              : player.position === 3
                              ? Rank3
                              : Rank4
                          }
                          alt={`Rank ${player.position}`}
                          className="w-8 h-8"
                        />
                        <span className="absolute left-1/2 transform -translate-x-1/2 text-white font-normal text-[16px]">
                          {player.position}
                        </span>
                      </div>
                    ) : (
                      <span className="text-center text-gray-700 font-medium">
                        {player.position}
                      </span>
                    )}
                  </div>

                  {/* MSISDN Column */}
                  <span className="w-1/2 text-center text-gray-700 font-medium">
                    {obscureMSISDN(player.msisdn)}
                  </span>

                  {/* Points Column */}
                  <span className="w-1/4 text-right text-gray-700 font-medium">
                    {player.points}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-auto mb-4">
          <button
            className="px-4 py-2 bg-white text-black rounded-[25px] font-mochiy text-[16px] font-normal leading-[23.17px] w-[50vw]"
            style={{
              height: "50px",
              borderRadius: "25px",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            onClick={GoHome}
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
