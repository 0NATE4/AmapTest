/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { AMapSdk, MapView } from 'react-native-amap3d';
import { Platform, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

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
      <MapView
        style={styles.map}
        initialCameraPosition={{
          target: {
            latitude: 39.91095,
            longitude: 116.37296,
          },
          zoom: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
