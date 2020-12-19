import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Linking } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const CardFeed = ({ data }) => {
  return (
    <TouchableHighlight
      onPress={() => Linking.openURL(data.url)}
      underlayColor={"transparent"}
    >
      <View style={s.card} onPress={() => Linking.openURL(data.url)}>
        <Image style={s.cardImage} source={{ uri: data.imageUrl }} />
        <View style={s.cardText}>
          <Text style={s.cardTitle}>{data.title}</Text>
          <Text>{data.summary}</Text>
          <Text style={s.cardDate}>{data.updatedAt}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
export default CardFeed;

const s = StyleSheet.create({
  cardDate: {
    textAlign: "right",
    marginTop: 7,
    fontSize: 13,
    color: "#555",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  cardImage: {
    flex: 1,
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  cardText: {
    padding: 8,
  },

  card: {
    marginBottom: 15,
    margin: 4,
    padding: 0,

    borderRadius: 5,
    backgroundColor: "#fefefe",

    textAlign: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,

    elevation: 3,
  },
});
