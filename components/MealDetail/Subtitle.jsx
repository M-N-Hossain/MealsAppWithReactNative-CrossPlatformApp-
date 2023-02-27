import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Subtitle({children}) {
  return (
    <View style={styles.subTitleontainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitleontainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
