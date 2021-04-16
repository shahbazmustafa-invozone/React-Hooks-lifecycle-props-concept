import React,{createContext} from 'react';
import AppContainer from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Vehicle from './src/store/vehicle';
import Login from './src/store/Login';
import Storage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
const reducer = combineReducers({
  Vehicle,
  Login,
});
const persistConfig={
  key:"root",
  storage:Storage,
  // whitelist:["Vehicle"],
  // blacklist: [
  //   'Login',
  // ],
}
const pReducer=persistReducer(persistConfig,reducer)


let store = createStore(pReducer,applyMiddleware(thunkMiddleware));
let persistor = persistStore(store);

const ThemeContext = createContext('light');

// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const App = () => {
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeContext.Provider value="dark">
      <AppContainer />
      </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
};
export default App;
