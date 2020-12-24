import ThemeToggle from "./src/theme/ThemeToggle";

import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Drawer.Section title="Preferences">
        <TouchableRipple onPress={() => {}}>
          <View>
            <Text>Dark Theme</Text>
            <ThemeToggle />
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.preference}>
            <Text>RTL</Text>
            <View pointerEvents="none"></View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}
