import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import diseaseInfo from '../data/DiseaseInfo'
import { globalStyles } from '../styles'

function DiseaseInfo() {
  return (
    <>
        <ScrollView style={{marginVertical:12}}>
            <Text style={[globalStyles.heading,{textAlign:'center',marginVertical:8,fontSize:18}]}>Common Maize Diseases</Text>
            <View style={{marginHorizontal:8}}>
                {diseaseInfo.map((disease,index) => (
                    <View key={index} style={{marginVertical:6}}>
                        <Text style={[globalStyles.extraText,{fontSize:16,marginVertical:6}]}>{disease.name}</Text>
                        <Text style={[globalStyles.body,{textAlign:'justify',marginHorizontal:6}]}>{disease.description}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    </>
  )
}

export default DiseaseInfo
