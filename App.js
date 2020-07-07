import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <MyStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
