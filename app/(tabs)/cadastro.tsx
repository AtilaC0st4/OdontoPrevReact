import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';
import { MaskedTextInput } from 'react-native-mask-text';

export default function Cadastro() {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const salvarEscovacao = () => {
    if (!data || !horario) {
      Alert.alert('Erro', 'Por favor, preencha a data e o horário.');
      return;
    }

    if (data.length !== 10) {
      Alert.alert('Erro', 'Data incompleta.');
      return;
    }

    if (horario.length !== 5) {
      Alert.alert('Erro', 'Horário incompleto.');
      return;
    }

    Alert.alert('Sucesso', `Escovação registrada em ${data} às ${horario}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Escovação</Text>

      <MaskedTextInput
        mask="99/99/9999"
        placeholder="Data (DD/MM/AAAA)"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => setData(text)}
        value={data}
      />

      <MaskedTextInput
        mask="99:99"
        placeholder="Horário (HH:MM)"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => setHorario(text)}
        value={horario}
      />

      <TouchableOpacity style={styles.button} onPress={salvarEscovacao}>
        <Text style={styles.buttonText}>Salvar Escovação</Text>
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
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
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
