import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native-web';

export default function Profile({ route }) {
    const { student, updatedStudent } = route.params || {};
    const navigation = useNavigation();

    const displayedStudent = updatedStudent || student;

    const handleDelete = () => {
        navigation.navigate('StudentsList', { deletedStudent: displayedStudent });
    }

    return (
        <View style={styles.container}>
            <Image
                source={displayedStudent?.profilePic || { uri: 'https://via.placeholder.com/100' }}
                style={styles.image}
            />
            <Text style={styles.label}>Name: {displayedStudent.name}</Text>
            <Text style={styles.label}>Age: {displayedStudent.age}</Text>
            <Text style={styles.label}>Course: {displayedStudent.courseName}</Text>
            <Text style={styles.label}>Gender: {displayedStudent.gender}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Update Student"
                    onPress={() => navigation.navigate('Update', { student: displayedStudent })}
                    color="#007BFF"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Delete Student"
                    onPress={handleDelete}
                    color="#007BFF"
                />
            </View>
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
    buttonContainer: {
        marginTop: 20,
        borderRadius: 8,
        overflow: 'hidden',
    },
});
