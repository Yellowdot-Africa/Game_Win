import React, { useState } from "react";
import LogoImage from "../assets/gamewin.png";
import PrizesImage from "../assets/prizes-won.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SubscriptionPage = () => {
  const [showModal, setShowModal] = useState(false);

  const prizes = [
    { position: "1st", prize: "R50" },
    { position: "2nd", prize: "R30" },
    { position: "3rd", prize: "R20" },
    { position: "4th - 10th", prize: "R5" },
  ];

 

  return (
    <div className="min-h-screen flex flex-col px-6 mb-2 bg-gray-100">
      <a href="/">
        <img src={LogoImage} alt="App Logo" className="my-4 w-10 h-10" />
      </a>
      <div>
        <FontAwesomeIcon
          icon={faHandPaper}
          size="2x"
          className="text-purple-600"
          style={{ transform: "rotate(45deg)" }}
        />

        <span className="font-mochiy text-[16px] font-normal px-2">
          Hello!!!
        </span>
      </div>
      {/* <img src={PrizesImage} alt="Prizes" className="my-10 md:w-[375px] mx-auto" /> */}

      <div className="relative my-10 md:w-[375px] mx-auto">
        <img
          src={PrizesImage}
          alt="Prizes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
      </div>

      <div className="bg-white shadow-md rounded-md p-6 my-6 md:w-[375px] mx-auto">
        <h2 className="text-lg font-bold font-mochiy text-center mb-4">
          Prizes
        </h2>
        <table className="table-auto w-full text-left border-collapse">
          <thead className="mx-auto">
            <tr>
              <th className="border-b  py-2 px-4 font-semibold text-gray-700 font-mochiy">
                Position
              </th>
              <th className="border-b   py-2 px-4 font-semibold text-gray-700 font-mochiy">
                Prize
              </th>
            </tr>
          </thead>
          <tbody>
            {prizes.map((item, index) => (
              <tr key={index} className="">
                <td className="py-2 px-4 text-[14px] text-gray-600 font-mochiy">
                  {item.position}
                </td>
                <td className="py-2 px-4 text-[14px] text-gray-600 font-mochiy">
                  {item.prize}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[14px] font-mochiy font-normal text-center">
        PLAY TO WIN AMAZING PRIZES, NOW!
      </p>
      <button
        className="bg-gradient-to-r from-purple-500 to-blue-500 font-mochiy text-white rounded-[28px] px-8 py-3.5 my-8 md:mx-auto md:w-1/3"
        onClick={() => setShowModal(true)}
      >
        Subscribe to Plan
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md p-6 w-80 py-14">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[14px] font-normal font-mochiy">
                Subscribe to a plan to proceed
              </h2>
              <button
                className="text-gray-600"
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>
            </div>
            <label className="block text-[12px] font-mochiy font-thin text-[#484848b3] mb-2">
              Select Subscription Plan
            </label>
            <select className="w-full border rounded-full outline-none font-mochiy text-[12px] p-2 mb-8">
              <option value="r5 font-mochiy text-[12px]">R5/day</option>
              <option value="r15 font-mochiy text-[12px]">R15/week</option>
            </select>
            <button
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-mochiy rounded-full px-8 py-3.5 w-full"
              onClick={() => {
                window.location.href =
                  "http://optin.telkomsdp.co.za/service/30?ext_ref=123456776";
              }}
            >
              Subscribe Now
            </button>

            {/* <Link
              to="/login"
              className="text-purple-600 font-mochiy text-[14px] m-[75px] text-center font-bold hover:underline"
            >
              Back to Login
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;
