import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function Cadastro() {
  const salvarEscovacao = async () => {
    const agora = new Date();
    const data = agora.toLocaleDateString('pt-BR'); // Ex: 06/05/2025
    const horario = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); // Ex: 14:30

    try {
      const response = await fetch('https://sua-api.com/escovacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data, horario }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', `Check-in registrado em ${data} às ${horario}`);
      } else {
        Alert.alert('Erro', 'Falha ao registrar a escovação.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao conectar com a API.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o check-in e garanta +10 pontos!</Text>

      <TouchableOpacity style={styles.button} onPress={salvarEscovacao}>
        <Text style={styles.buttonText}>Fazer Check-in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#0066FF',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
