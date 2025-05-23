import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import EscovacaoItem from './EscovacaoItem';

interface Escovacao {
  id: string;
  data: string;
  horario: string;
  pontos: number;
}

interface Props {
  historico: Escovacao[];
  onDelete: (id: string) => void;
}

const HistoricoLista = ({ historico, onDelete }: Props) => {
  return (
    <FlatList
      data={historico}
      renderItem={({ item }) => <EscovacaoItem {...item} onDelete={onDelete} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.lista}
    />
  );
};

export default HistoricoLista;

const styles = StyleSheet.create({
  lista: {
    paddingBottom: 20,
  },
});
