import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckinButton from '../../components/CheckingButton';
import { useBrushing } from '../../hooks/useBrushing';

export default function Cadastro() {
  const userId = 1; // Pode vir de um contexto ou async storage depois
  const { salvarEscovacao, loading } = useBrushing(userId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o check-in e garanta +10 pontos!</Text>
      <CheckinButton onPress={salvarEscovacao} loading={loading} />
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
    textAlign: 'center',
  },
});
