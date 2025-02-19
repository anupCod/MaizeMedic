import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { useImage } from '../context/ImageContext';
import axios from 'axios';

const PredictImg = () => {
    const {imageUri} = useImage()
    const [prediction,setPrediction] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchPrediction = async () => {
            if (!imageUri) {
                alert("No image Selected!")
                return
            }
            
            try {
                const formData = new FormData()
                formData.append("image",{
                    uri:imageUri,
                    name:"maize_leaf.jpg",
                    type:"image/jpeg",
                })
                
                const response = await axios.post("https://guiding-hamster-live.ngrok-free.app/api/predict/",formData,{
                    headers:{"Content-Type":"multipart/form-data"},
                })
                console.log(response.data)
                setPrediction(response.data)
            } catch (error) {
                console.error("Error fetching prediction:",error)
                alert("Failed to get Prediction")
            } finally {
                setLoading(false)
            }
        }
        fetchPrediction()
    },[imageUri])

    return (
        <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 15,paddingVertical:20}}>
            {imageUri && <Image source={{ uri: imageUri }} style={{ width: 180, height: 180,borderRadius:90, marginBottom: 15 }} />}
            
            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : (
                prediction && (
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:20}}>
                            <Text style={styles.mainheader}>Prediction:</Text>
                            <Text style={styles.predictedValue}>{prediction[0]?.predicted_class}</Text>
                        </View>
                        <View>
                            <Text style={styles.header}>Prevention:</Text>
                            <Text style={styles.predictedDesc}>{prediction[1]?.prevention}</Text>
                        </View>
                        <View>
                            <Text style={styles.header}>Symptoms:</Text>
                            <Text style={styles.predictedDesc}>{prediction[1]?.symptoms}</Text>
                        </View>
                        <View>
                            <Text style={styles.header}>Treatment:</Text>
                            <Text style={styles.predictedDesc}>{prediction[1]?.treatment}</Text>
                        </View>
                    </View>
                )
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    mainheader:{
        color:'green',
        fontSize:18,
        fontWeight:'bold',
    },
    header:{
        color:'green',
        fontSize:18,
        fontWeight:600,
        marginBottom:5,
    },
    predictedValue:{
        fontSize:18,
        marginLeft:4,
    },
    predictedDesc:{
        marginBottom:15,
        textAlign:'justify',
        fontSize:15,
    }
})

export default PredictImg;
