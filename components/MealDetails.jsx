import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({duration, complexity, affordability, detailStyle, detailTextStyle}) {
  return (
    <View style={[styles.details, detailStyle]}>
      <Text style={[styles.detailItem, detailTextStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, detailTextStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, detailTextStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
