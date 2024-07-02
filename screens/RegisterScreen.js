import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  MaterialIcons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import NavTop2 from "../components/NavTop2";

import firebaseApp, { auth } from "../FireBaseAccess";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [birthdate, setBirthdate] = useState(new Date()); // Inicializar con la fecha actual
  const [role, setRole] = useState("Patient");
  const [roles, setRoles] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [language, setLanguage] = useState("English");
  const [gender, setGender] = useState("no mencionar");
  const [collapsedPersonalData, setCollapsedPersonalData] = useState(false);
  const [collapsedSecurity, setCollapsedSecurity] = useState(true);
  const [collapsedPreference, setCollapsedPreference] = useState(true);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(false);
    setBirthdate(currentDate);
  };

  const inicioEstado = {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [estado, setEstado] = useState(inicioEstado);

  const HandleChangeText = (value, name) => {
    setEstado({ ...estado, [name]: value });
  };

  const addRole = () => {
    if (!roles.includes(role)) {
      setRoles([...roles, role]);
    } else {
      Alert.alert("Alert", "Role already chosen");
    }
  };

  const RegisterUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        estado.email,
        estado.password
      );
      const user = userCredential.user;

      await addDoc(collection(db, "Users"), {
        uid: user.uid,
        ...estado,
        birthdate,
        roles,
        language,
        gender,
      });

      Alert.alert("Alert", `The user registered successfully`);
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <NavTop2 />
      <View style={styles.container}>
        <Text style={styles.subtitle}>Registration Form</Text>
        <Text style={styles.description}>
          Complete registration to personalize your experience.
        </Text>

        {/* Basic Personal Data Section */}
        <TouchableOpacity
          onPress={() => setCollapsedPersonalData(!collapsedPersonalData)}
        >
          <Text style={styles.sectionTitle}>
            Basic Personal Data{" "}
            <AntDesign name="down" size={20} color="black" />
          </Text>
        </TouchableOpacity>
        <Collapsible collapsed={collapsedPersonalData}>
          <View style={styles.section}>
            <View style={styles.profilePic}>
              <FontAwesome name="user-circle" size={150} color="#ccc" />
              <TouchableOpacity style={styles.editIcon}>
                <MaterialIcons name="edit" size={16} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => HandleChangeText(value, "name")}
                  value={estado.name}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Last name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => HandleChangeText(value, "lastName")}
                  value={estado.lastName}
                />
              </View>
            </View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => HandleChangeText(value, "email")}
              value={estado.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.row}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Birthdate</Text>
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <View style={styles.dateInput}>
                    <Text style={styles.dateText}>
                      {birthdate.toLocaleDateString("en-GB")}
                    </Text>
                  </View>
                  <FontAwesome5
                    style={styles.calendarIcon}
                    name="calendar-plus"
                    size={20}
                    color="#B72424"
                  />
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    value={birthdate}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                  />
                )}
              </View>
              <View style={styles.inputContainer}>
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
                </View>
                <TouchableOpacity onPress={addRole}>
                  <Feather
                    style={styles.circleIcon}
                    name="plus-circle"
                    size={24}
                    color="#B72424"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {roles.length > 0 && (
              <View style={styles.rolesContainer}>
                {roles.map((r, index) => (
                  <Text key={index} style={styles.roleText}>
                    {r}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </Collapsible>

        {/* Security Section */}
        <TouchableOpacity
          onPress={() => setCollapsedSecurity(!collapsedSecurity)}
        >
          <Text style={styles.sectionTitle}>
            Security <AntDesign name="down" size={20} color="black" />
          </Text>
        </TouchableOpacity>
        <Collapsible collapsed={collapsedSecurity}>
          <View style={styles.section}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(value) => HandleChangeText(value, "password")}
              value={estado.password}
              autoCapitalize="none"
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>
        </Collapsible>

        {/* Preference and Personalization Section */}
        <TouchableOpacity
          onPress={() => setCollapsedPreference(!collapsedPreference)}
        >
          <Text style={styles.sectionTitle}>
            Preference and Personalization{" "}
            <AntDesign name="down" size={20} color="black" />
          </Text>
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
            <Text style={styles.label}>Gender</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Masculine" value="Masculine" />
                <Picker.Item label="Woman" value="Woman" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </View>
          </View>
        </Collapsible>

        <TouchableOpacity style={styles.button} onPress={RegisterUser}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "auto",
    marginHorizontal: 20,
    marginTop: 20,
  },
  navTop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D32F2F",
    padding: 10,
    borderRadius: 5,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "black",
    textAlign: "left",
    marginTop: 5,
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#F5F5F5",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "left",
  },
  profilePic: {
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
    width: 150,
    height:150,
    marginHorizontal:'auto'
  },
  editIcon: {
    position: "flex",
    bottom: 30,
    right: -50,
    backgroundColor: "#B72424",
    borderRadius: 20,
    padding: 4,
  },
  circleIcon: {
    flex: 1,
    bottom: 42,
    right: -130,
  },
  calendarIcon: {
    flex: 1,
    bottom: 42,
    right: -100,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    backgroundColor: "white",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  dateInput: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  dateText: {
    color: "#000",
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    alignItems: "right",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 40,
    bottom: 10,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#B72424",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    height: 38,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  cancelButton: {
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#B72424",
    height: 38,
  },
  cancelButtonText: {
    color: "#B72424",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  rolesContainer: {
    marginTop: 10,
  },
  roleText: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 2,
  },
});
