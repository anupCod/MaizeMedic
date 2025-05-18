import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const ScanButton = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="camera" color="white" size={26} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        borderRadius: 35,
        borderWidth: 4,
        borderColor: 'white',
        height: 64,
        width: 64,
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }
})

export default ScanButton;
