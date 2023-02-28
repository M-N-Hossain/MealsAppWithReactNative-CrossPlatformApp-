import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealList/MealItem";
import MealsList from "../components/MealList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // can use useEffect also, use effect executes after the component render,
  // In contrast useLayoutEffect does before.
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}/>
}

