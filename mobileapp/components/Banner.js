import React from 'react';

import { StyleSheet, Text, View,ImageBackground} from 'react-native';

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <ImageBackground source={require('../images/background.gif')} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.overlay}></View>
                <View style={styles.bannerBox}>
                    <Text style={styles.title}>Protecting Maize</Text>
                    <Text style={styles.subtitle}>Empowering Farmers with Smart Disease Detection</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerContainer:{
        marginVertical:18,
    },
    imageBackground: {
        width:'100%',
        height:150,
        borderRadius:10,
        overflow:'hidden',

    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'rgba(2,2,0,0.4)',
    },
    bannerBox:{
        position:'absolute',
        height:150,
        padding:10,
        width:'70%',
        justifyContent:'center',
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        marginVertical:5,
    },
    subtitle:{
        color:'white',
    }
})

export default Banner;
