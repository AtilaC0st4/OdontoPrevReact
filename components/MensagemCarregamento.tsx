import React from 'react';
import { Text, ActivityIndicator, StyleSheet, View } from 'react-native';

interface Props {
  loading: boolean;
  vazio: boolean;
}

const MensagemCarregamento = ({ loading, vazio }: Props) => {
  if (loading) return <ActivityIndicator size="large" color="#0066FF" />;
  if (vazio) return <Text style={styles.mensagemVazia}>Nenhum registro encontrado.</Text>;
  return null;
};

export default MensagemCarregamento;

const styles = StyleSheet.create({
  mensagemVazia: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 50,
  },
});
