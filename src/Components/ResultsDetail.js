import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.subText}>
        {`${result.rating} ${result.rating > 1 ? "Stars" : "Star"}, ${
          result.review_count
        } ${result.review_count > 1 ? "Reviews" : "Review"}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
    // alignItems: "center",
    // justifyContent: "center"
  },
  name: {
    fontWeight: "bold"
  },
  subText: {},
  container: {
    marginLeft: 15
  }
});
export default ResultsDetail;
