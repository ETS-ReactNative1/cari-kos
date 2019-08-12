import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import { Button, Title, Paragraph, TouchableRipple } from "react-native-paper";
// import { createAppContainer, creat } from "react-navigation";

class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    _renderLoginIcon = ({size, color}) => {
        return (
            <Image 
                source={require('./assets/images/login-icon.png')}
                style={{
                    width: size,
                    height: size,
                    tintColor: color
                }}
            />
        )
    }

    render() {
        return (
            <ScrollView style={styles.mainContainer}>
                <View style={styles.iconContainer}>
                    <Image 
                        source={require('./assets/images/login-icon.png')}
                        style={styles.iconLogin}
                    />
                    
                    <Title>Ooops ....</Title>
                    <Title>Kamu Belum Login!</Title>
                    <Paragraph style={styles.textCenter}>Yuk masuk, dan rasakan lebih banyak fitur-fitur kami!</Paragraph>
                </View>
                <View style={styles.buttonContainer}>
                    <Button mode="contained" style={styles.loginButton} onPress={() => {console.log('button pressed')}}>
                        Login
                    </Button>
                    <Text style={[styles.textCenter, {paddingVertical: 20, color: "grey", fontStyle: "italic"}]}>Atau belum punya akun?</Text>
                    <Button mode="contained" style={styles.signUpButton} onPress={() => {console.log('button pressed')}}>
                        Daftar
                    </Button>
                </View>
                <View>
                    <TouchableRipple onPress={() => {console.log('text touched')}}>
                        <Text style={styles.textLink}>Syarat & Ketentuan</Text>
                    </TouchableRipple>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 10,
        paddingHorizontal: 50
    },
    iconContainer: {
        alignItems: "center",
        padding: 0,
        paddingTop: 50,
        paddingBottom: 30,
    },
    buttonContainer: {
        paddingBottom: 30,
    },
    iconLogin: {
        width: 200,
        height: 200,
        tintColor: "#03a9f4",
        paddingBottom: 30,
    },
    textCenter: {
        alignSelf: "stretch",
        alignItems: "center",
        textAlign: "center",
    },
    loginButton: {
        backgroundColor: '#1E88E5',
        fontWeight: "bold",
        shadowColor: "#0D47A1",
        shadowOpacity: 0.2,
        shadowOffset: {
            bottom: 2
        }
    },
    signUpButton: {
        backgroundColor: '#43A047',
        fontWeight: "bold",
        shadowColor: "#2E7D32",
        shadowOpacity: 0.2,
        shadowOffset: {
            bottom: 2
        }
    },
    textLink: {
        textDecorationLine: "underline",
        color: "grey",
        textAlign: "center"
    },
});

export default LoginContainer;
