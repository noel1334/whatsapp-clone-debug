import { useTheme } from "../../context/ThemeContext";
import ToggleSwitch from "../UI/ToggleSwitch";
import "./SidebarHeader.css";

const SidebarHeader = ({ toggleSidebar }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="sidebar-header">
      <div className="user-info">
        <img src="/noavatar.jpeg" alt="User Avatar" className="avatar" />
        <span style={{ color: "blue" }}>My Name</span>
      </div>

      <div className="header-actions">
        <ToggleSwitch checked={isDarkMode} onChange={toggleTheme} />
      </div>
    </div>
  );
};

export default SidebarHeader;
