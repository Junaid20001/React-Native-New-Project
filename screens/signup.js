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


const Signup = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign Up</Text>
            <Text style={styles.underheading}>Add your details to Sign Up</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Name"
                placeholderTextColor={"#afafaf"}
            />
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
            <TextInput
                style={styles.inputText}
                placeholder="Confirm Password"
                placeholderTextColor={"#afafaf"}
            />
            <LinearGradient
                colors={['#36e697', '#36e697', '#09ae6a']}
                style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </LinearGradient>
            <View style={{ marginVertical: 20 }}>
                <Text style={styles.underheading}>Already have an Account?
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.signupText}>Login</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

export default Signup;