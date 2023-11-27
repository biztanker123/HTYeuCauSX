import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TLogin from "./screens/login/index";
import TMain  from "./screens/mainEmployee/main";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
 
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={TLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Main" component={TMain}  options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
/*   <View style={styles.container}>
    <Login></Login>
  </View> */
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
})