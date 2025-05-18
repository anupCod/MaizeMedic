import { View,Button,Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { useImage } from '../context/ImageContext';
import { useNavigation } from '@react-navigation/native';

const ClickImage = () => {
    const {imageUri, setImageUri} = useImage()
    const navigation = useNavigation()
    
    const openCamera = async() => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync()
        if(!permissionResult.granted){
            alert('Camera access is required to take pictures')
            return
        }
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect: [4, 3],
            quality:1,
        })
        if(!result.canceled){
            setImageUri(result.assets[0].uri)
            navigation.navigate('predictImg')
        }
    }

    return (
        <View>
            <Button title="Open Camera" onPress={openCamera} />
            {imageUri && (
                <Image source={{uri: imageUri}} style={{width:200, height:200}} />
            )}
        </View>
    );
}


export default ClickImage;


