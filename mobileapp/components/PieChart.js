import React from 'react';
import { View, Text, Dimensions, StyleSheet} from 'react-native';
import { PieChart } from 'react-native-chart-kit';

import { useHistory } from '../context/HistoryContext';
import { globalStyles } from '../styles';

const width = Dimensions.get("window").width

const PieChartComponent = () => {
    const { history } = useHistory()

    if (!history || history.length === 0) {
        return <Text style={styles.message}>No prediction data available</Text>;
    }

    const classCounts = history.reduce((acc, item) => {
        const prediction = item.predicted_class
        acc[prediction] = (acc[prediction] || 0) + 1
        return acc
    }, {})

    const colorPalette = {
        Blight: '#CA7F00',         // Burnt Orange
        Common_Rust: '#871C1C',     // Rust Red
        GrayLeafSpot: '#616161',  // Charcoal Gray
        Healthy: '#43A047',        // Fresh Green
    };

    const pieData = Object.entries(classCounts).map(([name, count]) => ({
        name,
        population: count,
        color: colorPalette[name] || '#888888',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    }))
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
        labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
        style: {
            borderRadius: 16,
        },
        propsForDots: {
            r: '6',
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    }
    const bezierstyle = {
        marginVertical: 8,
        borderRadius: 16,
        marginHorizontal: 'auto'
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={[globalStyles.extraText,{fontSize:15,textAlign:'center',marginTop:18}]}>Detected Conditions Overview</Text>
            <PieChart data={pieData}
                width={width - 20}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"5"}
                center={[10, 0]}
                absolute
                hasLegend={true} />
        </View>
    );
};

export default PieChartComponent;