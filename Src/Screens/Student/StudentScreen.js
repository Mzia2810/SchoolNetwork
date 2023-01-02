/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PrimaryButton from "../../Components/PrimaryButton";
import { Colors } from "../../../assets/theme";
const StudentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require("../../../assets/images/logo.png")}
      />
      <View style={styles.secondView}>
        <View style={{ bottom: hp("4%") }}>
          <PrimaryButton
            title={"Today's Events"}
            height={hp("13%")}
            width={wp("80%")}
            fontSize={35}
            iconColor={Colors.background}
            onPress={() => navigation.navigate("StudentEvents")}
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
            title={"Schedules"}
            height={hp("13%")}
            width={wp("80%")}
            fontSize={35}
            iconColor={Colors.background}
            onPress={() => navigation.navigate("StudentDetailsForm")}
          />
        </View>
        <View style={{ top: hp("7%") }}>
          <PrimaryButton
            title={"My Info"}
            height={hp("13%")}
            width={wp("80%")}
            fontSize={35}
            button={"outline"}
            iconColor={Colors.background}
            onPress={() => navigation.navigate("StudentDetailsForm")}
          />
        </View>
      </View>
    </View>
  );
};

export default StudentScreen;

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
    width: 180,
    height: 110,
    bottom: hp("5%"),
  },
});
