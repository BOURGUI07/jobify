import { FaWpforms } from "react-icons/fa/index.esm";
import Wrapper from "../assets/wrappers/BigSidebar";
import { NavLink } from "react-router-dom";
import { MdAdminPanelSettings, MdQueryStats } from "react-icons/md";
import { IoBarChartSharp } from "./../../node_modules/react-icons/io5/index.esm";
import { ImProfile } from "react-icons/im";
import { useDashboard } from "../pages/DashboardLayout";
import Logo from "./Logo";

function BigSidebar() {
  const { showSidebar, toggleSidebar } = useDashboard();
  return (
    <Wrapper>
      <div
        className={`sidebar-container ${!showSidebar ? "show-sidebar" : ""}`}
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLink className="nav-link" to="." end>
              <span className="icon">
                <FaWpforms />
              </span>
              Add Job
            </NavLink>
            <NavLink className="nav-link" to="all-jobs">
              <span className="icon">
                <MdQueryStats />
              </span>
              All Jobs
            </NavLink>
            <NavLink className="nav-link" to="stats">
              <span className="icon">
                <IoBarChartSharp />
              </span>
              Stats
            </NavLink>
            <NavLink className="nav-link" to="profile">
              <span className="icon">
                <ImProfile />
              </span>
              Profile
            </NavLink>
            <NavLink className="nav-link" to="admin">
              <span className="icon">
                <MdAdminPanelSettings />
              </span>
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
