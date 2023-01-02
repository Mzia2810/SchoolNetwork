/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from "../Screens/Student/StudentScreen";
import StudentDetailsForm from "../Screens/Student/StudentInfo";
import StudentEvents from "../Screens/Student/StudentEvents";
const Stack = createNativeStackNavigator();

const StudentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="StudentScreen"
    >
      <Stack.Screen
        name="StudentScreen"
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          title: "Student  Dashboard",
        }}
        component={StudentScreen}
      />
      <Stack.Screen
        name="StudentDetailsForm"
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          title: "Student Details",
        }}
        component={StudentDetailsForm}
      />
      <Stack.Screen
        name="StudentEvents"
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          title: "Events",
        }}
        component={StudentEvents}
      />
    </Stack.Navigator>
  );
};

export default StudentStack;
