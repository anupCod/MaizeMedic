import React, { useState } from 'react';
import { StyleSheet, View,Text, TextInput, TouchableHighlight,Alert } from 'react-native';
import Banner from '../components/Banner'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation()
    const {setLoginStatus} = useAuth()
    const [formData,setFormData] = useState({email:'',password:''})
    const [error,setError] = useState("")
    const handleChange = (name,value) => {
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = async() =>{
        try {
            const response =await axios.post('https://guiding-hamster-live.ngrok-free.app/api/accounts/login/',{
                email:formData.email,
                password:formData.password,
            },{
                headers:{'Content-Type':'application/json'}
            })
            const userData = response.data
            await AsyncStorage.setItem("user",JSON.stringify(userData))
            
            if(!response){
                Alert.alert("Not getting response data")
            }
            setLoginStatus(true)
            navigation.navigate('main')
            Alert.alert("Login successful!");
        } catch(error) {
            setError("Signup failed. Please try again")
            console.log('Error:', error); 
            Alert.alert("Error", error?.response?.data?.error || "An error occurred.");
        }
    }
    return (
        <View style={styles.loginContainer}>
            <Banner />
            <TextInput placeholder='Email or Username' style={styles.loginInput} value={formData.email} onChangeText={(value) => handleChange("email",value)}/>
            <TextInput placeholder='Password' style={styles.loginInput} value={formData.password} onChangeText={(value) => handleChange("password",value)} />
            <TouchableHighlight
                onPress={handleSubmit}
                underlayColor="#165904"
                style={styles.loginBtn}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
            <View style={styles.captionContent}>
                <Text style={styles.caption}>Don't have an account?</Text>
                <Text style={styles.strcaption} onPress={() => navigation.navigate('signup')}>Sign Up Here</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer:{
        paddingHorizontal:10,
    },
    loginInput:{
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:18,
        borderRadius:8,
        paddingLeft:12,
    },
    loginBtn:{
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 8,
        height:50,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight:'bold',
    },
    captionContent:{
        marginTop:9,
        flexDirection:"row",
        justifyContent:'center',
    },
    caption:{
        marginRight:4,
    },
    strcaption:{
        color:'green',
        fontWeight:'bold',
    }
})

export default Login;
