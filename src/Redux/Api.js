import {Alert} from 'react-native';
import {setLoginState} from "./action"
export const login = (loginInput) => {
  const {username, password} = loginInput;
  return (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(setLoginState({ ...json, userId: username })); // our action is called here
          alert(json)
        console.log(json);
      })
      .catch((err) => {
        Alert.alert('Login Failed', 'Some error occured, please retry');
        console.log(err);
      });
  };
};