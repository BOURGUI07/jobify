import { useState } from "react";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useDashboard } from "../pages/DashboardLayout";
import { FaUserCircle } from "react-icons/fa/index.esm";
import { FaCaretDown } from "react-icons/fa/index.esm";

function LogoutContainer() {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutuser } = useDashboard();
  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout((x) => !x)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={`dropdown ${showLogout ? "show-dropdown" : ""}`}>
        <button className="dropdown-btn" onClick={logoutuser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
}

export default LogoutContainer;
