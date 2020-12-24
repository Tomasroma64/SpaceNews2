import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Subtitle from "../basics/Subtitle";
import ThemeToggle from "../theme/ThemeToggle";

const Settings = () => {
  return (
    <SafeAreaView>
      <StatusBar />

      <ScrollView>
        <Subtitle string="change theme"></Subtitle>
        <Text>Whats up</Text>
        <ThemeToggle />
        <Subtitle string="ajslkdjflkasj"></Subtitle>
        <Text>Whats up</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const s = StyleSheet.create({
  content: {
    flex: 1,
    padding: 17,
  },
});
