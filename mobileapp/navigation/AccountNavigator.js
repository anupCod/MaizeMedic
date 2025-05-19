import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../routes/Profile";
import Analytics from "../routes/Analytics";
import Contact from "../routes/Contact";

const Stack = createNativeStackNavigator()

const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="accountProfileScreen" component={Profile} options={{headerShown:false,presentation:'fullScreenModal'}} />
            <Stack.Screen name="Analytics" component={Analytics} options={{headerShown:false}} />
            <Stack.Screen name="contact" component={Contact} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}

export default AccountNavigator;
