/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { AMapSdk } from 'react-native-amap3d';
import { Platform, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NewAppScreen } from '@react-native/new-app-screen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (Platform.OS === 'android') {
      AMapSdk.init('e676248d5eb741c3f18e4d92bd1e3f96');
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
