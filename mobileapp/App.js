import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SplashHomeScreen from './components/SplashHomeScreen';
import AuthNavigator from './navigation/AuthNavigator';
import { AuthProvider } from './context/AuthContext';
import { ImageStateProvider } from './context/ImageContext';

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 5000);
  }, []);

  if (!appLoaded) {
    return <SplashHomeScreen />;
  }

  return (
    <AuthProvider>
      <ImageStateProvider>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <NavigationContainer>
              <StatusBar style="dark" />
              <AuthNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageStateProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenContainer: {
    flex: 1, // Ensures that screens take available space above the Navbar
    paddingBottom: 60, // Prevents content from being hidden behind the Navbar
  },
});
