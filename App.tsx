/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { AMapSdk, MapView } from 'react-native-amap3d';
import { Platform, StatusBar, StyleSheet, useColorScheme, View, TextInput, TouchableOpacity } from 'react-native';

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
      
      {/* Search Bar Overlay */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for places..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.searchButton}>
            <View style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
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
  searchContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007AFF',
  },
});

export default App;
