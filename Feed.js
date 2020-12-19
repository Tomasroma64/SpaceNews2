import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Title from "./Title";
import CardFeed from "./CardFeed";

const Feed = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.spaceflightnewsapi.net/api/v2/articles")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={s.content}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#919" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <CardFeed data={item}></CardFeed>}
          ListHeaderComponent={() => <Title></Title>}
        ></FlatList>
      )}
    </View>
  );
};
export default Feed;

/*
  
    render() {
    return (
      <>
        <FlatList
          data={[{ title: "aksdfj" }, { title: "asjdl" }]}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        ></FlatList>
      </>
    );
  }
  */

const s = StyleSheet.create({
  content: {
    flex: 0.95,
    padding: 17,
  },
});
