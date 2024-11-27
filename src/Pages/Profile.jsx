import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import BgImage from "../assets/bg.png";
import ProfileIcon from "../assets/user-icon.png";
import PlusIcon from "../assets/plus.png";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.png";
import Avatar5 from "../assets/avatar5.png";
import ProfileContext from "../Context/ProfileContext";

const Profile = () => {
  const [isAddingAvatar, setIsAddingAvatar] = useState(false);
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
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
    // createProfile,
    operationStatus,
    msisdn,
  } = useContext(ProfileContext);
  const avatarSrc = selectedAvatar || ProfileIcon;
  const [avatarForPlusIcon, setAvatarForPlusIcon] = useState(null);
  const [avatarList] = useState([Avatar1, Avatar2, Avatar3, Avatar4, Avatar5]);
  const [token, setToken] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (msisdn) {
      fetchProfile(msisdn);
    }
  }, [msisdn]);

  useEffect(() => {
    console.log("ProfilePage Profile:", profile);
  }, [profile]);
  

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedAvatar = localStorage.getItem("avatar");

    if (storedNickname) setNickname(storedNickname);
    if (storedAvatar) setAvatar(parseInt(storedAvatar));
  }, []);



  const handleAddAvatarClick = () => {
    setIsAddingAvatar(true);
  };

  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
    setAvatarForPlusIcon(avatar);
  };

  const handleCancelAddAvatar = () => {
    setIsAddingAvatar(false);
    setAvatarForPlusIcon(selectedAvatar);
  };

  // const handleSaveAvatar = async () => {
  //   if (selectedAvatar && profile) {
  //     const avatarIndex = avatarList.indexOf(selectedAvatar) + 1;
  //     const updatedProfile = { ...profile, avatar: avatarIndex };
  //     await saveUserSubProfile(updatedProfile);
  //     localStorage.setItem("avatar", avatar);

  //     setAvatar(avatarIndex);
  //   }
  //   setIsAddingAvatar(false);
  // };

  const handleSaveAvatar = async () => {
    if (selectedAvatar && profile) {
      const avatarIndex = avatarList.indexOf(selectedAvatar) + 1;
      const updatedProfile = { ...profile, avatar: avatarIndex };
      
      try {
        await saveUserSubProfile(updatedProfile);
        localStorage.setItem("avatar", avatarIndex); // Correct the stored avatar index
        setAvatar(avatarIndex);
        fetchProfile(msisdn); // Re-fetch the profile to ensure it's up to date
      } catch (error) {
        console.error("Error saving avatar:", error);
      }
    }
    setIsAddingAvatar(false);
  };

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
  

  // const handleSaveNickname = async () => {
  //   if (!profile) {
  //     console.error("Profile is null or undefined");
  //     return;
  //   }
  
  //   if (nickname !== profile.nickname) {
  //     const updatedProfile = { ...profile, nickname };
  //     await saveUserSubProfile(updatedProfile);
  //   }
  //   setIsEditingNickname(false);
  // };
  

  // const handleSaveNickname = async () => {
  //   if (nickname !== profile.nickname) {

  //     const updatedProfile = { ...profile, nickname };
  //     await createProfile(updatedProfile);
  //     // localStorage.setItem("nickname", nickname);

  //   }
  //   setIsEditingNickname(false);
  // };

  const handleCancelAddNickname = () => {
    setIsEditingNickname(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <img
        src={BgImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center">
        <div className="bg-[#004ADA99] w-[237px] h-[35px] flex items-center justify-center">
          <p className="text-center font-[400] font-mochiy text-[12px] text-white leading-[17.38px]">
            Profile
          </p>
        </div>
        <div
          className="relative z-10 bg-white rounded-[10px] p-6 w-[343px] h-[460px]"
          style={{
            boxShadow: `
              22px 35px 91px 0px #0000001A,
              89px 139px 165px 0px #00000017,
              200px 312px 223px 0px #0000000D,
              355px 556px 264px 0px #00000003,
              555px 868px 288px 0px #00000000
            `,
          }}
        >
          <div className="flex flex-col items-center mb-[35px]">
            <div className="w-[56px] h-[48px] rounded-full border bg-white border-white flex items-center justify-center shadow-shadow-6">
              <img
                // src={selectedAvatar || ProfileIcon}
                src={selectedAvatar || avatarList[avatar - 1] || ProfileIcon} // Display selected avatar or fallback
                alt="Profile"
                className="w-[56px] h-[56px]"
              />
            </div>
            {(isAddingAvatar || isEditingNickname) && (
              <div className="flex justify-between gap-[170px] -mt-[30px]">
                <p
                  className="text-[#000000] font-[400] font-mochiy leading-[17.38px] text-[12px] cursor-pointer"
                  onClick={
                    isAddingAvatar
                      ? handleCancelAddAvatar
                      : handleCancelAddNickname
                  }
                >
                  Cancel
                </p>
                <p
                  className="text-[#004ADA] font-[400] font-mochiy leading-[17.38px] text-[12px] cursor-pointer"
                  onClick={
                    isAddingAvatar ? handleSaveAvatar : handleSaveNickname
                  }
                >
                  Save
                </p>
              </div>
            )}
          </div>

          {isAddingAvatar ? (
            <>
              <div className="flex justify-center pt-[19px] mb-4">
                <p className="text-[#000000] font-mochiy text-[14px]">
                  Select Avatar
                </p>
              </div>
              <div className="flex gap-2 justify-center mb-4">
                {avatarList.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectAvatar(avatar)}
                    className={`relative p-1 border-[2px] rounded-[50px] ${
                      selectedAvatar === avatar
                        ? "border-[#7B39FF]"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={avatar}
                      // src={selectedAvatar || avatarList[avatar - 1] || ProfileIcon} // Display selected avatar or fallback

                      // src={profile?.avatar || avatar}
                      // src={avatarSrc}
                      alt={`Avatar ${index + 1}`}
                      className="w-12 h-12"
                    />
                    {selectedAvatar === avatar && (
                      <div className="absolute bottom-0 right-0 bg-[#7B39FF] rounded-[50px] w-4 h-4 flex items-center justify-center">
                        <img
                          src={PlusIcon}
                          alt="Selected"
                          className="w-2 h-2 text-white"
                        />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </>
          ) : isEditingNickname ? (
            <>
              <div className="flex justify-center pt-[19px] mb-4">
                <p className="text-[#000000] font-mochiy text-[14px]">
                  Select Nickname
                </p>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-between mb-[18px]">
              <button
                onClick={handleAddAvatarClick}
                className="flex items-center justify-center w-[53px] h-[53px] bg-[#D9D9D9] rounded-full shadow-shadow-6"
              >
                <img
                  // src={avatarForPlusIcon || PlusIcon}
                  // src={profile?.avatar || PlusIcon}
                  src={selectedAvatar || avatarList[avatar - 1] || ProfileIcon} // Display selected avatar or fallback
                  // src={avatarSrc}
                  alt="Add Avatar"
                  className="w-[100%] h-[100%]"
                />
              </button>
              <div className="flex flex-col justify-center -ml-[100px]">
                <p className="font-[400] font-mochiy text-[14px] text-[#000000] leading-[20.27px] pb-[7px]">
                  Avatar
                </p>
                <p className="text-[#00000066] font-mochiy font-[400] leading-[26.06px] text-[18px]">
                  {selectedAvatar ? "Selected" : "Not Set"}
                </p>
              </div>
              <p
                className="text-[#214DC5] font-[400] font-mochiy leading-[17.38px] text-[12px] cursor-pointer"
                onClick={handleAddAvatarClick}
              >
                Edit
              </p>
            </div>
          )}

          <hr className="w-[333px] -mx-[18px]" />

          <div className="flex items-center justify-between my-[18px]">
            {!isEditingNickname ? (
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={handleEditNicknameClick}
                  className="flex items-center justify-center w-[53px] h-[53px] bg-[#D9D9D9] rounded-full shadow-shadow-6"
                >
                  <img src={PlusIcon} alt="Edit Nickname" className="w-8 h-8" />
                </button>
                <div className="flex flex-col justify-center -ml-[100px]">
                  <p className="font-[400] font-mochiy text-[14px] text-[#000000] leading-[20.27px] pb-[7px]">
                    {/* Nickname */}
                    {profile?.nickname || "Nickname"}
                  </p>
                  <p className="text-[#00000066] font-mochiy font-[400] leading-[26.06px] text-[18px]">
                    {nickname ? "Selected" : "Not Set"}
                  </p>
                </div>
                <p
                  className="text-[#214DC5] font-[400] font-mochiy leading-[17.38px] text-[12px] cursor-pointer"
                  onClick={handleEditNicknameClick}
                >
                  Edit
                </p>
              </div>
            ) : (
              <div className="flex flex-row items-center mb-4">
                <div className="">
                  <button
                    onClick={handleEditNicknameClick}
                    className="flex items-center justify-center w-[53px] h-[53px] bg-[#D9D9D9] rounded-full shadow-shadow-6"
                  >
                    <img
                      src={PlusIcon}
                      alt="Edit Nickname"
                      className="w-8 h-8"
                    />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Enter Nickname"
                  // value={nickname}
                  onChange={handleNicknameChange}
                  className="border-b-[3px] -mb-[30px] pl-[15px] pb-[10px] border-gray-400 outline-none text-[#000000] font-[400] font-mochiy text-[14px] text-left leading-[20.27px]"
                />
              </div>
            )}
          </div>

          <hr className="w-[333px] -mx-[18px]" />

          <div className="rounded-[250px] bg-white flex items-center justify-center border-t-0 border border-[#0000001A] mt-[40px] shadow-shadow-6">
            <Link
              to="/home"
              className="w-[225px] h-[50px] flex items-center justify-center text-center"
            >
              <button className="text-[#000000] font-mochiy text-center">
                BACK TO HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;










