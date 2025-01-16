import axios from "axios";

const BASE_URL = "https://fastestfingers.runasp.net/api/FastestFingers";

// Configure Axios for all requests
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let globalTokenData = null;
let authenticationPromise = null;

export const authenticate = async () => {
  if (globalTokenData && globalTokenData.expiryTime > new Date().getTime()) {
    return globalTokenData;
  }

  if (!authenticationPromise) {
    authenticationPromise = apiClient
      .post("/Authorization/login", {
        username: "games_sa_gamewin",
        password: "password",
      })
      .then((response) => {
        const { jwtToken, username, tokenExpiry } = response.data.data;
        const expiryTime = new Date().getTime() + tokenExpiry * 1000;

        globalTokenData = { token: jwtToken, expiryTime, username };
        authenticationPromise = null; // Reset promise after completion
        return globalTokenData;
      })
      .catch((error) => {
        authenticationPromise = null; // Reset on error too
        throw error;
      });
  }

  return authenticationPromise;
};

// get subscriberprofile API
export const getSubscriberProfile = async (msisdn) => {
  try {
    if (!globalTokenData || !globalTokenData.token) {
      await authenticate(); // this authenticate and set the global token if it's not available
    }

    const response = await apiClient.get(
      `/Profile/GetUserProfile?msisdn=${msisdn}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${globalTokenData.token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

// Create Subscriber Profile
export const saveSubscriberProfile = async ({
  msisdn,
  nickname,
  avatar,
  bank,
  accountNumber,
  accountName,
}) => {
  try {
    if (!globalTokenData || !globalTokenData.token) {
      await authenticate();
    }

    const profileData = {
      msisdn,
      nickname,
      avatar,
      bank,
      accountNumber,
      accountName,
    };
    console.log("Request Payload:", profileData);

    const response = await apiClient.post(
      "/Profile/SaveUserProfile",

      profileData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${globalTokenData.token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error saving subscriber profile:", error);
    throw error;
  }
};

// LEADERBOARD API
export const getLeaderboardStanding = async (msisdn) => {
  try {
    if (!globalTokenData || !globalTokenData.token) {
      await authenticate();
    }
    const response = await apiClient.get(
      `/Leaderboard/GetLeaderboardWithSubscriber?msisdn=${msisdn}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${globalTokenData.token}`,
        },
      }
    );
    console.log("Leaderboard data received:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};

// Update Leaderboard Score API
export const updateLeaderboardScore = async (msisdn, gameScore) => {
  try {
    if (!globalTokenData || !globalTokenData.token) {
      await authenticate();
    }
    const response = await apiClient.post(
      "/Leaderboard/UpdateLeaderboardScore",
      { msisdn, gameScore },

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${globalTokenData.token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating leaderboard score:", error);
    throw error;
  }
};

// get game questions
export const getGameQuestions = async (count, msisdn) => {
  try {
    if (!globalTokenData || !globalTokenData.token) {
      await authenticate();
    }
    const response = await apiClient.get(
      `/GamePlay/GetGameQuestions?count=${count}&msisdn=${msisdn}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${globalTokenData.token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching game questions:", error);
    throw error;
  }
};

// submit gameplay

export const submitGamePlay = async (payload) => {
  try {
    if (!globalTokenData || !globalTokenData.token) {
      await authenticate();
    }
    const response = await apiClient.post("GamePlay/SubmitGamePlay", payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${globalTokenData.token}`,
      },
    });
    console.log("Response data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error submitting gameplay:", error);
    return {
      isSuccessful: false,
      message: "Error occurred during gameplay submission",
      data: null,
    };
  }
};

// check subscription
// export const checkSubscriptionStatus = async (msisdn, serviceId) => {
//   try {
//     if (!globalTokenData || !globalTokenData.token) {
//       await authenticate();
//     }
//     const response = await apiClient.get(
//       `/Subscription/CheckStatus?msisdn=${msisdn}&serviceId=${serviceId}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${globalTokenData.token}`,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Error checking subscription status:", error);
//     throw error;
//   }
// };
