import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: "100%",
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
        width: "80%",
        textAlign: "center"
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
    }
})


const NewPassword = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>New Password</Text>
            <Text style={styles.underheading}>Please enter your email to receive a 
                link to create a new password via email
            </Text>
            <TextInput
                style={styles.inputText}
                placeholder="New Password"
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
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default NewPassword;