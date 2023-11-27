  import React, { Component } from "react";
  import { TouchableOpacity, Text, View, StyleSheet, Alert,Image } from "react-native";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import * as CodeLibrary from "../../components/Codelibrary.js";
  export default class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isPressedRed: false,
        isPressedYellow: false,
        isPressedBlue: false,
        isPressedGreen: false,
        isOnRed: false, // Trạng thái ban đầu của nút
        isOnYellow: false,
        isOnBlue: false, // Trạng thái ban đầu của nút
        isOnGreen: false,
        isLoading: false,
        isimgalert: false,
        userData: {
          workcentername: '',
          workshiftname: '',
          workshopname: '',
          workshiftplacename: '',
          EmployeeName: '',
          workshiftplacecode:'',
          workshiftcode:'',
          Red_Display: "", // <= can return this value on server
          Yellow_Display: "", // <= can return this value on server
          Blue_Display: "", // <= can return this value on server
          Green_Display: "", // <= can return this value on server
        },
    
      };
    }
    componentDidMount() {
      this.getDataFromStorage();
    }


    send_data_webapi_alarm = async (param1,param2) => {
      try {
        this.setState({ isLoading: true });
        const jsonValue = await AsyncStorage.getItem('userData');
        if (jsonValue !== null) {
          const data = JSON.parse(jsonValue);
          const send_Alarm_Data = {
            WorkShiftCode: data.WorkShift, // <= can return this value on server
            RoutingNo: data.WorkShiftPlace, // <= can return this value on server
            AlarmType: param1, // <= can return this value on server
            AlarmValue: param2, // <= can return this value on server
        
          }; 
          console.log(send_Alarm_Data);
          const responseData= await CodeLibrary.sendData_Alarm_App(send_Alarm_Data); 
    
        }
    
    
      } catch (error) {
        console.error("Error sending user data:", error);
        // Xử lý lỗi nếu cần
      } finally {
        this.setState({ isLoading: false });
      }

    }
    getDataFromStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userData');
        if (jsonValue !== null) {
        
          const data = JSON.parse(jsonValue);
      console.log(jsonValue)
          this.setState({
            userData: {
              workcentername: data.WorkCenterName || '',
              workshiftname: data.WorkShiftName || '',
              workshopname: data.WorkShopname || '',
              workshiftplacename: data.WorkShiftPlaceName || '',
              EmployeeName: data.EmployeeName || '',
              workshiftplacecode: data.WorkShiftPlace || '',
              workshiftcode: data.WorkShift || '',

              Red_Display: data.Red_Display || '',
              Yellow_Display: data.Yellow_Display || '',
              Blue_Display: data.Blue_Display || '',
              Green_Display: data.Green_Display || '',
            },
          });
        } else {  
          console.log('No data found in storage.');
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };


    handlePress_red = () => {
      const { isPressedRed, isOnRed } = this.state;
      this.setState((prevState) => ({
        isOnRed: !prevState.isOnRed,
      }));
      if(!isOnRed)
      {
        this.send_data_webapi_alarm(3,1);
      }
      else
      {
        this.send_data_webapi_alarm(3,0);
      }
      if(this.state.isPressedYellow==false && this.state.isPressedBlue==false && this.state.isPressedGreen==false)
      {
        this.setState({  isimgalert:false});
      }
    
      if (!isPressedRed) {
        // Nếu chưa nhấn lần nào, thực hiện hiệu ứng lõm xuống
        this.setState({ isPressedRed: true });
      
        this.setState({  isimgalert:true});
      } else {
        // Nếu đã nhấn lần đầu, thực hiện hiệu ứng nổi lên
        this.setState({ isPressedRed: false, isOnRed: !isOnRed });
      }
    
    
    };

    handlePress_yellow = () => {
      const { isPressedYellow, isOnYellow } = this.state;

      this.setState((prevState) => ({
        isOnYellow: !prevState.isOnYellow,
        isPressedYellow:false,
      }));

      if(!isOnYellow)
      {
        this.send_data_webapi_alarm(6,1);
      }
      else
      {
        this.send_data_webapi_alarm(6,0);
      }
  /*     this.setState({ 
        isPressedRed: false,isOnRed:false,
        isPressedGreen: false,isOnGreen:false,
        isPressedBlue: false,isOnBlue:false
      }); */
    
      if(this.state.isPressedRed==false && this.state.isPressedBlue==false && this.state.isPressedGreen==false)
      {
        this.setState({  isimgalert:false});
      }

      if (!isPressedYellow) {
        // Nếu chưa nhấn lần nào, thực hiện hiệu ứng lõm xuống
        this.setState({ isPressedYellow: true });
        
        this.setState({  isimgalert:true});
      } else {
        // Nếu đã nhấn lần đầu, thực hiện hiệu ứng nổi lên
        this.setState({ isPressedYellow: false, isOnYellow: !isOnYellow });
      }
    
    };

    handlePress_blue = () => {
      const { isPressedBlue, isOnBlue } = this.state;
    
      this.setState((prevState) => ({
        isOnBlue: !prevState.isOnBlue,
        isPressedBlue:false,
      }));
    /*  this.setState({ 
        isPressedRed: false,isOnRed:false,
        isPressedGreen: false,isOnGreen:false,
        isPressedYellow: false,isOnYellow:false
      }); */
      if(!isOnBlue)
      {
        this.send_data_webapi_alarm(4,1);
      }
      else
      {
        this.send_data_webapi_alarm(4,0);
      }
      if(this.state.isPressedRed==false && this.state.isPressedYellow==false && this.state.isPressedGreen==false)
      {
        this.setState({  isimgalert:false});
      }

      if (!isPressedBlue) {
        // Nếu chưa nhấn lần nào, thực hiện hiệu ứng lõm xuống
        this.setState({ isPressedBlue: true });
        this.setState({  isimgalert:true});
      } else {
        // Nếu đã nhấn lần đầu, thực hiện hiệu ứng nổi lên
        this.setState({ isPressedBlue: false, isOnBlue: !isOnBlue });
      }
    
    };
    handlePress_green = () => {
      const { isPressedGreen, isOnGreen } = this.state;
    
      this.setState((prevState) => ({
        isOnGreen: !prevState.isOnGreen,
        isPressedGreen:false,
      }));
    /*   this.setState({ 
        isPressedRed: false,isOnRed:false,
        isPressedBlue: false,isOnBlue:false,
        isPressedYellow: false,isOnYellow:false
      }); */
      if(!isOnGreen)
      {
        this.send_data_webapi_alarm(5,1);
      }
      else
      {
        this.send_data_webapi_alarm(5,0);
      }
      if(this.state.isPressedRed==false && this.state.isPressedYellow==false && this.state.isPressedBlue==false)
      {
        this.setState({  isimgalert:false});
      }
      if (!isPressedGreen) {
        // Nếu chưa nhấn lần nào, thực hiện hiệu ứng lõm xuống
        this.setState({ isPressedGreen: true });
        this.setState({  isimgalert:true});
      } else {
        // Nếu đã nhấn lần đầu, thực hiện hiệu ứng nổi lên
        this.setState({ isPressedGreen: false, isOnGreen: !isOnGreen });
      }
    
    };
    render() {
      const { isPressedRed, isOnRed } = this.state;
      const { isPressedYellow, isOnYellow } = this.state;
      const { isPressedBlue, isOnBlue } = this.state;
      const { isPressedGreen, isOnGreen } = this.state;
      /* const { isPressedRed, isOn } = this.state;
      const { isPressedYellow, isOn } = this.state; */
      const buttonTextred = isOnRed ? "ON" : "OFF";
      const buttonTextyellow = isOnYellow ? "ON" : "OFF";
      const buttonTextblue= isOnBlue ? "ON" : "OFF";
      const buttonTextgreen = isOnGreen ? "ON" : "OFF";
      const { userData } = this.state;
      const isimgalert_c =this.state.isimgalert;
    
      return (
        <View style={styles.container}>
  <View style={styles.headerContent}>
        <Image style={styles.avatar}
            /* source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} 
            source={require('../../assets/img/alert3.gif')} */
            source={isimgalert_c ? require('../../assets/img/alert3.gif') : require('../../assets/img/alertnot.png')}

            />

            
          <Text style={styles.name} numberOfLines={2}>
          {userData.EmployeeName}
          </Text>
        </View>
          
          <View style={styles.row}>
          <View style={[styles.box, styles.padding]}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={this.handlePress_red}
              ref={(ref) => (this.buttonRef = ref)}
            >
              <View
                style={[styles.buttonRed, isPressedRed && styles.buttonPressed]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isPressedRed && styles.buttonTextPressed,
                  ]}
                >
                  {buttonTextred}
                </Text>

           

              </View>
              <Text style={styles.textUnderButton}> {userData.Red_Display}</Text> 
            </TouchableOpacity>
          </View>
      
          <View style={[styles.box, styles.padding]}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={this.handlePress_yellow}
              ref={(ref) => (this.buttonRef = ref)}
            >
              <View
                style={[
                  styles.buttonYellow,
                  isPressedYellow && styles.buttonPressed,
                ]}
              >
                <Text
                  style={[
                    styles.buttonText_black,
                    isPressedYellow && styles.buttonTextPressed,
                  ]}
                >
                  {buttonTextyellow}
                </Text>
              </View>
              <Text style={styles.textUnderButton}>{userData.Yellow_Display}</Text> 
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.row}>

          <View style={[styles.box, styles.padding]}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={this.handlePress_blue}
              ref={(ref) => (this.buttonRef = ref)}
            >
              <View
                style={[
                  styles.buttonBlue,
                  isPressedBlue && styles.buttonPressed,
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isPressedBlue && styles.buttonTextPressed,
                  ]}
                >
                  {buttonTextblue}
                </Text>
            
              </View>
              <Text style={styles.textUnderButton}>{userData.Blue_Display}</Text> 
            </TouchableOpacity>
          </View>
          <View style={[styles.box, styles.padding]}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={this.handlePress_green}
              ref={(ref) => (this.buttonRef = ref)}
            >
              <View
                style={[
                  styles.buttonGreen,
                  isPressedGreen && styles.buttonPressed,
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isPressedGreen && styles.buttonTextPressed,
                  ]}
                >
                  {buttonTextgreen}
                </Text>
              </View>
              <Text style={styles.textUnderButton}>{userData.Green_Display}</Text> 
            </TouchableOpacity>
          </View>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    textUnderButton: {
      textAlign: 'center',
      marginTop:10, // Khoảng cách từ chữ đến nút
      color: 'black',
      fontWeight: '800',
      fontSize: 22,
    },

    headerContent: {
      paddingTop: 20,
      alignItems: 'center',
    },
    name: {
      fontSize: 22,
      color:"black",
      fontWeight: '600',
    },
  
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 80,
      borderWidth: 4,
      borderColor: "white",
    
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  


    },
    row: {
      flexDirection: 'row',
      
      marginTop: 20, // Khoảng cách giữa các dòng */
  /*     marginBottom: 10, // Khoảng cách giữa các dòng */
    },
    box: {
  /*    /*  width: 170,
      height: 80, * */
  
    },

    buttonYellow: {
      width: 170,
      height: 170,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "yellow",
      /* backgroundColor: 'red',
      shadowColor: 'black', // Đặt màu đen cho độ bóng
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4, */
      shadowColor: "#fa8072",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 60,

      elevation: 8,
      borderToptWidth: 4,
      borderLefttWidth: 4,
      borderRightWidth: 4,
      borderRighColor: "#black",
      borderBottomWidth: 4, // Độ dày của border bottom
      borderBottomColor: "#black",
      zIndex: 1, // Để đè lên phần border-bottom
    
    },
    buttonRed: {
      width: 170,
      height: 170,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
      /* backgroundColor: 'red',
      shadowColor: 'black', // Đặt màu đen cho độ bóng
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4, */
      shadowColor: "#fa8072",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 60,

      elevation: 8,
      borderToptWidth: 4,
      borderRightWidth: 4,
      borderRighColor: "#black",
      borderBottomWidth: 4, // Độ dày của border bottom
      borderBottomColor: "#black",
      zIndex: 1, // Để đè lên phần border-bottom
      marginRight:15,
    },
    buttonGreen: {
      width: 170,
      height: 170,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "green",
      /* backgroundColor: 'red',
      shadowColor: 'black', // Đặt màu đen cho độ bóng
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4, */
      shadowColor: "#fa8072",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 60,

      elevation: 8,
      borderToptWidth: 4,
      borderRightWidth: 4,
      borderRighColor: "#black",
      borderBottomWidth: 4, // Độ dày của border bottom
      borderBottomColor: "#black",
      zIndex: 1, // Để đè lên phần border-bottom
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontSize: 40,
      color:"white",
      fontWeight: '800',
    
    },
    buttonText_black: {
      color: "black",
      textAlign: "center",
      fontSize: 40,
    
      fontWeight: '800',
    },
    buttonBlue: {
      width: 170,
      height: 170,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      /* backgroundColor: 'red',
      shadowColor: 'black', // Đặt màu đen cho độ bóng
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4, */
      shadowColor: "#fa8072",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 60,

      elevation: 8,
      borderToptWidth: 4,
      borderLefttWidth: 4,
      borderRightWidth: 4,
      borderRighColor: "#black",
      borderBottomWidth: 4, // Độ dày của border bottom
      borderBottomColor: "#black",
      zIndex: 1, // Để đè lên phần border-bottom
          marginRight:15,
    },

    buttonPressed: {
      shadowColor: "black", // Đặt màu đen cho độ bóng
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 0.1,
      borderRightWidth: 0,

      borderBottomWidth: 0, // Độ dày của border bottom

      zIndex: 1, // Để đè lên phần border-bottom
    },
    buttonTextPressed: {
      color: "white",
    },
  });
