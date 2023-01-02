/** @format */

import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect,useState } from "react";
import { Colors } from "../../../assets/theme";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import PrimaryButton from "../../Components/PrimaryButton";
const StudentEvents = ({navigation}) => {
    const Data = [
       {
        id: 1,
        name: 'Seminar On Student Career Counselling',
        venue: 'Main Seminar Room',
        time: '12.00 pm'
       },
       {
        id: 2,
        name: 'Address On Independence Day',
        venue: 'Assembly Ground',
        time: '09.00 am'
       },
       {
        id: 3,
        name: 'Lecture On Self Grooming',
        venue: 'Main Library',
        time: '10.00 am'
       },
      ]

   
const RenderItem=({item})=>{
    return(
        <View style={{width:wp('90%'),height:hp('40%')}}>
       
        <View style={styles.coursesView}>
        <Text style={[styles.textStyle,{alignSelf:'center'}]}>Event</Text>
        <Text style={styles.textStyle}>Event Name : {item.name}</Text>
        <Text style={styles.textStyle}>Event Venue : {item.venue}</Text>
        <Text style={styles.textStyle}>Event Time : {item.time}</Text>
  </View>
  
 </View>
    )
}    
const KeyExtractor=(item)=>{return item.id}
  return (
    
    <View style={styles.container}>



     
<Text style={styles.titleText}>Today's Events</Text>
<FlatList
data={Data}
renderItem={RenderItem}
keyExtractor={KeyExtractor}
showsVerticalScrollIndicator={false}
/>



    </View>
      
  );
};

export default StudentEvents;

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
  coursesView:{
     top: hp("3%"),
      height:hp('30%'),
      borderRadius:10,
      padding:10,
      margin:5,
      borderWidth:1,
      borderColor: Colors.secondary,
      justifyContent:'space-evenly',
       backgroundColor: Colors.background
     },
     titleText:{
        fontSize:30,
        alignSelf:'center',
        color:Colors.secondary,
        margin:10,
        justifyContent: "center",
      
        fontWeight: "bold",
    }

});
/*

      {
        student.map((ele)=>{
          return(
            <View style={{height:hp('80%'),width:wp('90%')}}>
              <View style={{ top: hp("3%") }}>
              <Text style={styles.textStyle}>Student ID: {ele.id}</Text>
              <Text style={styles.textStyle}>Student Name: {ele.name}</Text>
              <View style={styles.coursesView}>
              <Text style={[styles.textStyle,{alignSelf:'center'}]}>Courses</Text>
              <Text style={styles.textStyle}>{ele.Courses.Computer}</Text>
              <Text style={styles.textStyle}>{ele.Courses.Maths}</Text>
              <Text style={styles.textStyle}>{ele.Courses.Urdu}</Text>
              <Text style={styles.textStyle}>{ele.Courses.Eng}</Text>
        </View>
        <View style={styles.coursesView}>
              <Text style={[styles.textStyle,{alignSelf:'center'}]}>Grades</Text>
              <Text style={styles.textStyle}>{ele.Courses.Computer} : {ele.Grades.Computer}</Text>
              <Text style={styles.textStyle}>{ele.Courses.Maths} : {ele.Grades.Maths}</Text>
              <Text style={styles.textStyle}>{ele.Courses.Urdu} : {ele.Grades.Urdu}</Text>
              <Text style={styles.textStyle}>{ele.Courses.Eng} : {ele.Grades.Eng}</Text>
        </View> 
        <View style={{ top: hp("5%") }}>
          <PrimaryButton
          height={hp('10%')}
            title={"Close"}
            iconColor={Colors.background}
            onPress={() => navigation.navigate("StudentInfo")}
          />
        </View> 
        </View> 
       </View>
          )
        })
      }
*/