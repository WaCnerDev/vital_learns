import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const navigation = useNavigation();
   
    return (
       
            <View style={styles.container}>
                <Image source={require('../img/brainVitalLearns.png')} style={styles.logo} />
                <Text>VitalLearn</Text>
                <Text style={styles.txtTitulo}>Welcome To VitalLearns!</Text>
                <Text style={styles.txtSubtitulo}>Log in with your VitalLearn account</Text>
              
                <Text style={styles.txtLogin}>Enter your email</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.txtInput}
                        placeholderTextColor="#888"
                    />
                </View>
                <Text style={styles.txtLogin}>Enter your password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.txtInput}
                        placeholderTextColor="#888"
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("RecoverScreen")}>
                    <Text style={styles.txtForgot}>Forgot your password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                    <LinearGradient
                        colors={['#FF0000', '#FF0000']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.btnLogin}
                    >
                        <Text style={styles.txtLoginButton}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={styles.txtLogin}>
                        Don't have an account?
                        <Text style={styles.txtSignUp}> Sign Up Now</Text>
                    </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 15,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 0,
    },
    txtTitulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
    },
    txtSubtitulo: {
        fontSize: 15,
        color: 'black',
        textAlign: 'right',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 25,
        paddingHorizontal: 15,
    },
    txtInput: {
        flex: 1,
        height: 50,
        color: 'black',
    },
    btnLogin: {
        borderRadius: 70,
        width: 300,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    txtLoginButton: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    txtLogin: {
        fontSize: 15,
        color: 'black',
        textAlign: 'right',
    },
    txtForgot: {
        fontSize: 15,
        color: 'black',
        textAlign: 'right',
        textDecorationLine: 'underline',
        marginBottom: 20,
    },
    txtSignUp: {
        color: '#FF0000',
        textDecorationLine: 'underline',
    },
});
