import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'

export default function UpdateStudent({ route }) {
    const { student } = route.params
    const navigation = useNavigation()
    const [name, setName] = useState(student.name)
    const [age, setAge] = useState(student.age)
    const [gender, setGender] = useState(student.gender)
    const [courseName, setCourseName] = useState(student.courseName)
    const [id, setId] = useState(student.id)

    const updatedStudent = {
        name,
        age,
        gender,
        courseName,
        id,
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Update student name"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                placeholder="Update student age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Gender:</Text>
            <TextInput
                style={styles.input}
                placeholder="Update student gender"
                value={gender}
                onChangeText={setGender}
            />
            <Text style={styles.label}>Course Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Update student course name"
                value={courseName}
                onChangeText={setCourseName}
            />
            <Text style={styles.label}>ID:</Text>
            <TextInput
                style={styles.input}
                placeholder="Update student id"
                value={id}
                onChangeText={setId}
                keyboardType="numeric"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Profile', { updatedStudent });
                }}
            >
                <Text style={styles.buttonText}>Update</Text>
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
        alignItems: 'cUpdate',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});