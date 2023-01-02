/** @format */

import { AsyncStorage, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CheckBox } from 'react-native-elements'
import { AntDesign ,Feather} from '@expo/vector-icons';
import { Colors } from "../../../assets/theme";

import PrimaryButton from "../../Components/PrimaryButton";
const GroupsScreen = ({navigation}) => {
  const[checked1,setChecked1]=useState(false)
  const Data= [
    {
      id: 1,
      name: 'Hamza',
      checked:false
    },
    {
      id: 2,
      name: 'Saqib',
      checked:false
    },
    {
      id: 3,
      name: 'Ali',
      checked:false
    },
    {
      id: 4,
      name: 'Ahmed',
      checked:false
    },
  ]
  
  const[checked2,setChecked2]=useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Create A Group</Text>
      {
        Data.map((item)=>{
          return(

            <CheckBox key={item.id}
          title={item.name}
      checkedIcon={<AntDesign name="checkcircle" size={24} color="black" />}
      uncheckedIcon={<Feather name="square" size={24} color="black" />}
      checked={item.checked}
      onPress={() => !(item.checked)}
      />
        )
        })
      }
    </View>
  );
};

export default GroupsScreen;

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
