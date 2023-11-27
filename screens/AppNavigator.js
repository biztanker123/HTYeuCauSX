import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';



import LoginScreen from "./login/index";
import MainEmployee from "./mainEmployee/main";

const AppNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen, },
/*   SignupScreen: { screen: SignupScreen }, */
  MainEmployee: {screen:MainEmployee,},
});
export default AppNavigator;