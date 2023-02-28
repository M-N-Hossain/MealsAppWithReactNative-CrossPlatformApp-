import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

export default function FavoriteScreen() {
  const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealContext.ids.includes(meal.id)
  );

  if(favoriteMeals.length === 0){
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet</Text>
        </View>
    )
  }
  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    }

})