import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    //price === $ || $$ || $$$
    return results.filter(results => {
      return results.price === price;
    });
  };
  const filterResultsByRating = rating => {
    //rating === 1 || 1.5 || 2 || 2.5 || 3 || 3.5 || 4 || 4.5 || 5 ||
    return results.filter(results => {
      return results.rating === rating;
    });
  };
  const filterResultsByReviewCount = (review_count) => {
    //review_count === int
    return results.filter(results => {
      return results.review_count <= review_count;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByRating(5)}
          title="The Best"
        />
        <ResultsList
          results={filterResultsByRating(4.5)}
          title="up there like"
        />
        <ResultsList
          results={filterResultsByRating(4)}
          title="very good"
        />
        <ResultsList
          results={filterResultsByRating(3.5)}
          title="pretty good"
        />
        <ResultsList results={filterResultsByRating(3)} title="good" />
        <ResultsList results={filterResultsByRating(2.5 || 2 || 1.5 || 1)} title="meh" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
export default SearchScreen;
