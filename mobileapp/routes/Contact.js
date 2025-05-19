import { Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { globalStyles } from '../styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
    const navigation = useNavigation()
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        message:'',
    })
    const handleChange = (field,value) => {
        setFormData(prev => ({
            ...prev,
            [field]:value,
        }))
    }
    const handleSubmit = async () => {
        const {name,email,message} = formData
        if(!name || !email || !message){
            Alert.alert('Error',"All fields are required")
            return 
        }
        try {
            const response = await fetch('https://3b12-103-224-106-14.ngrok-free.app/api/contact/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    name,email,message,
                })
            })
            if (response.ok){
                Alert.alert('Success','Message Sent Successfully')
                setFormData({name:'',email:'',message:''})
            }else{
                Alert.alert('Error','Something went wrong')
            }
        } catch(error) {
            Alert.alert('Failed to Connect Server')
        }
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={{ flexDirection: "row",alignItems:'center',paddingVertical:3 }} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" size={30} style={{ color: 'blue' }} />
                        <Text style={[globalStyles.extraText, { fontSize: 17, color: 'blue', fontWeight: '500' }]}>profile</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={styles.header}>
                Let's connect through <Text style={[globalStyles.heading,{color:'green'}]}>MaizeMedic</Text>
            </Text>
            <View style={styles.iconContainer}>
                <FontAwesome name="facebook" size={23} color="#3b5998" style={styles.icon}  />
                <FontAwesome name="whatsapp" size={30} color="#25D366" style={styles.icon}  />
                <FontAwesome name="envelope" size={26} color="#D44638" style={styles.icon}  />
                <FontAwesome name="twitter" size={30} color="#1DA1F2"  style={styles.icon} />
            </View>
            <Text style={styles.caption}>Or,</Text>
            <TextInput placeholder='Name' style={styles.formInput} value={formData.name} onChangeText={text => handleChange('name',text)} />
            <TextInput placeholder='Email' style={styles.formInput} value={formData.email} onChangeText={text => handleChange('email',text)} />
            <TextInput
                placeholder="Anything to ask...?"
                multiline={true}
                value={formData.message}
                onChangeText={text => handleChange('message',text)}
                style={styles.textarea}
            />
            <TouchableHighlight
                underlayColor="#165904"
                style={styles.submitBtn}
                onPress={handleSubmit}
            >
                <Text style={[globalStyles.extraText,{color:'white'}]}>Submit Now</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       paddingHorizontal:10,
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    icon:{
        marginLeft:19,
    },
    header: {
        fontSize: 16,
        fontFamily:'Lato_500Medium',
        textAlign:'center',
        marginVertical:18,
    },
    caption:{
        textAlign:'center',
        marginBottom:16,
        fontWeight:'bold',
    },
    appTitle: {
        color: 'green',
        fontWeight: 'bold',
    },
    formInput:{
        height:45,
        borderWidth:1,
        borderColor:'gray',
        fontFamily:'Roboto_400Regular',
        marginBottom:20,
        borderRadius:10,
        paddingLeft:10,
    },
    textarea:{
        borderWidth:1,
        borderColor:'gray',
        height:140,
        borderRadius:7,
        marginBottom:20,
        paddingHorizontal:12,
        fontFamily:'Roboto_400Regular',
    },
    submitBtn:{
        borderWidth:1,
        borderColor:'gray',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green',
        borderRadius:12,
    },
    btnText:{
        color:'white',
        fontWeight:'bold',
    },
})

export default Contact;
