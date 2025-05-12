import { StyleSheet, Image } from 'react-native';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function TabHome() {
  const [dica, setDica] = useState('');

  const dicas = [
    "Escove os dentes por pelo menos 2 minutos.",
    "Use fio dental todos os dias.",
    "Evite alimentos muito açucarados.",
    "Troque sua escova a cada 3 meses.",
    "Escove a língua para evitar mau hálito.",
    "Evite dormir sem escovar os dentes.",
    "Visite o dentista a cada 6 meses."
  ];

  const obterDataHoje = () => new Date().toISOString().split('T')[0];

  const carregarDicaDoDia = async () => {
    const hoje = obterDataHoje();
    const dataSalva = await AsyncStorage.getItem('dataUltimaDica');
    const dicaSalva = await AsyncStorage.getItem('ultimaDica');

    if (dataSalva === hoje && dicaSalva) {
      setDica(dicaSalva);
    } else {
      const novaDica = dicas[Math.floor(Math.random() * dicas.length)];
      await AsyncStorage.setItem('dataUltimaDica', hoje);
      await AsyncStorage.setItem('ultimaDica', novaDica);
      setDica(novaDica);
    }
  };

  useEffect(() => {
    carregarDicaDoDia();
  }, []);

  return (
    <View style={estilos.container}>
      <Image source={require("../../assets/images/logo.png")} style={estilos.logo} />

      {/* DICA DO DIA */}
      <View style={estilos.containerDica}>
        <Text style={estilos.tituloDica}>💡 Dica do Dia</Text>
        <Text style={estilos.textoDica}>{dica}</Text>
      </View>

      {/* EXPLICAÇÃO */}
      <View style={estilos.containerExplicacao}>
        <Text style={estilos.tituloExplicacao}>Como Usar?</Text>

        <View style={estilos.passo}>
          <Image source={require("../../assets/images/icone1.png")} style={estilos.icone} />
          <Text style={estilos.textoPasso}>
            <Text style={estilos.tituloPasso}>Passo 1:</Text> Cadastre suas escovações diárias.
          </Text>
        </View>

        <View style={estilos.passo}>
          <Image source={require("../../assets/images/icone2.png")} style={estilos.icone} />
          <Text style={estilos.textoPasso}>
            <Text style={estilos.tituloPasso}>Passo 2:</Text> Ganhe pontos e suba de nível.
          </Text>
        </View>

        <View style={estilos.passo}>
          <Image source={require("../../assets/images/icone3.png")} style={estilos.icone} />
          <Text style={estilos.textoPasso}>
            <Text style={estilos.tituloPasso}>Passo 3:</Text> Acompanhe seu progresso e melhore sua saúde bucal.
          </Text>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
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
    marginBottom: 20,
  },
  containerDica: {
    width: '90%',
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    borderLeftWidth: 5,
    borderLeftColor: '#00BCD4',
  },
  tituloDica: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007B8A',
  },
  textoDica: {
    fontSize: 16,
    color: '#007B8A',
  },
  containerExplicacao: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 40,
    alignItems: 'center',
  },
  tituloExplicacao: {
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
  textoPasso: {
    fontSize: 16,
    color: "#0066FF",
    flexShrink: 1,
  },
  tituloPasso: {
    fontWeight: 'bold',
  },
});
