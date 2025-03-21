import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function Cadastro() {
  const [data, setData] = useState(''); 
  const [horario, setHorario] = useState(''); 

  const salvarEscovacao = () => {
    if (!data || !horario) {
      Alert.alert('Erro', 'Por favor, preencha a data e o horário.');
      return;
    }

    Alert.alert('Sucesso', `Escovação registrada em ${data} às ${horario}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Escovação</Text>

     
      <TextInput
        style={styles.input}
        placeholder="Data (DD/MM/AAAA)"
        value={data}
        onChangeText={setData}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Horário (HH:MM)"
        value={horario}
        onChangeText={setHorario}
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