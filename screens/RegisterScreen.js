import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons, FontAwesome, AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
import NavTop from "../components/NavTop";

import firebaseApp from "../FireBaseAccess"
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp)

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [birthdate, setBirthdate] = useState(new Date()); // Inicializar con la fecha actual
    const [role, setRole] = useState('Patient');
    const [showDatePicker, setShowDatePicker] = useState(false); 
    const [language, setLanguage] = useState('English');

    const [collapsedPersonalData, setCollapsedPersonalData] = useState(false);
    const [collapsedSecurity, setCollapsedSecurity] = useState(true);
    const [collapsedPreference, setCollapsedPreference] = useState(true);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthdate;
        setShowDatePicker(false);
        setBirthdate(currentDate);
    };

    const inicioEstado = {
        name: '',
        lastName: '',
        email: '',
        password: '',
    }

    const [estado, setEstado] = useState(inicioEstado)

    const HandleChangeText = (value, name) => {
        setEstado({ ...estado, [name]: value })
    }

    const RegisterUser = async () => {
        try {
            await addDoc(collection(db, 'Users'), { ...estado, birthdate })
            Alert.alert('Alerta', 'El usuario se registró con éxito')
            navigation.navigate('LoginScreen')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <NavTop/>
            <Text style={styles.subtitle}>Registration Form</Text>
            <Text style={styles.description}>Complete registration to personalize your experience.</Text>
            
            {/* Basic Personal Data Section */}
            <TouchableOpacity onPress={() => setCollapsedPersonalData(!collapsedPersonalData)}>
                <Text style={styles.sectionTitle}>Basic Personal Data <AntDesign name="down" size={24} color="black" /></Text>
            </TouchableOpacity>
            <Collapsible collapsed={collapsedPersonalData}>
                <View style={styles.section}>
                    <View style={styles.profilePic}>
                        <FontAwesome name="user-circle" size={80} color="#ccc" />
                        <TouchableOpacity style={styles.editIcon}>
                            <MaterialIcons name="edit" size={16} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => HandleChangeText(value, 'name')}
                        value={estado.name}
                    />
                    <Text style={styles.label}>Last name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => HandleChangeText(value, 'lastName')}
                        value={estado.lastName}
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => HandleChangeText(value, 'email')}
                        value={estado.email}
                    />
                    <Text style={styles.label}>Birthdate</Text>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <View style={styles.dateInput}>
                            <Text style={styles.dateText}>
                                {birthdate.toLocaleDateString('en-GB')}
                                <FontAwesome5 name="calendar-plus" size={24} color="red" />
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
                    <Text style={styles.label}>Role</Text>
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
                        <Feather name="plus-circle" size={24} color="red" />
                    </View>
                </View>
            </Collapsible>

            {/* Security Section */}
            <TouchableOpacity onPress={() => setCollapsedSecurity(!collapsedSecurity)}>
                <Text style={styles.sectionTitle}>Security <AntDesign name="down" size={24} color="black" /></Text>
            </TouchableOpacity>
            <Collapsible collapsed={collapsedSecurity}>
                <View style={styles.section}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(value) => HandleChangeText(value, 'password')}
                        value={estado.password}
                    />
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
            </Collapsible>

            {/* Preference and Personalization Section */}
            <TouchableOpacity onPress={() => setCollapsedPreference(!collapsedPreference)}>
                <Text style={styles.sectionTitle}>Preference and Personalization <AntDesign name="down" size={24} color="black" /></Text>
            </TouchableOpacity>
            <Collapsible collapsed={collapsedPreference}>
                <View style={styles.section}>
                    <Text style={styles.label}>Preferred Language</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={language}
                            onValueChange={(itemValue) => setLanguage(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="English" value="English" />
                            <Picker.Item label="Spanish" value="Spanish" />
                            <Picker.Item label="French" value="French" />
                            <Picker.Item label="German" value="German" />
                        </Picker>
                    </View>
                </View>
            </Collapsible>

            <TouchableOpacity style={styles.button} onPress={RegisterUser}>
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
    navTop: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D32F2F',
        padding: 10,
        borderRadius: 5,
    },
    navTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'left',
    },
    profilePic: {
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 20,
        padding: 4,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        fontSize: 16,
        backgroundColor: 'white',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    dateInput: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
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
        marginBottom: 10,
    },
    picker: {
        height: 40,
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
        fontWeight: 'bold',
        fontSize: 16,
    },
    cancelButton: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    cancelButtonText: {
        color: '#D32F2F',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
