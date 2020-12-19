import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Title extends React.PureComponent {
  render() {
    return (
      <View style={{ marginBottom: 5 }}>
        <Text style={s.bigTitle}>Space News</Text>
        <Text>Imagine an extremely cool title ^^</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  bigTitle: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
