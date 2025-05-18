import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import Login from '../routes/Login';
import Signup from '../routes/Signup';
import AccountNavigator from './AccountNavigator';
import PredictNavigator from './PredictNavigator';


const Stack = createNativeStackNavigator()
const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='main'>
            <Stack.Screen name="main" component={AppNavigator} options={{headerShown:false}}  />
            <Stack.Screen name="login" component={Login}  options={{headerShown:false}} />
            <Stack.Screen name="signup" component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="accountProfile" component={AccountNavigator} options={{headerShown:false,presentation:'card'}} />
            <Stack.Screen name="predictImg" component={PredictNavigator} options={{presentation:'card'}} />
        </Stack.Navigator>
    );
}



export default AuthNavigator;
