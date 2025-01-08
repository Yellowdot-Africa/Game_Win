import { createContext, useState, useContext, useEffect } from "react";
import { authenticate } from "../api/apiService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isTokenExpired = (expiryTime) => {
    const currentTime = new Date().getTime();
    return currentTime >= expiryTime;
  };

  const login = async () => {
    // setLoading(true);
    setError(null);
    try {
      if (authData && !isTokenExpired(authData.tokenExpiry)) {
        return;
      }

      const response = await authenticate();
      setAuthData({
        token: response.token,
        tokenExpiry: response.expiryTime,
        username: response.username,
      });
    } catch (error) {
      setError(true);

      console.error("Authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    setAuthData(null);
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <AuthContext.Provider value={{ authData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
