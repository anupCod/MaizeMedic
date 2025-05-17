import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableHighlight } from 'react-native';
import Banner from '../components/Banner'
import * as ImagePicker from 'expo-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import NavbarTop from '../components/NavbarTop';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useImage } from '../context/ImageContext';

const HomeScreen = () => {
    const navigation = useNavigation()
    const {loginStatus} = useAuth()
    const {imageUri, setImageUri} = useImage();
    useEffect(() => {
        // Request camera roll permission on component mount
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
                setImageUri(result.assets[0].uri);  // Set the URI of the selected image
            }
        } catch (err) {
            console.error('Error picking image: ', err);
        }
    };

    

    return (
        <View style={styles.homeContainer}>
            <NavbarTop />
            <Banner />
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                {imageUri ? (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
                    </View>
                ) : (
                    <View style={styles.imagePreview}>
                        <Icon name="cloud-upload" size={50} color="green" />
                        <Text>No file choosen yet..</Text>
                    </View>
                )}

                {
                    loginStatus ? (
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableHighlight
                                onPress={pickImage}
                                underlayColor="#165904"
                                style={styles.HomeBtn}
                            >
                                <Text style={styles.buttonText}>Pick a Image</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => navigation.navigate('predictImg')}
                                underlayColor="#165904"
                                style={styles.HomeBtn}
                            >
                                <Text style={styles.buttonText}>Predict Now</Text>
                            </TouchableHighlight>
                        </View>
                    ) :
                    (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableHighlight
                                onPress={pickImage}
                                underlayColor="#165904"
                                style={styles.HomeBtn}
                            >
                                <Text style={styles.buttonText}>Pick a Image</Text>
                            </TouchableHighlight>
                        </View>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        paddingHorizontal: 10,
    },
    fileInfo: {
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    fileText: {
        fontSize: 16,
    },
    imageContainer: {
        marginTop: 0,
        alignItems: 'center', 
    },
    imagePreview: {
        width: 210,
        height: 210,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        backgroundColor:'lightgrey',
    },
    HomeBtn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 8,
        height: 44,
        width: 120,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default HomeScreen;
