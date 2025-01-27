import { NavLink, Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import SmallSidebar from "../ui/SmallSidebar";
import BigSidebar from "../ui/BigSidebar";
import Navbar from "../ui/Navbar";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { checkDefaultTheme } from "../App";

const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const user = { name: "youness" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDark, setIsDark] = useState(checkDefaultTheme);

  function toggleDarkMode() {
    localStorage.setItem("darkTheme", isDark);
    setIsDark((x) => !x);
    document.body.classList.toggle("dark-theme", isDark);
  }

  function toggleSidebar() {
    setShowSidebar((x) => !x);
  }

  async function logoutUser() {}

  return (
    <DashboardContext.Provider
      value={{
        toggleDarkMode,
        toggleSidebar,
        logoutUser,
        user,
        showSidebar,
        isDark,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const data = useContext(DashboardContext);
  return data;
}

function DashboardLayout({ checkDefaultTheme }) {
  return (
    <DashboardProvider>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardProvider>
  );
}

export default DashboardLayout;
