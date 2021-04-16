import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from "../screen/LoginScreen";
import HookScreen from "../screen/HookScreen";

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Hook' component={HookScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
