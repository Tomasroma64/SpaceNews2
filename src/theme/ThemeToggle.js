import React from "react";
import { Switch } from "react-native";
import { useTheme } from "./ThemeProvider";

const themeToggle = () => {
  const { setScheme, isDark } = useTheme();
  const toggleScheme = () => {
    isDark ? setScheme("light") : setScheme("dark");
  };

  return <Switch value={isDark} onValueChange={toggleScheme} />;
};

export default themeToggle;
