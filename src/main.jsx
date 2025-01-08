import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./Context/AuthContext";
import { ProfileProvider } from "./Context/ProfileContext";
import { LeaderboardProvider } from "./Context/LeaderboardContext";
import { SubscriptionProvider } from "./Context/SubscriptionContext";
import { GameProvider } from "./Context/GameContext";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SubscriptionProvider>
        <ProfileProvider>
          <LeaderboardProvider>
            <GameProvider count={10}>
              <App />
            </GameProvider>
          </LeaderboardProvider>
        </ProfileProvider>
      </SubscriptionProvider>
    </AuthProvider>
  </StrictMode>
);
