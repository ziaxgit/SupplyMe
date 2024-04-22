import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { ItemsToOrderProvider } from "../screens/ItemsToOrderContext";
import ColdItemsComponent from "../screens/ColdItemsComponent";
import DryItemsComponent from "../screens/DryItemsComponent";
import OrderDetails from "../screens/OrderDetails";

export default function HomeScreen() {
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  return (
    <SafeAreaView className="bg-" style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <ItemsToOrderProvider>
          <StatusBar style="auto" />
          <ColdItemsComponent />
          <DryItemsComponent />
          <TouchableOpacity
            style={{
              backgroundColor: "#008000",
              marginTop: 20,
              marginHorizontal: 50,
              padding: 10,
            }}
            onPress={() => setShowOrderDetails(true)}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Confirm Order
            </Text>
          </TouchableOpacity>
          {showOrderDetails && <OrderDetails />}
        </ItemsToOrderProvider>
      </ScrollView>
    </SafeAreaView>
  );
}