import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text>Go to chat screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
