import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PredictImg from '../routes/PredictImg'

const Stack = createNativeStackNavigator()

const PredictNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="predictImageScreen" component={PredictImg} options={{headerShown:false,presentation:'fullScreenModal'}} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default PredictNavigator;
