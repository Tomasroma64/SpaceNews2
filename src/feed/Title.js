import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useTheme } from "../theme/ThemeProvider";

const Title = () => {
  const { colors, isDark } = useTheme();

  return (
    <View style={s.holder}>
      <Text style={[{ color: colors.text }, s.bigTitle]}>Space News</Text>
    </View>
  );
};
export default Title;

const s = StyleSheet.create({
  holder: {
    marginBottom: 5,
    marginLeft: 50,
    marginTop: 5,
  },
  bigTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 0,
  },
});
