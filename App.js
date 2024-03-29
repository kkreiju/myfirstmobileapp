import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import ucImage from './pictures/uclogo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>UC LOGINNN</Text>
      <Image source={ucImage} style={{ width: 300, height: 150 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
