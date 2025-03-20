import { ImageBackground, StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabHome() {
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require("../../assets/images/logo.png")} style={styles.logo} />

        {/* Título principal */}
        <Text style={styles.title}>
          Cuide do seu sorriso com acompanhamento personalizado e preventivo. Cadastre-se e monitore sua saúde bucal e se divirta com a OdontoPrev.
        </Text>

        {/* Seção de Explicação */}
        <View style={styles.explicacaoContainer}>
          {/* Passo 1 */}
          <View style={styles.passo}>
            <Image source={require("../../assets/images/icone1.png")} style={styles.icone} />
            <Text style={styles.passoTexto}>
              <Text style={styles.passoTitulo}>Passo 1:</Text> Cadastre suas escovações diárias.
            </Text>
          </View>

          {/* Passo 2 */}
          <View style={styles.passo}>
            <Image source={require("../../assets/images/icone2.png")} style={styles.icone} />
            <Text style={styles.passoTexto}>
              <Text style={styles.passoTitulo}>Passo 2:</Text> Ganhe pontos e suba de nível.
            </Text>
          </View>

          {/* Passo 3 */}
          <View style={styles.passo}>
            <Image source={require("../../assets/images/icone3.png")} style={styles.icone} />
            <Text style={styles.passoTexto}>
              <Text style={styles.passoTitulo}>Passo 3:</Text> Acompanhe seu progresso e melhore sua saúde bucal.
            </Text>
          </View>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    width: 400,
    height: 150,
    resizeMode: "contain",
    marginBottom: 50, // Reduzido para dar espaço à seção de explicação
  },
  title: {
    color: "#033EA6",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 50, // Reduzido para dar espaço à seção de explicação
  },
  explicacaoContainer: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo semi-transparente
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  passo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icone: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 15,
  },
  passoTexto: {
    fontSize: 16,
    color: "#033EA6",
    flexShrink: 1, // Garante que o texto não ultrapasse o espaço
  },
  passoTitulo: {
    fontWeight: 'bold',
  },
});