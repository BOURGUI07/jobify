import { FaTimes, FaWpforms } from "react-icons/fa/index.esm";
import { ImProfile } from "react-icons/im";
import { IoBarChartSharp } from "react-icons/io5/index.esm";
import { MdAdminPanelSettings, MdQueryStats } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboard } from "../pages/DashboardLayout";
import Logo from "./Logo";

function SmallSidebar() {
  const { showSidebar, toggleSidebar } = useDashboard();

  return (
    <Wrapper>
      <div className={`sidebar-container ${showSidebar ? "show-sidebar" : ""}`}>
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLink className="nav-link" to="." onClick={toggleSidebar} end>
              <span className="icon">
                <FaWpforms />
              </span>
              Add Job
            </NavLink>
            <NavLink onClick={toggleSidebar} className="nav-link" to="all-jobs">
              <span className="icon">
                <MdQueryStats />
              </span>
              All Jobs
            </NavLink>
            <NavLink onClick={toggleSidebar} className="nav-link" to="stats">
              <span className="icon">
                <IoBarChartSharp />
              </span>
              Stats
            </NavLink>
            <NavLink onClick={toggleSidebar} className="nav-link" to="profile">
              <span className="icon">
                <ImProfile />
              </span>
              Profile
            </NavLink>
            <NavLink onClick={toggleSidebar} className="nav-link" to="admin">
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

export default SmallSidebar;
