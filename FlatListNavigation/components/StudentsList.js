import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { students } from './StudentsDB';
import { useNavigation } from '@react-navigation/native';

export default function StudentsList({ route }) {
    const navigation = useNavigation();
    const [myStudents, setStudents] = useState(students);
    const [reRender, setReRender] = useState(false);
    React.useEffect(() => {
        if (route.params?.newStudent) {
            const { newStudent } = route.params;
            setStudents((prev) => [...prev, { ...newStudent }])
            setReRender(!reRender);
        }
    }, [route.params?.newStudent]);

    React.useEffect(() => {
        if (route.params?.deletedStudent) {
            const { deletedStudent } = route.params;
            setStudents((prev) => prev.filter((student) => student.id !== deletedStudent.id));
        }
    }, [route.params?.deletedStudent]);

    return (
        <View style={styles.container}>
            <FlatList
                data={myStudents}
                keyExtractor={item => item.id}
                extraData={reRender}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile', { student: item })}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Add New Student"
                    onPress={() => navigation.navigate('Add')}
                    color="#007BFF"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    text: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
        borderRadius: 8,
        overflow: 'hidden',
    },
});
