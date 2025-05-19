import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { useImage } from '../context/ImageContext';
import axios from 'axios';
import { useHistory } from '../context/HistoryContext';
import { globalStyles } from '../styles';

const PredictImg = () => {
    const {imageUri} = useImage()
    const {addHistory} = useHistory()
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
                
                const response = await axios.post("https://3b12-103-224-106-14.ngrok-free.app/api/predict/",formData,{
                    headers:{"Content-Type":"multipart/form-data"},
                })
                console.log(response.data)
                setPrediction(response.data)
                // Add history after prediction is fetched
                if (response.data) {
                    addHistory({
                        date : new Date().toISOString().split('T')[0],
                        time : new Date().toISOString().split('T')[1].split('.')[0],
                        imgUri : imageUri,
                        predicted_class: response.data[0]?.predicted_class,
                        prevention: response.data[1]?.prevention,
                        symptoms: response.data[1]?.symptoms,
                        treatment: response.data[1]?.treatment,
                    });
                }
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
                            <Text style={[globalStyles.heading,{fontSize:17}]}>Prediction:</Text>
                            <Text style={[globalStyles.body,{fontSize:15,marginLeft:2}]}>{prediction[0]?.predicted_class}</Text>
                        </View>
                        <View>
                            <Text style={[globalStyles.heading,{marginBottom:5}]}>Prevention:</Text>
                            <Text style={[globalStyles.body,styles.predictedDesc]}>{prediction[1]?.prevention}</Text>
                        </View>
                        <View>
                            <Text style={[globalStyles.heading,{marginBottom:5}]}>Symptoms:</Text>
                            <Text style={[globalStyles.body,styles.predictedDesc]}>{prediction[1]?.symptoms}</Text>
                        </View>
                        <View>
                            <Text style={[globalStyles.heading,{marginBottom:5}]}>Treatment:</Text>
                            <Text style={[globalStyles.body,styles.predictedDesc]}>{prediction[1]?.treatment}</Text>
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
    predictedValue:{
        fontSize:18,
        marginLeft:4,
    },
    predictedDesc:{
        marginBottom:15,
        textAlign:'justify',
    }
})

export default PredictImg;


