import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItem from "../components/RestaurantsDetails/MenuItem";
import { ScrollView } from "react-native-gesture-handler";
export default function OrderCompleted() {
  const [lastOrder, setlastOrder] = useState({
    items: [
      {
        title: "Cheeseburger",
        description:
          "A classic cheeseburger with juicy beef patty, melted cheese, lettuce, tomato, and pickles on a toasted bun.",
        price: "$8.99",
        image:
          "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((Snapshot) => {
        Snapshot.docs.map((doc) => {
          setlastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);
  const gst = total + (total * 12) / 100;
  const gstUSD = gst.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* green chcekmark */}
        <LottieView
          style={{
            height: 100,
            alignSelf: "center",
            marginBottom: 30,
            marginTop: 30,
          }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your Order at {restaurantName} restaurant has been placed for {gstUSD}
        </Text>
        {/* menuitems */}
        <ScrollView>
          <MenuItem food={lastOrder.items} hideCheckbox={true} />
          {/* cooking */}
          <LottieView
            style={{
              height: 200,
              alignSelf: "center",
              marginBottom: 30,
              marginTop: 30,
            }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
            loop={true}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
