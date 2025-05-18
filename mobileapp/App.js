import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SplashHomeScreen from './components/SplashHomeScreen';
import AuthNavigator from './navigation/AuthNavigator';
import { AuthProvider } from './context/AuthContext';
import { ImageStateProvider } from './context/ImageContext';
import { HistoryProvider } from './context/HistoryContext';
import { useFonts } from 'expo-font';
import {Poppins_400Regular, Poppins_700Bold,Poppins_600SemiBold, Poppins_500Medium} from '@expo-google-fonts/poppins'
import {Roboto_400Regular} from '@expo-google-fonts/roboto'
import {Lato_400Regular} from '@expo-google-fonts/lato'

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Roboto_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Lato_400Regular,
    Poppins_500Medium,
  })

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 5000);
  }, []);

  if (!appLoaded || !fontsLoaded) {
    return <SplashHomeScreen />;
  }

  

  return (
    <AuthProvider>
      <ImageStateProvider>
        <HistoryProvider>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <NavigationContainer>
                <StatusBar style="dark" />
                <AuthNavigator />
              </NavigationContainer>
            </SafeAreaView>
          </SafeAreaProvider>
        </HistoryProvider>
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
