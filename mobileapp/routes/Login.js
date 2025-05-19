import React, { useState } from 'react';
import { StyleSheet, View,Text, TextInput, TouchableHighlight,Alert, TouchableOpacity } from 'react-native';
import Banner from '../components/Banner'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = () => {
    const navigation = useNavigation()
    const {setLoginStatus,setUser} = useAuth()
    const [formData,setFormData] = useState({email:'',password:''})
    const [error,setError] = useState("")
    const handleChange = (name,value) => {
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = async() =>{
        try {
            await AsyncStorage.removeItem("user");
            const response =await axios.post('https://3b12-103-224-106-14.ngrok-free.app/api/accounts/login/',{
                email:formData.email,
                password:formData.password,
            },{
                headers:{'Content-Type':'application/json'}
            })
            if(!response){
                Alert.alert("Not getting response data")
            }
            const userData = response.data
            await AsyncStorage.setItem("user",JSON.stringify(userData))
            setUser(userData)
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
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={{ flexDirection: "row",alignItems:'center',paddingVertical:3 }} onPress={() => navigation.navigate('main')}>
                        <MaterialCommunityIcons name="chevron-left" size={30} style={{ color: 'blue' }} />
                        <Text style={[globalStyles.extraText, { fontSize: 17, color: 'blue', fontWeight: '500' }]}>main</Text>
                </TouchableOpacity>
                <Text style={[globalStyles.heading,{position:'absolute',left:'45%',color:'black',fontWeight:'600'}]}>Login</Text>
            </View>
            <Banner />
            <TextInput placeholder='Email or Username' style={styles.loginInput} value={formData.email} onChangeText={(value) => handleChange("email",value)}/>
            <TextInput placeholder='Password' style={styles.loginInput} value={formData.password} onChangeText={(value) => handleChange("password",value)} />
            <TouchableHighlight
                onPress={handleSubmit}
                underlayColor="#165904"
                style={styles.loginBtn}
            >
                <Text style={[globalStyles.extraText,{color:'white'}]}>Login</Text>
            </TouchableHighlight>
            <View style={styles.captionContent}>
                <Text style={globalStyles.body}>Don't have an account?</Text>
                <Text style={[globalStyles.body,styles.strcaption]} onPress={() => navigation.navigate('signup')}>Sign Up Here</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer:{
        paddingHorizontal:10,
    },
    loginInput:{
        height: 48,
        fontFamily:'Roboto_400Regular',
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
        height:45,
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
        color:'blue',fontWeight:400,borderBottomColor:'blue',borderBottomWidth:1,marginHorizontal:2
    }
})

export default Login;
