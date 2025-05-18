import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'
import { useImage } from '../context/ImageContext';
import { globalStyles } from '../styles';


const Profile = () => {
    const navigation = useNavigation()
    const { user, handleLogout } = useAuth()
    const { profileUri, setProfileUri } = useImage()
    const account = {
        imgUrl: require('../images/youtubeprofile.png'),
    }
    useEffect(() => {
        const requestPermissions = async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Required', 'Permission to access the media library is required!');
            }
        };
        requestPermissions();
    }, []);

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'images', // Only allow images
                quality: 1, // Maximum quality
            });
            if (!result.canceled) {
                setProfileUri(result.assets[0].uri);  // Set the URI of the selected image
            }
        } catch (err) {
            console.error('Error picking image: ', err);
        }
    };

    const handleLogoutPress = async () => {
        try {
            await handleLogout()
            navigation.navigate('main'); // Navigate to the main screen
            Alert.alert("Logged out successfully!");
        } catch (error) {
            Alert.alert('Logout failed');
        }
    };

    return (
        <>
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'lightgrey'}}>
                <TouchableOpacity style={{ flexDirection: "row",alignItems:'center',paddingVertical:3 }} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" size={30} style={{ color: 'blue' }} />
                        <Text style={[globalStyles.extraText, { fontSize: 17, color: 'blue', fontWeight: '500' }]}>Back</Text>
                </TouchableOpacity>
                <Text style={[globalStyles.heading,{position:'absolute',left:'35%',color:'black',fontWeight:'600'}]}>Account Profile</Text>
            </View>
            <View style={styles.profileContainer}>
                
                <View style={styles.profileDetail}>
                    <TouchableOpacity onPress={pickImage}>
                        <Image source={profileUri ? { uri: profileUri } : account.imgUrl} style={styles.profilePic} />
                    </TouchableOpacity>
                    <Text style={[globalStyles.heading, { color: 'white' }]}>{user?.username}</Text>
                    <Text style={[globalStyles.extraText, { color: 'white' }]}>{user?.email}</Text>
                </View>
                <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Account clicked')}>
                    <MaterialCommunityIcons name="account" style={styles.menuIcon} size={22} color="blue" />
                    <Text style={styles.menuText}>Account Information</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialCommunityIcons name="cog" style={styles.menuIcon} size={22} color="black" />
                    <Text style={styles.menuText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => {
                    navigation.navigate('Analytics')
                }}>
                    <MaterialCommunityIcons name="chart-line" style={styles.menuIcon} size={22} color="tomato" />
                    <Text style={styles.menuText}>Prediction Analytics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutItem} onPress={handleLogoutPress}>
                    <MaterialCommunityIcons name="logout" style={styles.menuIcon} size={20} color="white" />
                    <Text style={[globalStyles.extraText, { color: 'white' }]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignItems: 'center',
    },
    profileDetail: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '40%',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        marginBottom: 40,
    },
    profilePic: {
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 13,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
        height: 48,
        width: '90%',
        shadowOffset: { width: -1, height: -1 },
        shadowOpacity: 0.7,
        shadowRadius: 3,

        elevation: 6, // Android
        shadowColor: '#b8b9be',
    },
    menuIcon: {
        marginHorizontal: 10,
    },
    logoutItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        marginTop: 10,
        height: 45,
        width: '96%',
        borderRadius: 20,
        justifyContent: 'center',
    },
    menuText: {
        fontSize: 13,
        fontFamily: 'Poppins_500Medium',
    },
})

export default Profile;
