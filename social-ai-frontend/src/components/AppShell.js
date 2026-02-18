import React, { useState } from "react";
import TopNavigationBar from "./TopNavigationBar";
import AppRoutes from "./AppRoutes";

import { TOKEN_KEY } from "../constants";

function AppShell() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(TOKEN_KEY) ? true : false
  );

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setIsLoggedIn(false);
  };

  const loggedIn = (token) => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <TopNavigationBar isLoggedIn={isLoggedIn} handleLogout={logout} />
      <AppRoutes isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn} />
    </div>
  );
}

export default AppShell;
