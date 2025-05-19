import React from 'react';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LineChartComponent from '../components/LineChart';
import PieChartComponent from '../components/PieChart';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles';
import { useNavigation } from '@react-navigation/native';


const Analytics = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', paddingVertical: 3 }} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="chevron-left" size={30} style={{ color: 'blue' }} />
                    <Text style={[globalStyles.extraText, { fontSize: 17, color: 'blue', fontWeight: '500' }]}>Back</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <LineChartComponent />
                <PieChartComponent />
            </ScrollView>
        </SafeAreaView>
    );
};


export default Analytics;