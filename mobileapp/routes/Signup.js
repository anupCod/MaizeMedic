import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Alert } from 'react-native';
import Banner from '../components/Banner'
import axios from 'axios';

const Signup = ({navigation}) => {
    const [formData, setFormData] = useState({username: "", email: "", createdPassword: "", confirmedPassword: ""});
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        if (formData.createdPassword !== formData.confirmedPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            const payload = {
                username: formData.username,
                email: formData.email,
                createdPassword: formData.createdPassword,
                confirmedPassword: formData.confirmedPassword
            };
            
            console.log('Payload:', payload);  // Log the payload to ensure it is correct

            const response = await axios.post(
                'https://guiding-hamster-live.ngrok-free.app/api/accounts/signup/',
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            
            if (response.status === 201) {
                Alert.alert("Signup successful!");
                navigation.navigate('login');
            } else {
                Alert.alert("Error", "Signup failed. Please try again.");
            }
        } catch (error) {
            console.log('Error:', error);  // Log the full error response
            setError("Signup failed. Please try again");
            Alert.alert("Error", error?.response?.data?.error || "An error occurred.");
        }
    };

    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
    };

    return (
        <View style={styles.signContainer}>
            <Banner />
            <TextInput placeholder='Username' style={styles.signupInput} value={formData.username} onChangeText={(value) => handleChange("username", value)} />
            <TextInput placeholder='Email' style={styles.signupInput} value={formData.email} onChangeText={(value) => handleChange("email", value)} />
            <TextInput placeholder='Create Password' style={styles.signupInput} value={formData.createdPassword} onChangeText={(value) => handleChange("createdPassword", value)} />
            <TextInput placeholder='Confirm Password' style={styles.signupInput} value={formData.confirmedPassword} onChangeText={(value) => handleChange("confirmedPassword", value)} />
            <TouchableHighlight onPress={handleSubmit} underlayColor="#165904" style={styles.signupBtn}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableHighlight>
            <View style={styles.captionContent}>
                <Text style={styles.caption}>Already have an account?</Text>
                <Text style={styles.strcaption} onPress={() => navigation.navigate('login')}>Login Here</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    signContainer: {
        paddingHorizontal: 10,
    },
    signupInput: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 14,
        borderRadius: 8,
        paddingLeft: 12,
    },
    signupBtn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    captionContent: {
        marginTop: 9,
        flexDirection: "row",
        justifyContent: 'center',
    },
    caption: {
        marginRight: 4,
    },
    strcaption: {
        color: 'green',
        fontWeight: 'bold',
    }
});

export default Signup;
