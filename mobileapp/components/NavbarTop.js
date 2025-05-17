import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

const NavbarTop = () => {
    const navigation = useNavigation()
    const {loginStatus,user} = useAuth()
    
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../images/logo.png')} style={styles.iconImg} />
                <Text style={styles.imgText}>{loginStatus ? `Hi,${user?.username}` :''}</Text>
            </View>

            {
                loginStatus ?
                (
                    <View style={styles.iconContainer}>
                        <FontAwesome name='globe' size={25} color='black' style={styles.icon} />
                        <FontAwesome name='bell' size={25} color='black' style={styles.icon} />
                        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                            <Image source={require('../images/youtubeprofile.png')} style={styles.Image} />
                        </TouchableOpacity>
                    </View>
                ) :
                (
                    <View style={styles.loginContain}>
                        <FontAwesome name='user' size={25} color='black' style={styles.loginicon} />
                        <Button
                            title="Login"
                            color="green"
                            accessibilityLabel="Learn more about this purple button"
                            style={styles.BtnIcon}
                            onPress={() => navigation.navigate('login')}
                        />
                    </View>
                )
            }
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:6,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    icon:{
        marginRight:14,
    },
    loginicon:{
        marginRight:2,
    },
    iconImg:{
        width:37,
        height:37,
        borderRadius:50,
        marginRight:10,
    },
    Image:{
        width:37,
        height:37,
        borderRadius:50,
        borderWidth:2,
        borderColor:'green',
    },
    imgText:{
        fontWeight:'bold',
        color:'green',
        fontSize:18,
    },
    loginContain:{
        flexDirection:'row',
        alignItems:'center',
    }
})

export default NavbarTop;
