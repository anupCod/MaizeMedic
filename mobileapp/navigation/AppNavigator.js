import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../routes/HomeScreen';
import About from '../routes/About';
import ClickImage from '../routes/ClickImage';
import Contact from '../routes/Contact';
import Settings from '../routes/Settings';
import ScanButton from './ScanButton';

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarInactiveTintColor: 'white', tabBarActiveTintColor: 'black', tabBarStyle: { height: 60, backgroundColor: 'green' }, tabBarLabelStyle: { fontWeight: 700, fontSize: 12 } }}>
            <Tab.Screen name="home" options={{ title: "Home", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={24} />) }} component={HomeScreen} />
            <Tab.Screen name="about" options={{ title: "About", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="information" color={color} size={24} />) }} component={About} />
            <Tab.Screen name="scan"
                options={({navigation}) => ({
                    tabBarButton : () => <ScanButton onPress={()=> navigation.navigate('scan')} />,
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="camera" color={color} size={24} />)
                })}
                component={ClickImage} />
            <Tab.Screen name="contact" options={{ title: "Contact", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="phone" color={color} size={24} />) }} component={Contact} />
            <Tab.Screen name="settings" options={{ title: "Settings", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="cog" color={color} size={24} />) }} component={Settings} />
        </Tab.Navigator>
    );
}


export default AppNavigator;
