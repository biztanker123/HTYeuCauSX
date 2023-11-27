import React, { Component } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
 
} from 'react-native';
/* import { Divider, useTheme, Card, Icon, Chip, Header } from 'react-native-elements'; */

import MenuMain from './mainFill'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        workcentername: '',
        workshiftname: '',
        workshopname: '',
        workshiftplacename: '',
        EmployeeName: '',
      },
    };
  }

  componentDidMount() {
    this.getDataFromStorage();
  }

  getDataFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userData');
      if (jsonValue !== null) {
      
        const data = JSON.parse(jsonValue);
    
        this.setState({
          userData: {
            workcentername: data.WorkCenterName || '',
            workshiftname: data.WorkShiftName || '',
            workshopname: data.WorkShopname || '',
            workshiftplacename: data.WorkShiftPlaceName || '',
            EmployeeName: data.EmployeeName || '',
          },
        });
      } else {
        console.log('No data found in storage.');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

    render() {
      const { navigation } = this.props;
      const { userData } = this.state;
        return (

        <View style={styles.container}>
    
          <ImageBackground style={styles.backgroundImage}
      
              source={require('../../assets/img/backupgroupdms1.jpg')} >
    
          <View style={styles.header} source={require('../../assets/img/backupgroupdms1.jpg')} >
       
              <Text style={styles.text}>
              {userData.workcentername} - {userData.workshopname}
                  </Text>
                  <Text style={styles.text}>
                  {userData.workshiftname} - {userData.workshiftplacename}
                  </Text>


       
    
            
          </View>
          <View style={styles.body}>
          <MenuMain  navigation={navigation}></MenuMain>
             </View>
     

          </ImageBackground> 
    
        </View >
    
    );
  }
}

/* menu main */
const styles = StyleSheet.create({
    header: {
   /*    backgroundColor: "#00BFFF", */
   backgroundColor: "#ffffff",
   width:"100%",
   alignItems: 'center',
   textAlign: 'center',
    },
    backgroundImage: {
   
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.9
     
    },
    body: {
      height:'80%',
     
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    headerContent: {
     
      alignItems: 'center',
    },
    profileDetail: {
  /*     alignSelf: 'center',
      marginTop: 20,
     
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
      backgroundColor: "#ffffff",
      width:580,
      flex:1,justifyContent: "center",alignItems: "center" */
      
        flexDirection: 'row',
       
        backgroundColor: "#ffffff",
        width:500,
        justifyContent: "center",alignItems: "center"
    },
    detailContent: {
    
      alignItems: 'center',
      textAlign: 'center',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
     
    },
    name: {
      fontSize: 22,
      color:"black",
      fontWeight: '600',
    },
   
    bodyContent: {
      flex: 1,
      alignItems: 'center',
     /*  padding: 30, */
    
      position: 'absolute',
      backgroundColor: "#ffffff"
    },
    textInfo: {
      fontSize: 18,
      marginTop: 20,
      color: "#696969",
    },
    bodyContent: {
    /*   paddingTop: 40, */
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    menuBox: {
      backgroundColor: "#DCDCDC",
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 12,
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height: 2,
        width: -2
      },
      elevation: 4,
    },
    icon: {
      width: 60,
      height: 60,
    },
    info: {
      fontSize: 22,
      color: "#696969",
    }
    ,

    text: {
    
      marginVertical: 5,
      marginHorizontal: 10,
      width: "100%",
      maxWidth: 400,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 22,
      color: "black",
      fontWeight: '600',
      alignItems: 'center',
      textAlign: 'center',
    },

    count :{
      fontSize: 22,
      color: "black",
      fontWeight: '600',
      flexWrap: 'wrap',
 
      marginLeft:10,
      marginRight:10,
      alignItems: 'center',
      textAlign: 'center',
    },


    textContainer: {
      width: 400,
      justifyContent: "center",
      alignItems: "flex-start",
    },


  });
  /* end menu main */
  