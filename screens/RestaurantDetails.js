import { View, Text } from "react-native";
import React from "react";
import About from "../components/RestaurantsDetails/About";
import { Divider } from "react-native-elements";
import MenuItem from "../components/RestaurantsDetails/MenuItem";
import ViewCart from "../components/RestaurantsDetails/ViewCart";
export default function RestaurantDetails({ route, navigation }) {
  const food = [
    {
      title: "Cheeseburger",
      description:
        "A classic cheeseburger with juicy beef patty, melted cheese, lettuce, tomato, and pickles on a toasted bun.",
      price: "$8.99",
      image:
        "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=",
    },

    {
      title: "Margherita Pizza",
      description:
        "A traditional Margherita pizza topped with fresh mozzarella cheese, tomatoes, basil, and olive oil.",
      price: "$12.99",
      image:
        "https://static.toiimg.com/thumb/56868564.cms?width=1200&height=900",
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "Crisp romaine lettuce topped with grilled chicken, Parmesan cheese, croutons, and Caesar dressing.",
      price: "$49.99",
      image:
        "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg",
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "Crisp romaine lettuce topped with grilled chicken, Parmesan cheese, croutons, and Caesar dressing.",
      price: "$49.99",
      image:
        "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg",
    },
  ];
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} food={food} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
