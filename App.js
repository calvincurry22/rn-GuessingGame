import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
// left off at 3:55

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
