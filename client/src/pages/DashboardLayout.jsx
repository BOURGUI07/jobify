import {
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import SmallSidebar from "../ui/SmallSidebar";
import BigSidebar from "../ui/BigSidebar";
import Navbar from "../ui/Navbar";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { checkDefaultTheme } from "../App";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const { user } = useLoaderData();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDark, setIsDark] = useState(checkDefaultTheme);
  const navigate = useNavigate();

  function toggleDarkMode() {
    localStorage.setItem("darkTheme", isDark);
    setIsDark((x) => !x);
    document.body.classList.toggle("dark-theme", isDark);
  }

  function toggleSidebar() {
    setShowSidebar((x) => !x);
  }

  async function logoutUser() {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  }

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

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    redirect("/");
  }
};

export default DashboardLayout;
