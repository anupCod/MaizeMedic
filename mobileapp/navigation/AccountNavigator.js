import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../routes/Profile";

const Stack = createNativeStackNavigator()

const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="profile" component={Profile} options={{headerShown:false,presentation:'fullScreenModal'}} />
        </Stack.Navigator>
    );
}

export default AccountNavigator;
