import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/background.png")} // Corrigindo caminho
      resizeMode="cover"
      style={styles.background} // Aplicando estilo para ocupar a tela toda
    >
      <View style={styles.container}>
       
        <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ocupa a tela toda
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // Garante que a View não cubra a imagem de fundo
  },
  text: {
    color: "#fff", // Deixa o texto branco para ser visível caso o fundo seja escuro
    fontSize: 16,
    fontWeight: "bold",
  },
});
