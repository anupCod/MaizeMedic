import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const ScanButton = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="camera" color="white" size={30} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        borderRadius: 35,
        borderWidth: 5,
        borderColor: 'white',
        height: 70,
        width: 70,
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }
})

export default ScanButton;
