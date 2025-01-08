import { createContext, useState, useContext, useEffect } from "react";
import {
  getLeaderboardStanding,
  updateLeaderboardScore,
} from "../api/apiService";
import AuthContext from "../Context/AuthContext";
import ProfileContext from "../Context/ProfileContext";
import SubscriptionContext from "../Context/SubscriptionContext";

const obscureMSISDN = (msisdn) => {
  if (!msisdn || msisdn.length < 5) return msisdn;

  const visibleStart = msisdn.slice(0, 3);
  const visibleEnd = msisdn.slice(-3);
  const obscuredPart = "*".repeat(msisdn.length - 6);

  return `${visibleStart}${obscuredPart}${visibleEnd}`;
};

const LeaderboardContext = createContext();

export const LeaderboardProvider = ({ children }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updateStatus, setUpdateStatus] = useState({
    isSuccessful: false,
    message: "",
  });
  const { authData } = useContext(AuthContext);
  const { profile } = useContext(ProfileContext);
  const [gameScore, setGameScore] = useState(0);
  const { msisdn } = useContext(SubscriptionContext);

  useEffect(() => {
    if (msisdn) {
 
      fetchLeaderboard(msisdn);

      updateLeaderboard(msisdn, gameScore);
    }
  }, [msisdn, gameScore]);

  const fetchLeaderboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getLeaderboardStanding(msisdn);

      if (response?.isSuccessful) {

        setLeaderboard(response.data || []);
      } else {
        setError("Failed to load leaderboard.");
      }
    } catch (error) {
      setError("Error fetching leaderboard.");
      console.error("Leaderboard fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeaderboard = async (msisdn, gameScore) => {
    setLoading(true);
    setError(null);
    try {
      const response = await updateLeaderboardScore(msisdn, gameScore);
      if (response?.isSuccessful) {
        setUpdateStatus({
          isSuccessful: response.isSuccessful,
          message: response.message,
        });
      } else {
        setError("Failed to update leaderboard score.");
        setUpdateStatus({ isSuccessful: false, message: "Update failed." });
      }
    } catch (error) {
      setError("Failed to update leaderboard");
      console.error("Leaderboard update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LeaderboardContext.Provider
      value={{
        leaderboard,
        updateStatus,
        fetchLeaderboard,
        updateLeaderboard,
        obscureMSISDN,
        msisdn,
        loading,
        error,
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};

export default LeaderboardContext;
