import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native';
import { useHistory } from '../context/HistoryContext'; // Import context
import { globalStyles } from '../styles';

const HistoryPage = () => {
    const { history,clearHistory } = useHistory(); // Access history from context

    // Sort the history by date and time in descending order
    const sortedHistory = history
        ? [...history].sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time))
        : [];

    // Group history items by date
    const groupedHistory = sortedHistory.reduce((acc, item) => {
        (acc[item.date] = acc[item.date] || []).push(item);
        return acc;
    }, {});

    return (
        <View style={styles.container}>
            <Text style={[globalStyles.heading,styles.title]}>Prediction History</Text>
            
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity onPress={clearHistory} style={styles.clearHistoryButton}>
                    <Text style={styles.clearText}>Clear History</Text>
                </TouchableOpacity>
                {history === null ? (
                    <Text style={styles.loadingText}>Loading...</Text>
                ) : Object.keys(groupedHistory).length === 0 ? (
                    <Text style={styles.noHistoryText}>No history found</Text>
                ) : (
                    Object.entries(groupedHistory).map(([date, items]) => (
                        <View key={date} style={styles.dateGroup}>
                            <Text style={styles.dateText}>{date}</Text>
                            {items.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.historyItem}>
                                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:4}}>
                                        {item.imgUri && <Image source={{ uri: item.imgUri }} style={{ width:60, height:60,borderRadius:30, marginRight:10 }} />}
                                        <View>
                                            <Text style={globalStyles.body}><Text style={globalStyles.extraText}>created At:</Text> {item.time}</Text>
                                            <Text style={globalStyles.body}><Text style={globalStyles.extraText}>Prediction:</Text> {item.predicted_class}</Text>
                                        </View>
                                    </View>
                                    <Text style={globalStyles.body}><Text style={globalStyles.extraText}>Treatment:</Text> {item.treatment}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f5f5f5',
    },
    clearText: {
        color:'red',
        fontSize:12,
        fontWeight:500,
        textAlign:'right',
        marginBottom:15,
    },
    title: {
        marginBottom: 15,
        textAlign: 'center',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    dateGroup: {
        marginBottom: 15,
    },
    dateText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 8,
        textAlign:'center',
    },
    historyItem: {
        backgroundColor: 'white',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    historyText: {
        fontSize: 13,
        color: 'black',
        marginRight:14,
    },
    label: {
        fontSize:14,
        fontWeight: 'bold',
    },
    loadingText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
        marginTop: 20,
    },
    noHistoryText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
        marginTop: 20,
    },
});

export default HistoryPage;
