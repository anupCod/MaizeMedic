import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const About = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.mainHeader}>🌱 WELCOME TO MAIZEMEDIC 🌱</Text>
            <View style={styles.titleWithIcon}>
                <Text style={{fontSize:18}}>🧑‍🌾</Text>
                {/* <MaterialCommunityIcons name='star' size={30} color="orange" /> */}
                <Text style={styles.header}>About MaizeMedic</Text>
            </View>
            <Text style={styles.description}>
                MaizeMedic is a cutting-edge mobile application designed to help farmers, agricultural professionals, and researchers detect and classify maize diseases instantly using AI-powered image recognition. With just a photo of an affected maize leaf, our deep learning model analyzes the image and provides an accurate diagnosis along with treatment recommendations.
            </Text>
            <View style={styles.titleWithIcon}>
                <Text style={{fontSize:18}}>🌱</Text>
                {/* <MaterialCommunityIcons name='star' size={30} color="orange" /> */}
                <Text style={styles.header}>Why MaizeMedic?</Text>
            </View>
            <View>
                <Text style={styles.description}>
                    Maize is one of the world's most important crops, but diseases like Northern Leaf Blight, Common Rust, and Maize Streak Virus can significantly reduce yield if not managed early. Farmers often struggle with timely and accurate disease identification, leading to improper treatments and financial losses.
                    MaizeMedic bridges this gap by offering a fast, accurate, and easy-to-use solution, helping farmers detect diseases early, apply the right treatments, and maximize their harvests.
                </Text>
            </View>
            <View>
                <View style={styles.titleWithIcon}>
                    <Text style={{fontSize:18}}>🚀</Text>
                    {/* <MaterialCommunityIcons name='star' size={30} color="orange" /> */}
                    <Text style={styles.header}>Our Mission</Text>
                </View>
                <Text style={styles.description}>
                    At MaizeMedic, our mission is simple: to revolutionize agricultural practices by using cutting-edge technology to help farmers detect and manage maize diseases quickly and efficiently. With our AI-powered tool, we aim to ensure healthier crops, higher yields, and more sustainable farming practices across the globe.
                </Text>
            </View>
            <View style={styles.titleWithIcon}>
                <MaterialCommunityIcons name='cog' size={24} color="black" />
                <Text style={styles.header}>How It Works</Text>
            </View>
            <View style={{paddingHorizontal:12}}>
                <View style={{marginBottom:7}}>
                    <View style={styles.titleWithIcon}>
                        <Text style={{fontSize:16}}>📸</Text>
                        <Text style={styles.subheader}>Take a Photo</Text>
                    </View>
                    <Text style={styles.description}>Capture a clear image of the infected maize leaves.</Text>
                </View>
                <View style={{marginBottom:7}}>
                    <View style={styles.titleWithIcon}>
                        <Text style={{fontSize:16}}>🔼</Text>
                        <Text style={styles.subheader}>Upload the Image</Text>
                    </View>
                    <Text style={styles.description}>Upload the photo via the app for instant analysis.</Text>
                </View>
                <View style={{marginBottom:7}}>
                    <View style={styles.titleWithIcon}>
                        <Text style={{fontSize:16}}>🔬</Text>
                        <Text style={styles.subheader}>Diagnosis</Text>
                    </View>
                    <Text style={styles.description}>Our AI system processes the image and identifies the disease within seconds.</Text>
                </View>
                <View style={{marginBottom:7}}>
                    <View style={styles.titleWithIcon}>
                        <Text style={{fontSize:16}}>💬</Text>
                        <Text style={styles.subheader}>Recommendations</Text>
                    </View>
                    <Text style={styles.description}>Receive detailed information about the disease and suggested treatments to protect your crops.</Text>
                </View>
            </View>
            <View style={styles.titleWithIcon}>
                <Text style={{fontSize:18}}>🌟</Text>
                {/* <MaterialCommunityIcons name='star' size={30} color="orange" /> */}
                <Text style={styles.header}>Key Features</Text>
            </View>
            <View style={{paddingHorizontal:12}}>
                <View style={{marginBottom:7}}>
                    <View style={styles.titleWithIcon}>
                        <Text style={{fontSize:16}}>📸</Text>
                        <Text style={styles.subheader}>AI-Powered Disease Detection</Text>
                    </View>
                    <Text style={styles.description}>Uses advanced CNN-based deep learning models to identify diseases from leaf images.</Text>
                </View>
                <View style={{marginBottom:7}}>
                    <View style={styles.titleWithIcon}>
                        <Text style={{fontSize:16}}>⚡</Text>
                        <Text style={styles.subheader}>Real-Time Diagnosis</Text>
                    </View>
                    <Text style={styles.description}>Instant results so you can take action immediately to protect your crops.</Text>
                </View>
                <View style={{marginBottom:7}}>
                    <View style={styles.titleWithIcon}>
                        <Text style={{fontSize:16}}>📚</Text>
                        <Text style={styles.subheader}>Disease Information</Text>
                    </View>
                    <Text style={styles.description}>Learn about the symptoms, causes, and preventive measures for each detected disease.</Text>
                </View>
                <View style={{marginBottom:7}}>
                    <View style={styles.titleWithIcon}>
                        <Text style={{fontSize:16}}>💡</Text>
                        <Text style={styles.subheader}>Actionable Insights</Text>
                    </View>
                    <Text style={styles.description}>Get expert treatment advice for the identified disease to ensure effective management.</Text>
                </View>
                <View style={{marginBottom:7}}>
                    <View style={styles.titleWithIcon}>
                        <Text style={{fontSize:16}}>🧑‍🤝‍🧑</Text>
                        <Text style={styles.subheader}>Easy to Use</Text>
                    </View>
                    <Text style={styles.description}>Designed for farmers and agricultural workers, MaizeMedic is simple, intuitive, and easy to navigate.</Text>
                </View>
            </View>
            <Text style={styles.copyrightSec}>© 2025 MaizeMedic Team. All rights reserved.</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:8,
        marginBottom:'30',
    },
    mainHeader:{
        marginVertical:15,
        textAlign:'center',
        fontWeight:'800',
        fontSize:16,
    },
    header:{
        fontSize:18,
        fontWeight:'700',
        color:'green',
        marginVertical:8,
        marginHorizontal:4,
    },
    subheader:{
        fontSize:16,
        fontWeight:'500', 
    },
    description:{
        textAlign:'justify',
        marginHorizontal:6,
    },
    titleWithIcon:{
        flexDirection:'row',
        alignItems:'center'
    },
    copyrightSec:{
        marginVertical:10,
        textAlign:'center',
        fontWeight:'600',
        color:'blue',
    }
})

export default About;
