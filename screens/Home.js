import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/Home/HeaderTabs";
import SearchBar from "../components/Home/SearchBar.js";
import Categories from "../components/Home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/Home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";

export default function Home({ navigation }) {
  const restaurantData = localRestaurants;

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
