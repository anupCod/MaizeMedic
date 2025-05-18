import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import { globalStyles } from '../styles';

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <ImageBackground source={require('../images/background.gif')} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.overlay}></View>
                <View style={styles.bannerBox}>
                    <Text style={[globalStyles.heading,styles.title]}>Protecting Maize</Text>
                    <Text style={[globalStyles.body,styles.subtitle]}>Empowering Farmers with Smart Disease Detection</Text>
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
        padding:13,
        width:'80%',
        justifyContent:'center',
    },
    title:{
        color:'white',
        marginVertical:1
    },
    subtitle:{
        color:'white',
        fontSize:13,
    }
})

export default Banner;
