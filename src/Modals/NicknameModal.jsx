
import React, { useState, useContext } from "react";
import PlusIcon from "../assets/Icons/plus.png";
// import PlusIcon from "../assets/Icons/plus-icon.png";
import ProfileContext from "../Context/ProfileContext";

const NicknameModal = ({onClose}) => {
  const [isEditingNickname, setIsEditingNickname] = useState(false);

  const {
    profile,
    nickname,
    setNickname,
    fetchProfile,
    saveUserSubProfile,
  } = useContext(ProfileContext);

  const handleEditNicknameClick = () => {
    setIsEditingNickname(true);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSaveNickname = async () => {
    if (!profile || nickname === profile.nickname) return;

    const updatedProfile = { ...profile, nickname };
    try {
      await saveUserSubProfile(updatedProfile);
      localStorage.setItem("nickname", nickname);
      fetchProfile();
      setIsEditingNickname(false);
     } catch (error) {
      console.error("Error saving nickname:", error);
    }
  };

  const handleCancelAddNickname = () => {
    setIsEditingNickname(false);
    onClose(); 
    console.log("canceling");
  };

  return (
    <>
     {/* {isModalVisible && (  */}
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-[#070E3C] rounded-[20px] border border-[#16D1F9] shadow-box-shadow p-6 max-w-md mx-4 text-center">
        <div className="md:w-5/6 mx-auto text-center relative">

        {/* <p className="text-[#000000] font-mochiy text-[14px]"> */}
        <p className="my-3 text-center text-[16px] font-alien font-normal leading-[19.2px]">

          Select Nickname
        </p>
      </div>
      <hr className="w-[333px] -mx-[18px]" />

      <div className="flex items-center justify-between my-[18px]">
        {!isEditingNickname ? (
          <div className="flex items-center justify-between w-full">
            <button
              onClick={handleEditNicknameClick}
              className="flex items-center justify-center w-[53px] h-[53px] bg-[#D9D9D9] rounded-full shadow-shadow-6"
            >
              <img src={PlusIcon} alt="Edit Nickname" className="w-10 h-10 " />
            </button>
            <div className="flex flex-col justify-center -ml-[100px]">
            <p className="font-alien text-[#EEEEEE] font-normal text-[14px] leading-[14.4px]">
                {/* Nickname */}
                {profile?.nickname || "Nickname"}
              </p>
              <p className="font-alien text-[#EEEEEE] font-normal text-[12px] leading-[14.4px] mt-[8px]">
                {nickname ? "Selected" : "Not Set"}
              </p>
            </div>
            <p className="font-alien text-[#EEEEEE] font-normal text-[12px] leading-[14.4px] mt-[8px] cursor-pointer"

              onClick={handleEditNicknameClick}
            >
              Edit
            </p>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-[20px] mb-4">
            <div className="">
              <button
                onClick={handleEditNicknameClick}
                className="flex items-center justify-center w-[53px] h-[53px] bg-[#D9D9D9] rounded-full shadow-shadow-6"
              >
                <img src={PlusIcon} alt="Edit Nickname" className="w-10 h-10" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter Nickname"
              // value={nickname}
              onChange={handleNicknameChange}
              className="border-b-[3px] mb-[0px] bg-transparent pl-[18px] py-[10px] border-gray-400 outline-none text-[#EEEEEE] font-normal font-alien text-[16px] text-left leading-[14.4px]"
            />
          </div>
          
        )}
        
      </div>
      <button
            onClick={handleSaveNickname}
            className="bg-btn-background w-full text-[14px] font-alien font-bold leading-[16.8px] text-center text-white px-4 py-4 rounded-[24px] my-8"
          >
            Save
          </button>
           <button
            onClick={handleCancelAddNickname }
            className=" font-alien font-bold leading-[16.8px] text-center text-[14px]"
          >
           Cancel
          </button>
        
      </div>
      </div>
        {/* //   )} */}
    </>
  );
};

export default NicknameModal;



// import React, { useState, useContext } from "react";
// import PlusIcon from "../assets/Icons/plus.png";
// import ProfileContext from "../Context/ProfileContext";

// const NicknameModal = ({ onClose }) => {
//   const [isEditingNickname, setIsEditingNickname] = useState(false);
//   const [isNicknameSaved, setIsNicknameSaved] = useState(false);

//   const {
//     profile,
//     nickname,
//     setNickname,
//     fetchProfile,
//     saveUserSubProfile,
//   } = useContext(ProfileContext);

//   const handleEditNicknameClick = () => {
//     setIsEditingNickname(true);
//     setIsNicknameSaved(false); 
//   };

//   const handleNicknameChange = (event) => {
//     setNickname(event.target.value);
//   };

//   const handleSaveNickname = async () => {
//     if (!profile || nickname === profile.nickname) return;

//     const updatedProfile = { ...profile, nickname };
//     try {
//       await saveUserSubProfile(updatedProfile);
//       localStorage.setItem("nickname", nickname);
//       fetchProfile();
//       setIsEditingNickname(false);
//       setIsNicknameSaved(true); // Indicate nickname was successfully saved
//     } catch (error) {
//       console.error("Error saving nickname:", error);
//     }
//   };

//   const handleCancelAddNickname = () => {
//     setIsEditingNickname(false);
//     setIsNicknameSaved(false); // Reset saved state when canceled
//     onClose();
//   };

//   return (
//     <>
//       <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//         <div className="bg-[#070E3C] rounded-[20px] border border-[#16D1F9] shadow-box-shadow p-6 max-w-md mx-4 text-center">
//           <div className="md:w-5/6 mx-auto flex items-center justify-center relative  text-center">
//             <p className="my-3 text-center text-[16px] font-alien font-normal leading-[19.2px]">
//               Select Nickname
//             </p>
//             <div className="absolute right-1">
//             <button
//               onClick={handleCancelAddNickname}
//               className="text-[#EEEEEE] font-alien"
//             >
//               ✖
//             </button>
//             </div>
//           </div>
//           <hr className="w-[333px] -mx-[18px]" />

//           <div className="flex items-center justify-between my-[18px]">
//             {!isEditingNickname ? (
//               <div className="flex items-center justify-between w-full">
//                 <button
//                   onClick={handleEditNicknameClick}
//                   className="flex items-center justify-center w-[53px] h-[53px] bg-[#D9D9D9] rounded-full shadow-shadow-6"
//                 >
//                   <img
//                     src={PlusIcon}
//                     alt="Edit Nickname"
//                     className="w-10 h-10"
//                   />
//                 </button>
//                 <div className="flex flex-col justify-center -ml-[100px]">
//                   <p className="font-alien text-[#EEEEEE] font-normal text-[14px] leading-[14.4px]">
//                     {profile?.nickname || "Nickname"}
//                   </p>
//                   <p className="font-alien text-[#EEEEEE] font-normal text-[12px] leading-[14.4px] mt-[8px]">
//                     {nickname ? "Selected" : "Not Set"}
//                   </p>
//                 </div>
//                 {!isNicknameSaved && (
//                   <p
//                     className="font-alien text-[#EEEEEE] font-normal text-[12px] leading-[14.4px] mt-[8px] cursor-pointer"
//                     onClick={handleEditNicknameClick}
//                   >
//                     Edit
//                   </p>
//                 )}
//               </div>
//             ) : (
//               <div className="flex flex-row items-center gap-[20px] mb-4">
//                 <div className="">
//                   <button
//                     onClick={handleEditNicknameClick}
//                     className="flex items-center justify-center w-[53px] h-[53px] bg-[#D9D9D9] rounded-full shadow-shadow-6"
//                   >
//                     <img
//                       src={PlusIcon}
//                       alt="Edit Nickname"
//                       className="w-10 h-10"
//                     />
//                   </button>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Enter Nickname"
//                   value={nickname}
//                   onChange={handleNicknameChange}
//                   className="border-b-[3px] mb-[0px] bg-transparent pl-[18px] py-[10px] border-gray-400 outline-none text-[#EEEEEE] font-normal font-alien text-[16px] text-left leading-[14.4px]"
//                 />
//               </div>
//             )}
//           </div>

//           {isEditingNickname && (
//             <>
//               <button
//                 onClick={handleSaveNickname}
//                 className="bg-btn-background w-full text-[14px] font-alien font-bold leading-[16.8px] text-center text-white px-4 py-4 rounded-[24px] my-8"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={handleCancelAddNickname}
//                 className="font-alien font-bold leading-[16.8px] text-center text-[14px]"
//               >
//                 Cancel
//               </button>
//             </>
//           )}

        
//         </div>
//       </div>
//     </>
//   );
// };

// export default NicknameModal;



