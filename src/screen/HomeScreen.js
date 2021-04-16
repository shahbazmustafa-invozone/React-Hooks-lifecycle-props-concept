import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
const HomeScreen = (props) => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
      <TouchableOpacity
        onPress={() =>
          dispatch({
            type: 'Car',
          })
        }>
        <Text>{'Car'}</Text>
      </TouchableOpacity>
      <Text>{counter.Vehicle.vehicle}</Text>
      <TouchableOpacity
        onPress={() => {
            dispatch({
              type: 'Bike',
            });
          }}>
        <Text>{'Bike'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {props.navigation.navigate("Login")}}>
        <Text>{'Move To Login'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {props.navigation.navigate("Hook")}}>
        <Text>{'Move To test the hooks'}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
