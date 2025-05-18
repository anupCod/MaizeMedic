import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PredictImg from '../routes/PredictImg'

const Stack = createNativeStackNavigator()

const PredictNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="predictImageScreen" component={PredictImg} options={{headerShown:false,presentation:'fullScreenModal'}} />
        </Stack.Navigator>
    );
}


export default PredictNavigator;
