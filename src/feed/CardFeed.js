import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Linking } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import { useTheme } from "../theme/ThemeProvider";

const CardFeed = ({ data }) => {
  const { colors, isDark } = useTheme();

  return (
    <TouchableHighlight
      onPress={() => Linking.openURL(data.url)}
      underlayColor={"transparent"}
    >
      <View style={colors.card} onPress={() => Linking.openURL(data.url)}>
        <Image style={colors.cardImage} source={{ uri: data.imageUrl }} />
        <View style={colors.cardText}>
          <Text style={colors.cardTitle}>{data.title}</Text>
          <Text style={colors.cardSummary}>{data.summary}</Text>
          <Text style={colors.cardDate}>{data.updatedAt}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
export default CardFeed;
