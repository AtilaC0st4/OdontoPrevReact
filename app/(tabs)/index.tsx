import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabHome() {
  return (

    <View style={styles.container}>

      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />


      <View style={styles.explicacaoContainer}>
        
        <Text style={styles.titleExplicacao}> Como Usar? </Text>

        <View style={styles.passo}>
          <Image source={require("../../assets/images/icone1.png")} style={styles.icone} />
          <Text style={styles.passoTexto}>
            <Text style={styles.passoTitulo}>Passo 1:</Text> Cadastre suas escovações diárias.
          </Text>
        </View>

  
        <View style={styles.passo}>
          <Image source={require("../../assets/images/icone2.png")} style={styles.icone} />
          <Text style={styles.passoTexto}>
            <Text style={styles.passoTitulo}>Passo 2:</Text> Ganhe pontos e suba de nível.
          </Text>
        </View>

        <View style={styles.passo}>

          <Image source={require("../../assets/images/icone3.png")} style={styles.icone} />
          <Text style={styles.passoTexto}>
            <Text style={styles.passoTitulo}>Passo 3:</Text> Acompanhe seu progresso e melhore sua saúde bucal.
          </Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

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
    marginBottom: 50, 
  },
  explicacaoContainer: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    padding: 40,
    alignItems: 'center',
  },
  titleExplicacao: {
    color: "#0066FF",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  passo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icone: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 15,
  },
  passoTexto: {
    fontSize: 16,
    color: "#0066FF",
    flexShrink: 1,
  },
  passoTitulo: {
    fontWeight: 'bold',
  },
});