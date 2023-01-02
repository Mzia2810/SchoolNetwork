/** @format */

import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminScreen from "../Screens/Admin/AdminScreen";
import EventScreen from "../Screens/Admin/EventScreen";
import SendPhotosScreen from "../Screens/Admin/SendPhotosScreen";
import StudentInfo from "../Screens/Admin/StudentInfo";
import GroupsScreen from "../Screens/Admin/GroupsScreen";
import StudentDetailsForm from "../Screens/Admin/StudentDetailsForm";
import AdminLoginScreen from "../Screens/Admin/AdminLogin";
import AdminSignUpScreen from "../Screens/Admin/AdminRegister";
import SubWelcomeScreen from "../Screens/AuthScreens/SubWelcomeScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
const Stack = createNativeStackNavigator();

const AdminStack = () => {
  const [user, setUser] = useState("");
  const checkUser = () => {
    const subscriber = onAuthStateChanged(auth, (userExists) => {
      if (userExists) {
        setUser(userExists);
      } else {
        setUser("");
      }
      return subscriber;
    });
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Group>
          <Stack.Screen
            name="AdminScreen"
            options={{
              headerTitleAlign: "center",
              headerShown: true,
              title: "School  Faculty",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            component={AdminScreen}
          />
          <Stack.Screen
            name="EventScreen"
            options={{
              headerTitleAlign: "center",
              headerShown: true,
              title: "Event Information",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            component={EventScreen}
          />
          <Stack.Screen
            name="SendPhotos"
            options={{
              headerTitleAlign: "center",
              headerShown: true,
              title: "Send  Photos",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            component={SendPhotosScreen}
          />
          <Stack.Screen
            name="StudentInfo"
            options={{
              headerTitleAlign: "center",
              headerShown: true,
              title: "Student  Info",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            component={StudentInfo}
          />
          <Stack.Screen
            name="Groups"
            options={{
              headerTitleAlign: "center",
              headerShown: true,
              title: "Groups",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            component={GroupsScreen}
          />
          <Stack.Screen
            name="StudentDetailsForm"
            options={{
              headerTitleAlign: "center",
              headerShown: true,
              title: "Student Details",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
            component={StudentDetailsForm}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="AdminLoginScreen"
            options={{
              headerTitleAlign: "center",
              headerShown: false,
              title: "Admin Login",
            }}
            component={AdminLoginScreen}
          />
          <Stack.Screen
            name="AdminSignUpScreen"
            options={{
              headerTitleAlign: "center",
              headerShown: false,
              title: "Admin Sign Up",
            }}
            component={AdminSignUpScreen}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default AdminStack;
