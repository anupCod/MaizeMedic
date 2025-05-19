import React from 'react'
import { ScrollView } from 'react-native'
import DiseaseInfo from '../data/DiseaseInfo.json'

function DiseaseInfo() {
  return (
    <>
        <ScrollView>
            <Text>Common Maize Diseases</Text>
            <View>
                {DiseaseInfo.map((disease,index) => (
                    <View key={index}>
                        <Text>{disease.name}</Text>
                        <Text>{disease.description}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    </>
  )
}

export default DiseaseInfo
