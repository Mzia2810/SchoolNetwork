/** @format */

import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { getAuth } from "firebase/auth";

import PrimaryButton from "../../Components/PrimaryButton";
import { Colors } from "../../../assets/theme";
import { signOut } from "firebase/auth";
// import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase.config";

const AdminScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  console.log("user =", user);
  useEffect(() => {
    const profileData = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUser(docSnap.data().fullName);
      }
    };
    profileData();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Entypo
            name="log-out"
            size={30}
            color={Colors.secondary}
            onPress={() => decide()}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  const decide = () => {
    Alert.alert(
      "Log Out",
      "Are You Sure!",
      [
        {
          text: "Yes",
          onPress: () => logOut(),
          style: "yes",
        },
        { text: "No" },
      ],
      { cancelable: false }
    );
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("Logged Out");
      })
      .catch((error) => {});
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: wp("90"),
          height: hp("6%"),
          bottom: hp("7%"),
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: Colors.secondary,
            alignSelf: "center",
          }}
        >
          Welcome {user}!
        </Text>
      </View>
      <Image
        style={styles.Image}
        source={require("../../../assets/images/logo.png")}
      />
      <View style={styles.secondView}>
        <View style={{ bottom: hp("4%") }}>
          <PrimaryButton
            title={"Event"}
            height={hp("13%")}
            width={wp("80%")}
            fontSize={35}
            iconColor={Colors.background}
            onPress={() => navigation.navigate("EventScreen")}
          />
        </View>
        <View style={{ top: hp("0%") }}>
          <PrimaryButton
            title={"Send Photos"}
            height={hp("13%")}
            width={wp("80%")}
            fontSize={35}
            button={"outline"}
            iconColor={Colors.background}
            onPress={() => navigation.navigate("SendPhotos")}
          />
        </View>
        <View style={{ top: hp("3.5%") }}>
          <PrimaryButton
            title={"Student Info"}
            height={hp("13%")}
            width={wp("80%")}
            fontSize={35}
            iconColor={Colors.background}
            onPress={() => navigation.navigate("StudentInfo")}
          />
        </View>
        <View style={{ top: hp("7%") }}>
          <PrimaryButton
            title={"Groups"}
            height={hp("13%")}
            width={wp("80%")}
            fontSize={35}
            button={"outline"}
            iconColor={Colors.background}
            onPress={() => navigation.navigate("Groups")}
          />
        </View>
      </View>
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  secondView: {
    justifyContent: "space-between",
    padding: 10,
  },
  Image: {
    width: 150,
    height: 100,
    bottom: hp("5%"),
  },
});
