import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginHeader from "../components/LoginHeader";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";
import { loginUser } from "../FireBaseAccess";

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {
        try {
            const user = await loginUser(email, password);
            Alert.alert("Login Successful", `Welcome to Vital Learn`);
            navigation.navigate("TabsNavigartor");
        } catch (error) {
            Alert.alert("Login Failed", error.message);
        }
    };

    return (
        <ScrollView style={styles.scroll}>
            <LoginHeader/>
            <View style={styles.container}>
                <Text style={styles.txtTitulo}>Welcome To VitalLearns!</Text>
                <Text style={styles.txtSubtitulo}>Log in with your VitalLearn account</Text>

                <Text style={styles.txtLogin}>Enter your email</Text>
                <View style={styles.inputContainer}>
                    <FontAwesome style={styles.icon} name="user-circle-o" size={30} color="#B72424" />
                    <TextInput 
                        style={styles.txtInput} 
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <Text style={styles.txtLogin}>Enter your password</Text>
                <View style={[styles.inputContainer, styles.lastchild]}>
                    <Entypo style={styles.icon} name="lock" size={30} color="#B72424" />
                    <TextInput
                        style={styles.txtInput}
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <AntDesign name={passwordVisible ? "eye" : "eyeo"} size={24} color="black" />
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate("RecoverScreen")}>
                    <Text style={styles.txtForgot}>Forgot your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogin} style={styles.btnLogin}>
                    <Text style={styles.txtLoginButton}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sectionNoAccount} onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={styles.txtNonAccount}>
                        Don't have an account? 
                        <Text style={styles.txtSignUp}> Sign Up Now</Text>
                    </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:20,
        marginTop:20
    },
    txtTitulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        alignSelf: 'stretch'
    },
    txtSubtitulo: {
        fontSize: 15,
        color: 'black',
        textAlign: 'left', 
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height:40,
        width: '100%',
        marginBottom: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    txtInput: {
        flex: 1,
        height: 50,
        color: 'black',
    },
    btnLogin: {
        width:'100%',
        height: 38,
        backgroundColor: "#B72424",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    txtLoginButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    txtLogin: {
        fontSize: 15,
        color: 'black',
        textAlign: 'left',
        marginBottom:10
    },
    txtForgot: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left', 
        textDecorationLine: 'underline',
        marginBottom: 30,
    },
    txtNonAccount:{
        fontSize: 15,
        color: 'black',
        alignItems: 'center',  
    },
    txtSignUp: {
        color: '#B72424',
        textDecorationLine: 'underline',
        marginLeft:5,
        fontWeight:"700"
    },
    lastchild:{
        marginBottom:5
    },
    sectionNoAccount:{
        marginTop:15,
        width:'100%',
        alignItems:'center'
    }
});
