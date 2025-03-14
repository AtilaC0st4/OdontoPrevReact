import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from "react-native";
import { Link, Router } from "expo-router";

export default function App() {
    return (
        <>
            <ImageBackground
                source={require("../assets/background.png")}
                resizeMode="cover"
                style={styles.background}
            >
                <View style={styles.container}>
                    <Image source={require("../assets/logo.png")} style={styles.logo} />

                    <Text style={styles.text}>
                        Cuide do seu sorriso com acompanhamento personalizado e preventivo. Cadastre-se e monitore sua saúde bucal e se divirta com a OdontoPrev.
                    </Text>

                    <Link href="./landingPage" asChild>
                        <Pressable style={styles.btn}>
                            <Text style={styles.btnAcessar}>Acessar</Text>
                        </Pressable>
                    </Link>


                    <StatusBar style="auto" />
                </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        margin: 10,
        paddingVertical: 20, // Melhorando o espaçamento vertical
    },
    logo: {
        width: 400, // Definindo um tamanho fixo para a logo
        height: 150,
        resizeMode: "contain",
        marginBottom: 100, // Espaçamento abaixo da logo
    },
    text: {
        color: "#033EA6",
        fontSize: 20, // Ajuste para melhor leitura
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 20, // Adiciona margem para evitar tocar nas bordas
        marginBottom: 100,
    },
    btn: {
        backgroundColor: "#6AE9FF",
        paddingVertical: 12, // Melhor ajuste do tamanho do botão
        paddingHorizontal: 30, // Melhor que width fixa
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100,
    },
    btnAcessar: {
        fontSize: 20, // Reduzindo um pouco para manter proporção
        fontWeight: "bold",
        color: "#033EA6",
    }
});
