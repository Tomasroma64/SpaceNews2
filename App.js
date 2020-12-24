import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, View, Linking, useEffect } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import Feed from "./src/feed/Feed";
import ISSModal from "./src/iss/ISSModal";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { useTheme } from "./src/theme/ThemeProvider";

import { Text, TouchableRipple } from "react-native-paper";

import ISSstats from "./src/iss/ISSstats";
import Title from "./src/feed/Title";
import Settings from "./src/settings/settings";

import ThemeToggle from "./src/theme/ThemeToggle";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={() => (
            <DrawerContentScrollView>
              <DrawerItem
                label="Toggle theme"
                icon={({ focused, color, size }) => <ThemeToggle />}
              />
              <DrawerItem
                label="ISS"
                icon={({ focused, color, size }) => (
                  <Drawer.Screen name="ISS" component={ISSScreen} />
                )}
              />
              <DrawerItem
                label="Settings"
                icon={({ focused, color, size }) => (
                  <Drawer.Screen name="Settings" component={SettingsScreen} />
                )}
              />
              <DrawerItem
                label="About"
                icon={({ focused, color, size }) => (
                  <Drawer.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                      title: "About",
                      drawerIcon: ({ focused, color, size }) => (
                        <Icon
                          color={color}
                          size={size}
                          name={focused ? "heart" : "heart-outline"}
                        />
                      ),
                    }}
                  />
                )}
              />
            </DrawerContentScrollView>
          )}
          drawerType={"back"}
          edgeWidth={500}
          drawerStyle={{
            width: "60%",
            backgroundColor: "#ddd",
          }}
          overlayColor="transparent"
          initialRouteName="News"
        >
          <Drawer.Screen name="News" component={NewsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
  /*return (
    <AppearanceProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={() => <DrawerContent />}
            drawerType={"back"}
            edgeWidth={500}
            drawerStyle={{
              width: "60%",
              backgroundColor: "#ddd",
            }}
            overlayColor="transparent"
            initialRouteName="News"
            drawerContent={(props) => {
              return (
                <DrawerContentScrollView {...props}>
                  <DrawerItemList {...props} />
                  <DrawerItem
                    label="Toggle theme"
                    icon={({ focused, color, size }) => (
                      <Icon
                        color={color}
                        size={size}
                        name={focused ? "moon" : "moon"}
                      />
                    )}
                  />
                </DrawerContentScrollView>
              );
            }}
          >
            
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
  */
}
const s = StyleSheet.create({
  header: {
    margin: 10,
    marginBottom: 0,
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingLeft: 20,
  },
});

function NewsScreen({ navigation }) {
  const { colors, isDark } = useTheme();

  return (
    <View style={colors.container}>
      <View style={s.header}>
        <Icon
          size={40}
          name={"md-menu"}
          onPress={() => navigation.toggleDrawer()}
        />
        <Title></Title>
      </View>

      <StatusBar style="auto" />
      <Feed></Feed>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  const { colors, isDark } = useTheme();
  return (
    <View style={colors.container}>
      <Settings />
    </View>
  );
}

function ISSScreen({ navigation }) {
  const { colors, isDark } = useTheme();
  return (
    <View style={colors.container}>
      <ISSstats />
    </View>
  );
}

function AboutScreen({ navigation }) {
  const { colors, isDark } = useTheme();
  return (
    <View style={colors.container}>
      <ISSstats />
    </View>
  );
}
