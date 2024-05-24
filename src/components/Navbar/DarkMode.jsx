import React from 'react';
import LightModeButton from "../../assets/website/light-mode-button.png";
import DarkModeButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  React.useEffect(() => {
    const element = document.documentElement;
    localStorage.setItem("theme", theme);
    element.classList.remove(theme === "dark" ? "light" : "dark");
    element.classList.add(theme);
  }, [theme]);

  return (
    <div className='relative'>
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightModeButton}
        alt="Light Mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkModeButton}
        alt="Dark Mode"
        className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-all duration-300`}
      />
    </div>
  );
};

export default DarkMode;
