import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const ISSstats = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://api.open-notify.org/iss-now.json")
        .then((response) => response.json())
        .then((json) => setData(json.iss_position))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };

    fetchData();
    setInterval(() => fetchData(), 5000);
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#919" />
      ) : (
        <View>
          <Text>* imagine theres a map instead of ugly numbers *</Text>
          <Text>Longitude: {data.longitude}</Text>
          <Text>Latitude: {data.latitude}</Text>
        </View>
      )}
    </View>
  );
};
export default ISSstats;
