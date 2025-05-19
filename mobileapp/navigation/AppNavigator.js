import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../routes/HomeScreen';
import About from '../routes/About';
import ClickImage from '../routes/ClickImage';
import ScanButton from './ScanButton';
import HistoryPage from '../routes/HistoryPage';
import DiseaseInfo from '../routes/DiseaseInfo';

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
            <Tab.Screen name="diseaseInfo" options={{ title: "Diseases", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="ladybug" color={color} size={20} />) }} component={DiseaseInfo} />
            <Tab.Screen name="history" options={{ title: "History", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="clipboard-text" color={color} size={20} />) }} component={HistoryPage} />
        </Tab.Navigator>
    );
}


export default AppNavigator;
