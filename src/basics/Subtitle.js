import React from "react";
import { StyleSheet, Text } from "react-native";

import { useTheme } from "../theme/ThemeProvider";

const Settings = ({ string }) => {
  const { colors, isDark } = useTheme();

  return (
    <Text style={[{ color: colors.text }, s.text]}>{string.toUpperCase()}</Text>
  );
};

export default Settings;

const s = StyleSheet.create({
  text: {
    margin: 15,
    marginBottom: 5,
    fontSize: 25,
    fontWeight: "bold",
  },
});
