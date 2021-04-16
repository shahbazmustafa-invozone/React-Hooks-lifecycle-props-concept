import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity,TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {login} from "../Redux/Api"
const LoginScreen = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
      <TextInput
       placeholder='Enter username'
       value={username}
       onChangeText={(text) => setUsername(text)}
      />
      <TextInput
      placeholder='Enter password'
      secureTextEntry={true}
      value={password}
      onChangeText={(text) => setPassword(text)}
      />
      <Text style={{color:"red"}}>{counter.Login.id}</Text>
      <TouchableOpacity
        onPress={() => {dispatch(login(username,password))}}>
        <Text>{'Sign In'}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;