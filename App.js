import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import SafeAreaView from "react-native-safe-area-view";

import Feed from "./Feed";
import { AlwaysOpen } from "./AlwaysOpen";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Feed></Feed>
      </View>
      <AlwaysOpen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
