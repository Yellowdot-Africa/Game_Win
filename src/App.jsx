import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import HomePage from "./Pages/HomePage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import UserProfile from "./Pages/UserProfile";
import Prizes from "./Pages/Prizes";
import GamePage from "./Pages/GamePage";
import TnCPage from "./Pages/TnCPage";
import FAQ from "./Pages/FAQ.jsx";
import RedirectPage from "./Pages/RedirectPage";
import SubscriptionPage from "./Pages/SubscriptionPage";
import SubscriptionGuard from "./Components/SubscriptionGuard";
import SubscriptionExpiredPage from "./Pages/SubscriptionExpiredPage";
import NotFoundPage from "./Pages/NotFoundPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/redirect",
    element: <RedirectPage />,
  },
  {
    path: "/home",
    // element: <HomePage />,
    element: (
      <SubscriptionGuard>
        <HomePage />
      </SubscriptionGuard>
    ),
  },
  {
    path: "/game-play",
    // element: <GamePage />,
    element: (
      <SubscriptionGuard>
        <GamePage />
      </SubscriptionGuard>
    ),
  },
  {
    path: "/leaderboard",
    // element: <LeaderboardPage />,
    element: (
      <SubscriptionGuard>
        <LeaderboardPage />
      </SubscriptionGuard>
    ),
  },
  {
    path: "/user-profile",
    // element: <UserProfile />,
    element: (
      <SubscriptionGuard>
        <UserProfile />
      </SubscriptionGuard>
    ),
  },
  {
    path: "/prizes",
    element: <Prizes />,
  },
  {
    path: "subscribe",
    element: <SubscriptionPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TnCPage />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/subscription-expired",
    element: <SubscriptionExpiredPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },

  {
    future: {
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
