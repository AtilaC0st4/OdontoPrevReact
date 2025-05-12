import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Text, View } from 'react-native';

export default function Cadastro() {
  const [loading, setLoading] = useState(false);

  const salvarEscovacao = async () => {
    setLoading(true); // Inicia o carregamento
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
          userId: 1, // ajuste conforme o usuário real
          brushingTime: new Date().toISOString()
        }),
      });

      // Tenta converter a resposta para JSON
      const responseData = await response.json();

      if (response.ok) {
        // Após salvar a escovação, atualizar pontos do usuário
        await atualizarPontos();
        Alert.alert('Sucesso', `Check-in registrado em ${data} às ${horario}`);
      } else {
        Alert.alert('Erro', `Falha ao registrar a escovação: ${responseData.message || 'Desconhecido'}`);
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      Alert.alert('Erro', 'Erro ao conectar com a API.');
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  const atualizarPontos = async () => {
    try {
      // Requisitar os dados do usuário para pegar os pontos atualizados
      const response = await fetch('http://192.168.25.10:5023/api/users/1'); // Substitua com o ID correto
      const dados = await response.json();

      if (dados) {
        // Atualizar pontos na interface do usuário ou em outro estado se necessário
        Alert.alert('Pontos Atualizados', `Você tem ${dados.points} pontos agora!`);
      }
    } catch (error) {
      console.error('Erro ao obter os pontos do usuário:', error);
      Alert.alert('Erro', 'Não foi possível atualizar os pontos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o check-in e garanta +10 pontos!</Text>

      {/* Indicador de carregamento */}
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
