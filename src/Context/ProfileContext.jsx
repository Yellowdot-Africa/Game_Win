import { createContext, useState, useEffect, useContext } from "react";
import {
  getSubscriberProfile,
  createSubscriberProfile,
} from "../api/apiService";
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
  const { msisdn } = useContext(SubscriptionContext);

  const [operationStatus, setOperationStatus] = useState({
    isSuccessful: false,
    message: "",
  });
  const { authData } = useContext(AuthContext);

  useEffect(() => {
    if (createLoading) {
      setLoading(true);
      setError(null);

      getSubscriberProfile(msisdn)
        .then((response) => {
          if (response.isSuccessful) {
            console.log("Profile found:", response.data);
            setProfile(response.data);
          } else {
            throw new Error("Profile not found, attempting to create profile.");
          }
        })
        .catch((error) => {
          console.error("Error creating profile:", error);
          setError("Error creating profile");
        })
        .finally(() => {
          setLoading(false);
          setCreateLoading(false);
        });
    }
  }, [createLoading]);

  const fetchProfile = async (msisdn) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getSubscriberProfile(msisdn);
      if (response?.isSuccessful) {
        setProfile(response.data);
        setAvatar(response.data.avatar);
        setSelectedAvatar(avatarList[response.data.avatar - 1]);
      } else {
        throw new Error("Profile not found, attempting to create profile.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.warn("Profile not found. Creating a new profile...");

        try {
          const createResponse = await createProfile({
            msisdn,
            nickname,
            avatar,
            bank,
            accountNumber,
            accountName,
          });
          if (createResponse.isSuccessful) {
            console.log("Profile created successfully:", createResponse.data);
            setLoading(true);
            setCreateLoading(true);
            setProfile(createResponse.data);
            setAvatar(createResponse.data.avatar);
          } else {
            setError("Failed to create profile: " + createResponse.message);
          }
        } catch (createError) {
          console.error("Error creating profile:", createError);
          setError("Error creating profile");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const createProfile = async (profileData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await createSubscriberProfile(profileData);
      if (response.isSuccessful) {
        setOperationStatus({
          isSuccessful: response.isSuccessful,
          message: response.message,
        });
        setProfile(response.data);
        setAvatar(response.data.avatar);
      } else {
        setError("Failed to create profile: " + response.message);
      }
    } catch (error) {
      console.error("Error creating profile:", error);
      setError("Error creating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loading,
        error,
        nickname,
        setNickname,
        avatar,
        setAvatar,
        operationStatus,
        fetchProfile,
        createProfile,
        msisdn,
        // updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
