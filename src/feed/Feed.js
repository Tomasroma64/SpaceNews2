import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

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
        ></FlatList>
      )}
    </View>
  );
};

export default Feed;

const s = StyleSheet.create({
  content: {
    flex: 1,
    padding: 17,
    paddingBottom: 0,
  },
});
