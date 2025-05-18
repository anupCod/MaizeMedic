import React,{useEffect} from 'react';
import { StyleSheet, View ,Image,Text} from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import { globalStyles } from '../styles';

const SplashHomeScreen = () => {
    useEffect(() => {
        SplashScreen.preventAutoHideAsync()
        setTimeout(async ()=> {
            await SplashScreen.hideAsync()
        },2000)
    },[])
    return (
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.icon} />
            <Text style={[globalStyles.heading,styles.appName]}>MaizeMedic</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#388044',
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    appName: {
        fontSize: 24,
        color: 'white',
        fontWeight:'700',
    },
})

export default SplashHomeScreen;
