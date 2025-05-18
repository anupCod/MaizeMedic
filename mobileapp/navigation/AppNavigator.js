import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../routes/HomeScreen';
import About from '../routes/About';
import ClickImage from '../routes/ClickImage';
import Contact from '../routes/Contact';
import ScanButton from './ScanButton';
import HistoryPage from '../routes/HistoryPage';

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarInactiveTintColor: 'white', tabBarActiveTintColor: 'black', tabBarStyle: { height: 53, backgroundColor: 'green' }, tabBarLabelStyle: { fontWeight: 700, fontSize: 11,fontFamily:'Poppins_600SemiBold' } }}>
            <Tab.Screen name="home" options={{ title: "Home", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={20} />) }} component={HomeScreen} />
            <Tab.Screen name="about" options={{ title: "About", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="information" color={color} size={20} />) }} component={About} />
            <Tab.Screen name="scan"
                options={({navigation}) => ({
                    tabBarButton : () => <ScanButton onPress={()=> navigation.navigate('scan')} />,
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="camera" color={color} size={22} />)
                })}
                component={ClickImage} />
            <Tab.Screen name="contact" options={{ title: "Contact", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="phone" color={color} size={20} />) }} component={Contact} />
            <Tab.Screen name="history" options={{ title: "History", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="clipboard-text" color={color} size={20} />) }} component={HistoryPage} />
        </Tab.Navigator>
    );
}


export default AppNavigator;
