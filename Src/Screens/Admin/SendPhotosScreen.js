/** @format */

import { StyleSheet, Text, View, Image,Modal,Pressable, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import React, {useState} from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from '@expo/vector-icons';
import {Colors} from "../../../assets/theme";
import PrimaryButton from "../../Components/PrimaryButton";
import * as Sharing from 'expo-sharing';
import { Button } from 'react-native-elements';

const SendPhotosScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const[pickedImage,setPickedImage]=useState('');
  const showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      setModalVisible(!modalVisible)
      console.log(result.assets[0].uri);
    }
  }
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      setModalVisible(!modalVisible)
      console.log(pickedImage)
    }
}

const ModalScreen=()=>{
  const dummyImage='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX09PTMzMzJycnPz8/d3d3V1dXi4uLo6Ojw8PDx8fH39/ft7e3Y2NjQ0NDp6enb29uHE20LAAACaklEQVR4nO3b6W6CQBhGYUTWD9T7v9uylLIN6jCk8Cbn+deEGo6DMOAYRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJyFiuzshLesStJAdVZdufEV38LFydkZm6w+IrBJrK86itkxgU1ifnaKmz363QvUvsbjmoNYdjuXPPMQz6R7lfLsGKeq3bd76LvfHwnFIXt0tOKYwjuF51kVtjMUbzqFVmR1/cpK30idwv7qH98yz0SVwvI+XP19JygqhY9xehMnXokihfl0/hZ77a5I4WM2zXz5DKJI4XwKvjHLNGeGRmE1L7w7N7fKeRLSKCy+KGwCnedZjcJofruXuo7SbpwdiRqFlk4D42y9rf0eyOtEjcL5BzFeb2rV5oRApNAmj6QcjyRs8g4sE0UKJ4nxemJq8yGeJ6oURpY/uic26frppy0uJvNEmcI2JM/yovlz8cxlGbhIFCrcsA6cX0/kC52Bt3hMlC90Bk5HUbzQPYL9KA6b6BXmk8/YZuCYqFdYj/f47wL/EtUKrR6/LXsfOCSKFbaBQ+KnwGa79sqpVWjp7x1Ec6B+DhQsHAK7xM+BeoVjYLPzr499eoXTwO+IFfoHihXuWbWgVVh792kV7lt3IlRoe0ZQqvCLax+FZ8c4UUghheebFu6jU1gk++gU7l3t3f2rRmGAyxcGr329cuEh60stunBh2Z3y6yxM/wX52S1u/bf3Ryzzdq9tuIDnYWv1q7NTNlhy0O8t/Nb6/SfLbnHoYbpjSep/sjLfOZ0ZXfTXJKPgH69deAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDyA0uAKIxQw0bjAAAAAElFTkSuQmCC'
 const openShareDialogue=()=>{
const shareStatus=Sharing.isAvailableAsync()
if(shareStatus){
  Sharing.shareAsync(pickedImage,{dialogTitle:'Image'})
}
else{
  alert("Sharing is disabled")
}
 }
 
  return(
    <View>

    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{height: hp('5%'),width: wp('90%'),marginRight:20}}>
          <TouchableOpacity
          style={{alignSelf:'flex-end'}}
            onPress={()=>{setModalVisible(!modalVisible)}}
          >
          <Entypo name="cross" size={50} color={Colors.secondary} />
          </TouchableOpacity>

        </View>

        <Text style={styles.modalText}>Photo Preview</Text>
        <View style={styles.modalImageHolderView}>
        <Image
        style={{height: hp('30%'),width:wp('70%')}}
      resizeMode={"contain"}
        source={{uri: pickedImage?pickedImage: dummyImage}}
      />

        </View>
      <View style={{flexDirection:'row'}}>
       <View style={{ top: hp("3%"), margin:5 }}>
      <PrimaryButton
            title={"Post"}
            margin={10}
            width={wp("40%")}
            fontSize={25}
            button={"outline"}
            iconColor={Colors.background}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
        <View style={{ top: hp("3%"),margin:5  }}>
      <PrimaryButton
            title={"Share"}
            margin={10}
            width={wp("40%")}
            
            fontSize={25}
            button={"outline"}
            iconColor={Colors.background}
            onPress={() => openShareDialogue()}
          />
        </View>
      </View>
      
       
      </View>
    </View>
  </Modal>
  </View>
  )
}

  return (
    <View style={styles.container}>
       <Image
        style={styles.Image}
        source={require("../../../assets/images/logo.png")}
      />
     
      <View style={styles.textInputMainView}>
      <View style={{ top: hp("0%") }}>
      <PrimaryButton
            title={"Upload Photo Using Camera"}
            height={hp("12%")}
            width={wp("80%")}
            fontSize={25}
            button={"outline"}
            iconColor={Colors.background}
            onPress={() => openCamera()}
          />
        </View>
     
        <View style={{ top: hp("8%") }}>
          <PrimaryButton
            margin= {10}
            height={hp("12%")}
            width={wp("80%")}
            fontSize={25}
            title={"Upload Photo From Gallery"}
            iconColor={Colors.background}
            onPress={()=>{showImagePicker()}}
          />
        </View>
      </View>
    { modalVisible &&
      <View>
      <ModalScreen/>
    </View>

    }  
    </View>
  );
};

export default SendPhotosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  textStyle: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    color: Colors.textColor,
    fontWeight: "bold",
  },
  textInputMainView: {
    width: wp("88%"),
    height: hp("30%"),
    justifyContent: "center",
    alignItems: "center",
    bottom:hp('10%')
  },

  inputView: {
    width: wp("100%"),
    height: hp("15%"),
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: 250,
    height: 150,
    bottom: hp("20%"),
  },

  //Modal Styles
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp('2%')
  },
  modalView: {
    margin: 10,
   // borderWidth:5,
    borderRadius:20,
    //borderColor: Colors.secondary,
    width: wp('90%'),
      height: hp('70%'),
    backgroundColor: Colors.background,

    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalImageHolderView:{
    padding:5,
    justifyContent:'center',
    width: wp('75%'),
     height: hp('35%'),
     borderWidth:2,
     borderColor:Colors.secondary
    }
});
