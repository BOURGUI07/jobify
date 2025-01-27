import { BsFillMoonFill } from "./../../node_modules/react-icons/bs/index.esm";
import { BsFillSunFill } from "./../../node_modules/react-icons/bs/index.esm";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashboard } from "../pages/DashboardLayout";

function ThemeToggle() {
  const { isDark, toggleDarkMode } = useDashboard();
  return (
    <Wrapper onClick={toggleDarkMode}>
      {isDark ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
}

export default ThemeToggle;
