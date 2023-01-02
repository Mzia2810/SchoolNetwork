/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import ParentScreen from "../Screens/Parent/ParentScreen";
const ParentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AdminScreen"
    >
      <Stack.Screen
        name="ParentScreen"
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          title: "Parent  Dashboard",
        }}
        component={ParentScreen}
      />
    </Stack.Navigator>
  );
};

export default ParentStack;
