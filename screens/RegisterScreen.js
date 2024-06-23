import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [role, setRole] = useState('Patient');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthdate;
        setShowDatePicker(false);
        setBirthdate(currentDate);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>VitalLearns</Text>
            <Text style={styles.subtitle}>Registration Form</Text>
            <Text style={styles.description}>Complete registration to personalize your experience.</Text>
            <View style={styles.formSection}>
                <Text style={styles.sectionTitle}>Basic Personal Data</Text>
                <View style={styles.profilePicContainer}>
                    <Image source={require('../img/brainVitalLearns.png')} style={styles.profilePic} />
                    <TouchableOpacity style={styles.editPicButton}>
                        <Text style={styles.editPicButtonText}>✎</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.general}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.general}>Last name</Text>
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                />
                <Text style={styles.general}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.general}>Birthdate</Text>
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View style={styles.dateInput}>
                        <Text style={styles.dateText}>
                            {birthdate.toLocaleDateString()}
                        </Text>
                    </View>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={birthdate}
                        mode="date"
                        display="default"
                        onChange={onDateChange}
                    />
                )}
                <Text style={styles.general}>Role</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={role}
                        onValueChange={(itemValue) => setRole(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Patient" value="Patient" />
                        <Picker.Item label="Doctor" value="Doctor" />
                        <Picker.Item label="Nurse" value="Nurse" />
                        <Picker.Item label="Admin" value="Admin" />
                    </Picker>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#D32F2F',
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        marginBottom: 20,
    },
    general:{
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
    },
    formSection: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    profilePicContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ccc',
    },
    editPicButton: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        backgroundColor: '#D32F2F',
        borderRadius: 15,
        padding: 5,
    },
    editPicButtonText: {
        color: '#fff',
        fontSize: 12,
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
    },
    dateInput: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
        justifyContent: 'center',
    },
    dateText: {
        color: '#000',
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    button: {
        backgroundColor: '#D32F2F',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelButton: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        borderColor: '#D32F2F',
        borderWidth: 1,
    },
    cancelButtonText: {
        color: '#D32F2F',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
