import React from 'react';
import { Pressable, Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function home() {
    return (
        <ImageBackground
            source={require("../assets/images/background.png")}
            resizeMode="cover"
            style={styles.background}
        >
            <View style={styles.container}>
                <Image source={require("../assets/images/logo.png")} style={styles.logo} />
                <Text style={styles.title}>
                    Cuide do seu sorriso com acompanhamento personalizado e preventivo. Cadastre-se e monitore sua saúde bucal e se divirta com a OdontoPrev.
                </Text>
                <Link href="/(tabs)" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Ir para a App</Text>
                    </Pressable>
                </Link>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    logo: {
        width: 400,
        height: 150,
        resizeMode: "contain",
        marginBottom: 50, 
    },
    title: {
        color: "#033EA6",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#0066FF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});