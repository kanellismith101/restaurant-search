import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search..."
        style={{ flex: 1 }}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    borderRadius: 5,
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    height: 40,
    marginHorizontal: 15,
    marginVertical: 10
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 10
  }
});
export default SearchBar;
