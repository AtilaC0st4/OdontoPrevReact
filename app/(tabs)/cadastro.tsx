import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Text, View } from 'react-native';

type UserPoints = {
  points: number;
};

export default function Cadastro() {
  const [loading, setLoading] = useState(false);

  const salvarEscovacao = async () => {
    setLoading(true);
    const agora = new Date();
    const data = agora.toLocaleDateString('pt-BR');
    const horario = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    try {
      const response = await fetch('http://192.168.25.10:5023/api/BrushingRecords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 1, // Ajuste para o usuário correto
          brushingTime: new Date().toISOString(),
        }),
      });

      const responseData = await response.json();
      console.log('Resposta da API:', responseData);

      if (response.ok) {
        await atualizarPontos();
        Alert.alert('Sucesso', `Check-in registrado em ${data} às ${horario}`);
      } else {
        const errorMsg =
          (responseData && (responseData.message || JSON.stringify(responseData))) || 'Desconhecido';
        Alert.alert('Erro', `Falha ao registrar a escovação: ${errorMsg}`);
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      Alert.alert('Erro', 'Erro ao conectar com a API.');
    } finally {
      setLoading(false);
    }
  };

  const atualizarPontos = async () => {
    try {
      const response = await fetch('http://192.168.25.10:5023/api/users/1'); // ID correto do usuário
      if (!response.ok) throw new Error('Erro ao buscar pontos');

      const dados: UserPoints = await response.json();

      if (dados && typeof dados.points === 'number') {
        Alert.alert('Pontos Atualizados', `Você tem ${dados.points} pontos agora!`);
      } else {
        Alert.alert('Aviso', 'Não foi possível obter os pontos do usuário.');
      }
    } catch (error) {
      console.error('Erro ao obter os pontos do usuário:', error);
      Alert.alert('Erro', 'Não foi possível atualizar os pontos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o check-in e garanta +10 pontos!</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0066FF" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={salvarEscovacao}>
          <Text style={styles.buttonText}>Fazer Check-in</Text>
        </TouchableOpacity>
      )}
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
