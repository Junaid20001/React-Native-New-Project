import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: "100%"
    },
    heading: {
        color: "#222",
        fontSize: 32,
        marginVertical: 10
    },
    underheading: {
        color: "#22222294",
        fontSize: 14,
        marginBottom: 10,
    },
    inputText: {
        height: 40,
        marginVertical: 10,
        backgroundColor: "#8080801c",
        padding: 25,
        borderRadius: 25,
        width: "80%",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        marginVertical: 20,
        backgroundColor: "#7cffcb",
        padding: 25,
        borderRadius: 25,
        width: "80%"
    },
    buttonText: {
        color: "#fff",
        fontSize: 18
    },
    signupText: {
        color: "#36e697",
        fontWeight: 700,
        fontSize: 18
    }

})


const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <Text style={styles.underheading}>Add your details to login</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor={"#afafaf"}
                keyboardType={"email-address"}
            />
            <TextInput
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor={"#afafaf"}
            />
            <LinearGradient
                colors={['#36e697', '#36e697', '#09ae6a']}
                style={styles.button}>
                <TouchableOpacity activeOpacity={0.4}  >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity onPress={() => navigation.navigate('Reset Password')}>
                <Text style={styles.underheading}>Forgot your password?</Text>
            </TouchableOpacity>
            <View style={{ marginVertical: 20 }}>
                <Text style={styles.underheading}>Don't have an Account?
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

export default Login;