import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useHistory } from '../context/HistoryContext';
import { globalStyles } from '../styles';

const width = Dimensions.get("window").width

const LineChartComponent = () => {
    const { history } = useHistory()

    if (!history || history.length === 0) {
        return <Text style={styles.message}>No prediction data available</Text>;
    }

    // Group predictions by date
    const dailyCounts = {};

    history.forEach(item => {
        const date = item.date;
        if (!dailyCounts[date]) dailyCounts[date] = 0;
        dailyCounts[date]++;
    });

    const sortedDates = Object.keys(dailyCounts).sort();
    const dataValues = sortedDates.map(date => dailyCounts[date]);

    const chartData = {
        labels: sortedDates.map(() => ''), // 👈 Blank X-axis labels
        datasets: [
            {
                data: dataValues,
                strokeWidth: 2,
            }
        ]
    };
    const chartConfig = {
        backgroundColor: '#F1F8E9',
        backgroundGradientFrom: '#F1F8E9',
        backgroundGradientTo: '#F1F8E9',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(56, 142, 60, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(78, 52, 46, ${opacity})`,
        propsForDots: {
            r: '2',
            strokeWidth: '1',
            stroke: '#FFC107' // maize yellow border
        },
        /* propsForBackgroundLines: {
            strokeDasharray: '', // Solid lines
        }, */
        /* propsForLabels: {
            display: 'none', // Doesn't work directly in chart-kit, so we take another approach
        } */
    };
    const bezierstyle = {
        marginVertical: 8,
        borderRadius: 16,
        borderWidth:1,
        borderColor:'green',
        marginHorizontal: 'auto'
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={[globalStyles.extraText,{fontSize:15,textAlign:'center',marginBottom:6}]}>Daily Prediction Trend</Text>
            <LineChart data={chartData} width={width - 10} height={220} chartConfig={chartConfig} bezier style={bezierstyle} />
        </View>
    );
};

export default LineChartComponent;