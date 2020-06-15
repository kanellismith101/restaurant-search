import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

//Organise in order of one with highest amount of comment
//

const filterResultsByReviewCount = review_count => {
  //review_count === int
  return results.filter(results => {
    return results.review_count === review_count;
  });
};
const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10
  }
});
export default withNavigation(ResultsList);
