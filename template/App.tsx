/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React,{useEffect} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import './_mock_/profile';
import axios from './Utilities/axios';

const App = () => {

  useEffect( () =>{
    axios.get("https://randomuser.me/api/").then(res=>{console.log(res.data)}).catch(error=>{console.log("its demo")});
  },[])
  return (
  <View>
     
  </View>)
};

const styles = StyleSheet.create({

});

export default App;
