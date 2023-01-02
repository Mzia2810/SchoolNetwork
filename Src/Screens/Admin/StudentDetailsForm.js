/** @format */

import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect,useState } from "react";
import { Colors } from "../../../assets/theme";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import PrimaryButton from "../../Components/PrimaryButton";
const StudentDetailsForm = ({navigation,route}) => {
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
            Physics: 'A',
            Chem: 'A',
            Bio: 'B',
            Arts: 'B',
            Computer: 'A'
          },
          Courses: {
            Eng: 'Eng',
            Maths: 'Maths',
            Urdu: 'Urdu',
            Computer: 'Computer',
            Physics: 'Physics',
            Chem: 'Chem',
            Bio: 'Bio',
            Arts: 'Arts',
          },
        },
      ]
    const{studentId}=route.params
    const[student,setStudent]=useState([])
    useEffect(()=>{
   const newData= Data.filter((item)=>{
        if(item.id === studentId){
            return item
        }
    })
    setStudent(newData)
    },[])
const RenderItem=({item})=>{
    return(
        <View style={{width:wp('90%'),height:hp('90%')}}>
        <View style={{ top: hp("3%") }}>
        <Text style={styles.textStyle}>Student ID: {item.id}</Text>
        <Text style={styles.textStyle}>Student Name: {item.name}</Text>
        <View style={styles.coursesView}>
        <Text style={[styles.textStyle,{alignSelf:'center'}]}>Courses</Text>
        <Text style={styles.textStyle}>{item.Courses.Computer}</Text>
        <Text style={styles.textStyle}>{item.Courses.Maths}</Text>
        <Text style={styles.textStyle}>{item.Courses.Urdu}</Text>
        <Text style={styles.textStyle}>{item.Courses.Eng}</Text>
        
  </View>
  <View style={styles.coursesView}>
        <Text style={[styles.textStyle,{alignSelf:'center'}]}>Grades</Text>
        <Text style={styles.textStyle}>{item.Courses.Computer} : {item.Grades.Computer}</Text>
        <Text style={styles.textStyle}>{item.Courses.Maths} : {item.Grades.Maths}</Text>
        <Text style={styles.textStyle}>{item.Courses.Urdu} : {item.Grades.Urdu}</Text>
        <Text style={styles.textStyle}>{item.Courses.Eng} : {item.Grades.Eng}</Text>
        <Text style={styles.textStyle}>{item.Courses.Physics} : {item.Grades.Physics}</Text>
        <Text style={styles.textStyle}>{item.Courses.Bio} : {item.Grades.Bio}</Text>
        <Text style={styles.textStyle}>{item.Courses.Chem} : {item.Grades.Chem}</Text>
        <Text style={styles.textStyle}>{item.Courses.Arts} : {item.Grades.Arts}</Text>
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
}    
const KeyExtractor=(item)=>{return item.id}
  return (
    
    <View style={styles.container}>



     
<Text style={styles.titleText}>Student BioData</Text>
<FlatList
data={student}
renderItem={RenderItem}
keyExtractor={KeyExtractor}
showsVerticalScrollIndicator={false}
/>


    </View>
      
  );
};

export default StudentDetailsForm;

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