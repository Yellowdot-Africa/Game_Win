import React, { useState, useContext } from "react";
import PlusIcon from "../assets/Icons/plus.png";
import ProfileContext from "../Context/ProfileContext";

const NicknameModal = ({ onClose }) => {
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [tempNickname, setTempNickname] = useState("");

  const { profile, nickname, setNickname, saveUserSubProfile } =
    useContext(ProfileContext);

  const handleEditNicknameClick = () => {
    setIsEditingNickname(true);
    setTempNickname(nickname || "");
  };

  const handleNicknameChange = (event) => {
    setTempNickname(event.target.value);
  };

  const handleSaveNickname = async () => {
    if (!profile || tempNickname === profile.nickname) {
      setIsEditingNickname(false);
      return;
    }

    const updatedProfile = { ...profile, nickname: tempNickname };
    try {
      await saveUserSubProfile(updatedProfile);
      setNickname(tempNickname);
      localStorage.setItem("nickname", tempNickname);
      setIsEditingNickname(false);
    } catch (error) {
      console.error("Error saving nickname:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditingNickname(false);
    setTempNickname(nickname || "");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#070E3C] w-full rounded-[20px] border border-[#16D1F9] shadow-box-shadow p-6 max-w-md mx-4 text-center">
        {!isEditingNickname && (
          <div className="flex items-center justify-between border-b border-b-white ">
            <p className="my-3 text-center text-[16px] mx-auto font-alien font-normal leading-[19.2px]">
              Select Nickname
            </p>

            <button onClick={onClose} className="text-white text-xl">
              &times;
            </button>
          </div>
        )}

        <div className="flex items-center justify-between my-[22px]">
          {!isEditingNickname ? (
            <div className="flex items-center justify-between w-full">
              <button
                onClick={handleEditNicknameClick}
                className="flex items-center justify-center w-[53px] h-[53px] bg-[#D9D9D9] rounded-full shadow-shadow-6"
              >
                <img src={PlusIcon} alt="Edit Nickname" className="w-10 h-10" />
              </button>
             
              <div className="flex flex-col justify-center -ml-[100px]">
              
               <p className="font-alien text-[#EEEEEE] font-normal text-[14px] leading-[14.4px]">
                {nickname || "No Nickname Set"}
              </p>
                <p className="font-alien text-[#EEEEEE] font-normal text-[12px] leading-[14.4px] mt-[8px]">
                  {nickname ? "Selected" : "Not Set"}
                </p>
              </div>
              <p
                className="font-alien text-[#EEEEEE] font-normal text-[12px] leading-[14.4px] mt-[8px] cursor-pointer"
                onClick={handleEditNicknameClick}
              >
                Edit
              </p>
            </div>
          ) : (
            <div className="w-full">
              <p className="text-[16px] font-alien font-normal text-[#FFFFFF] mb-8 border-b">
                Select Nickname
              </p>

              <input
                type="text"
                value={tempNickname}
                onChange={handleNicknameChange}
                className="w-full px-4 py-2 rounded-lg bg-[#E3E4E31A] text-[#FFFFFF] outline-none"
                placeholder="Enter Nickname"
              />
              <div className="flex flex-col items-center justify-between mt-4">
                <button
                  onClick={handleSaveNickname}
                  className="bg-btn-background w-full text-[14px] font-alien font-bold leading-[16.8px] text-center text-white px-4 py-4 rounded-[24px] my-8"
                  // className="px-6 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className=" font-alien font-bold leading-[16.8px] text-center text-[14px]"
                  // className="px-6 py-2 bg-gray-500 text-white rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NicknameModal;
