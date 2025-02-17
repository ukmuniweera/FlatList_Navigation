import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native-web';

export default function AddStudent() {
    const navigation = useNavigation();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [courseName, setCourseName] = useState();
    const [id, setId] = useState();
    const newStudent = {
        name: name,
        age: age,
        gender: gender,
        courseName: courseName,
        id: id
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter student name"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter student age"
                value={age}
                onChangeText={setAge}
            />
            <Text style={styles.label}>Gender:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter student gender"
                value={gender}
                onChangeText={setGender}
            />
            <Text style={styles.label}>Course Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter student course name"
                value={courseName}
                onChangeText={setCourseName}
            />
            <Text style={styles.label}>ID:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter student id"
                value={id}
                onChangeText={setId}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('StudentsList', { newStudent });
                }}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
