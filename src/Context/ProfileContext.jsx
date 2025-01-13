import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { getSubscriberProfile, saveSubscriberProfile } from "../api/apiService";
import AuthContext from "../Context/AuthContext";
import SubscriptionContext from "../Context/SubscriptionContext";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nickname, setNickname] = useState("GW");
  const [avatar, setAvatar] = useState(1);
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [msisdn, setMsisdn] = useState(() => {
    return localStorage.getItem("cli") || "";
  });

  const [operationStatus, setOperationStatus] = useState({
    isSuccessful: false,
    message: "",
  });
  const { authData } = useContext(AuthContext);

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
    // Save profile to localStorage
    localStorage.setItem("profile", JSON.stringify(newProfile));
  };

  const fetchProfile = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const response = await getSubscriberProfile(msisdn);
      if (response?.isSuccessful) {
        updateProfile(response.data);

        setAvatar(response.data.avatar);
        setSelectedAvatar(avatarList[response.data.avatar - 1]);
      } else {
        throw new Error("Profile not found, attempting to create profile.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.warn("Profile not found. Creating a new profile...");

        try {
          const createResponse = await saveUserSubProfile({
            msisdn,
            nickname,
            avatar,
            bank,
            accountNumber,
            accountName,
          });
          if (createResponse.isSuccessful) {
            console.log("Profile saved successfully:", createResponse.data);
            setLoading(true);
            setCreateLoading(true);
            setProfile(createResponse.data);
            setAvatar(createResponse.data.avatar);
          } else {
            setError("Failed to save profile: " + createResponse.message);
          }
        } catch (createError) {
          console.error("Error saving profile:", createError);
          setError("Error saving profile");
        }
      }
    } finally {
      setLoading(false);
    }
  }, [loading, msisdn]);

  const saveUserSubProfile = async (profileData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await saveSubscriberProfile(profileData);
      if (response.isSuccessful) {
        setOperationStatus({
          isSuccessful: response.isSuccessful,
          message: response.message,
        });
        setProfile(response.data);
        setAvatar(response.data.avatar);
        setNickname(response.data.nickname);
      } else {
        setError("Failed to save profile: " + response.message);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      setError("Error saving profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        loading,
        error,
        nickname,
        setNickname,
        avatar,
        setAvatar,
        operationStatus,
        fetchProfile,
        saveUserSubProfile,
        msisdn,
        setMsisdn,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
