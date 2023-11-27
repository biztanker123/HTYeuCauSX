import React, { Component } from "react";
/* import React, { useState } from 'react'; */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { NavigationContext } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as CodeLibrary from "../../components/Codelibrary.js";
import dashboard from "./fetchcall";
/* import path from "../../source/config.json"; */
import { saveConfig, readConfig } from '../../source/config';

import { ConstantClass } from "../../components/ConstantFile.js";

export default class Login extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showsaveAPI: false,
      showConfig: true,
      textname: "",
      isLoading: false,
      serverUrl: '',
    };
  }

  componentDidMount() {
    this.fetchServerUrl();
  }

  fetchServerUrl = async () => {
    const serverUrl = await readConfig();
    this.setState({ serverUrl });
    const jsonValue = await AsyncStorage.getItem('userData');
    if (jsonValue !== null) {
      this.context.navigate("Main");
    }
  };

  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlepassword = (text) => {
    this.setState({ password: text });
  };

  handleSendUserData = async () => {

    const chkemail = this.state.email;
    const chkpass = this.state.password;
    console.log("1"+this.serverUrl);
    try {
      const userData = {
        UserName: chkemail, // <= can return this value on server
        EmployeeName: "", // <= can return this value on server
        Password: chkpass, // <= can return this value on server
        WorkCenter: "", // <= can return this value on server
        WorkCenterName: "", // <= can return this value on server
        WorkShift: "", // <= can return this value on server
        WorkShiftName: "", // <= can return this value on server
        WorkShop: "", // <= can return this value on server
        WorkShopname: "", // <= can return this value on server
        WorkShiftPlace: "", // <= can return this value on server
        WorkShiftPlaceName: "", // <= can return this value on server
        Check_Enbale: 0, // <= can return this value on server
        T_Mess: "", // <= can return this value on server

        Red_Display: "", // <= can return this value on server
        Yellow_Display: "", // <= can return this value on server
        Blue_Display: "", // <= can return this value on server
        Green_Display: "", // <= can return this value on server

      };

      this.setState({ isLoading: true });

      // Sử dụng hàm sendUserData từ CodeLibrary

      const responseData = await CodeLibrary.sendUserData(userData);

      if (responseData && typeof responseData === "string") {
        let jsonObject = {};
        try {
          jsonObject = JSON.parse(responseData);
          console.log(jsonObject.Check_Enbale); // Truy cập thuộc tính Check_Enbale
          // ... và truy cập các thuộc tính khác tại đây

          if (jsonObject.Check_Enbale == 1) {
            /*       AsyncStorage.setItem("loginid", jsonObject.UserName);
             AsyncStorage.setItem('userData', jsonObject); */
            await AsyncStorage.setItem("userData", JSON.stringify(jsonObject));
            this.context.navigate("Main");
          } else {
            const mess = jsonObject.T_Mess;
            Alert.alert(
              "THÔNG BÁO",
              mess,
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            );
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.error("Invalid JSON format:", responseData);
      }
    } catch (error) {
      console.error("Error sending user data:", error);
      // Xử lý lỗi nếu cần
    } finally {
      this.setState({ isLoading: false });
    }

  };

  _onloginID(item) {
    const chkemail = this.state.email;
    const chkpass = this.state.password;
    let responseAPI = "";
    if (chkemail != "" && chkemail != "9999") {
      /*  CodeLibrary.CheckUserID(chkemail, chkpass); */
    } else if (chkemail == "9999") {
      AsyncStorage.setItem("loginid", "9999");

      ConstantClass.Email = chkemail;

      /*  this.props.navigation.navigate("mainE"); */
      this.context.navigate("Main");
    } else
      Alert.alert(
        "THÔNG BÁO",
        "Xin Vui Lòng Đăng Nhập Mã NV!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
  }

  

  saveValueFunction = async () => {
    let webAPI = await AsyncStorage.getItem("webAPI");

    if (!webAPI || webAPI === "") {
      AsyncStorage.setItem("webAPI", path.SERVER_URL);
      webAPI = await AsyncStorage.getItem("webAPI");
    }
    const config = await readConfig();
  
    // Thay đổi cấu hình (ví dụ: SERVER_URL)
    config.SERVER_URL = webAPI;
    await saveConfig(config);

    this.state.textname = webAPI;
  };
  btnShowSave = () => {
    this.setState({ showsaveAPI: true, showConfig: false });
  };
  btnSave = () => {
    
    const tmpAPI = this.state.textname;
    AsyncStorage.setItem("webAPI", tmpAPI);

    this.setState({ showsaveAPI: false, showConfig: true });
  };
  btnDefault = () => {
    this.state.textname =this.state.serverUrl;
    AsyncStorage.setItem("webAPI", this.state.serverUrl);
   
    this.setState({ showsaveAPI: false, showConfig: true });
  };
  handleText = (text) => {
    this.state.textname = text;
    const tmpAPI = this.state.textname;
  };
  /*end code edit API */
  render() {
    /* const [userid, onChangeText] = React.useState(''); */
    this.saveValueFunction();
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={require("../../assets/img/backupgroupdms1.jpg")}
        />
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="User Name"
                underlineColorAndroid="transparent"
                onChangeText={this.handleEmail}
              />
              <Image style={styles.inputIcon} source={require("./email.png")} />
            </View>
            <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={this.handlepassword}
          />
          <Image style={styles.inputIcon} source={require("./key.png")} />
          </View>
          <View>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            /* navigation={navigation} */
            /*  onPress={this._onloginID.bind(this)} */
            onPress={this.handleSendUserData}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          {this.state.showConfig && (
          <TouchableOpacity
            /*  onPress={btnShowSave} */
            onPress={this.btnShowSave}
            style={[styles.buttonContainer, styles.loginButton]}
          >
            <Text style={styles.loginText}> Edit Config</Text>
          </TouchableOpacity>
        )}
         {this.state.showsaveAPI && (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="User Name"
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.handleText(text)}
                defaultValue={this.state.textname}
              />
              {/*   <Image style={styles.inputIcon} source={require("./email.png")} /> */}
            </View>
            <TouchableOpacity
              /*  onPress={saveFile} */
              onPress={() => this.btnSave()}
              style={[styles.buttonContainer, styles.loginButton]}
            >
              <Text style={styles.loginText}> Save Config</Text>
            </TouchableOpacity>

            <TouchableOpacity
              /*  onPress={saveFile} */
              onPress={() => this.btnDefault()}
              style={[styles.buttonContainer, styles.loginButton]}
            >
              <Text style={styles.loginText}> Defult Config</Text>
            </TouchableOpacity>
          </View>
        )}
        </View>
        
          </View>
        )}
      </View>
    );
  }
}

const resizeMode = "center";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10,
    width: 300,
    backgroundColor: "transparent",
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
