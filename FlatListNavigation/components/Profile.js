import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native-web';

export default function Profile({ route }) {
    const { student } = route.params;
    return (
        <View style={styles.container}>
            <Image source={student.profilePic} style={styles.image} />
            <Text style={styles.label}>Name: {student.name}</Text>
            <Text style={styles.label}>Age: {student.age}</Text>
            <Text style={styles.label}>Course: {student.courseName}</Text>
            <Text style={styles.label}>Gender: {student.gender}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
        fontWeight: 'bold',
    },
});
