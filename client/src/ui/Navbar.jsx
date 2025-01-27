import Wrapper from "../assets/wrappers/Navbar";
import { useDashboard } from "../pages/DashboardLayout";
import {
  FaAlignLeft,
  FaHome,
} from "./../../node_modules/react-icons/fa/index.esm";
import Logo from "./Logo";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const { toggleSidebar } = useDashboard();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>

        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
