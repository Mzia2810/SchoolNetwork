/** @format */

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../assets/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PrimaryButton from "../../Components/PrimaryButton";
const StudentInfo = ({navigation}) => {
  const Data = [
    {
      id: 1,
      name: 'Hamza',
      checked: false,
      Grades: {
        Eng: 'A',
        Maths: 'B',
        Urdu: 'B',
        Computer: 'A'
      },
      Courses: {
        Eng: 'Eng',
        Maths: 'Maths',
        Urdu: 'Urdu',
        Computer: 'Computer'
      },
    },
    {
      id: 2,
      Grades: {
        Eng: 'A',
        Maths: 'B',
        Urdu: 'B',
        Computer: 'A'
      },
      Courses: {
        Eng: 'Eng',
        Maths: 'Maths',
        Urdu: 'Urdu',
        Computer: 'Computer'
      },
      name: 'Saqib',
      checked: false
    },
    {
      id: 3,
      name: 'Ali',
      checked: false,
      Grades: {
        Eng: 'A',
        Maths: 'B',
        Urdu: 'B',
        Computer: 'A'
      },
      Courses: {
        Eng: 'Eng',
        Maths: 'Maths',
        Urdu: 'Urdu',
        Computer: 'Computer'
      },
    },
    {
      id: 4,
      name: 'Ahmed',
      checked: false,
      Grades: {
        Eng: 'A',
            Maths: 'B',
            Urdu: 'B',
            Computer: 'A',
            Eng: 'A',
            Maths: 'B',
            Urdu: 'B',
            Computer: 'A'
      },
      Courses: {
        Eng: 'Eng',
        Maths: 'Maths',
        Urdu: 'Urdu',
        Computer: 'Computer'
      },
    },
  ]
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

     
      <Text style={[styles.textStyle,{fontSize:30,margin:10}]}>Students:</Text>
      {
        Data.map((ele)=>{
          return(
            <View key={ele.id} style={{height:hp('25%'),width:wp('80%'),margin:10, backgroundColor: Colors.transparent, justifyContent:'space-evenly'}}>
              <View style={{flexDirection:'row', top: hp("3%")}}>
              <Text style={[styles.textStyle,{marginRight:10}]}>Student Name :</Text>
              <Text style={[styles.textStyle]}>{ele.name}</Text>
        </View> 
            <View style={{ top: hp("3%") }}>
          <PrimaryButton
          height={hp('8%')}
            title={"View Details"}
            iconColor={Colors.background}
            onPress={() => navigation.navigate("StudentDetailsForm",{studentId: ele.id})}
          />
        </View> 

            </View>
          )
        })
      }
       </ScrollView>
    </View>
  );
};

export default StudentInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
   // justifyContent: "center",
    backgroundColor: Colors.background,
  },
  textStyle: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    color: Colors.textColor,
    fontWeight: "bold",
  },

});
