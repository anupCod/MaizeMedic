import React from 'react';
import { TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Let's connect through <Text style={styles.appTitle}>MaizeMedic</Text>
            </Text>
            <View style={styles.iconContainer}>
                <FontAwesome name="facebook" size={23} color="#3b5998" style={styles.icon}  />
                <FontAwesome name="whatsapp" size={30} color="#25D366" style={styles.icon}  />
                <FontAwesome name="envelope" size={26} color="#D44638" style={styles.icon}  />
                <FontAwesome name="twitter" size={30} color="#1DA1F2"  style={styles.icon} />
            </View>
            <Text style={styles.caption}>Or,</Text>
            <TextInput placeholder='Name' style={styles.formInput}/>
            <TextInput placeholder='Email' style={styles.formInput}/>
            <TextInput
                placeholder="Anything to ask...?"
                multiline={true}
                style={styles.textarea}
            />
            <TouchableHighlight
                underlayColor="#165904"
                style={styles.submitBtn}
            >
                <Text style={styles.btnText}>Submit Now</Text>
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
        fontSize: 18,
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
        marginBottom:20,
        borderRadius:10,
        paddingLeft:10,
    },
    textarea:{
        borderWidth:1,
        borderColor:'gray',
        height:150,
        borderRadius:7,
        marginBottom:20,
        paddingHorizontal:12,
    },
    submitBtn:{
        borderWidth:1,
        borderColor:'gray',
        height:50,
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
