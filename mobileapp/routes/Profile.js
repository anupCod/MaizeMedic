import React,{useEffect, useState} from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const {user} = useAuth()
    const account = {
        imgUrl:require('../images/youtubeprofile.png'),
    }
    return (
        <View style={styles.profileContainer}> 
            <View style={styles.profileDetail}>
                <Image source={account.imgUrl} style={styles.profilePic}/>
                <Text style={{color:'white',fontSize:17,fontWeight:'bold',marginBottom:5,}}>{user?.username}</Text>
                <Text style={{color:'white',fontSize:16,letterSpacing:0.6,}}>{user?.email}</Text>
            </View>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Account clicked')}>
                <MaterialCommunityIcons name="account" style={styles.menuIcon} size={30} color="blue" />
                <Text style={styles.menuText}>Account Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Account clicked')}>
                <MaterialCommunityIcons name="cog" style={styles.menuIcon}  size={30} color="black" />
                <Text style={styles.menuText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('History clicked')}>
                <MaterialCommunityIcons name="history" style={styles.menuIcon} size={30} color="tomato" />
                <Text style={styles.menuText}>Manage History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutItem}>
                <MaterialCommunityIcons name="logout" style={styles.menuIcon} size={24} color="white" />
                <Text style={{color:'white',fontWeight:'bold'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer:{
        flex:1,
        alignItems:'center',
    },
    profileDetail:{
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'40%',
        borderBottomLeftRadius:45,
        borderBottomRightRadius:45,
        marginBottom:40,
    },
    profilePic:{
        height:80,
        width:80,
        borderRadius:50,
        borderWidth:2,
        borderColor:'white',
        marginBottom:20,
    },
    menuItem:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        marginBottom:20,
        height:50,
        width:'90%',
        shadowOffset: { width: -1, height: -1 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
    
        elevation: 6, // Android
        shadowColor: '#b8b9be',
    },
    menuIcon:{
        marginHorizontal:10,
    },
    logoutItem:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'green',
        marginTop:20,
        height:50,
        width:'98%',
        borderRadius:20,
        justifyContent:'center',
    },
    menuText: {
        fontSize: 14,
        fontWeight:'600',
    },
})

export default Profile;
