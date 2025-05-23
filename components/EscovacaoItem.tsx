import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  id: string;
  data: string;
  horario: string;
  pontos: number;
  onDelete: (id: string) => void;
}

const EscovacaoItem = ({ id, data, horario, pontos, onDelete }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onDelete(id)} style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={20} color="#FF3333" />
      </TouchableOpacity>
      <View style={styles.itemContent}>
        <Text style={styles.itemData}>{data}</Text>
        <Text style={styles.itemHorario}>{horario}</Text>
        <Text style={styles.itemPontos}>+{pontos} pontos</Text>
      </View>
    </View>
  );
};

export default EscovacaoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  deleteButton: {
    marginRight: 15,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemData: {
    fontSize: 16,
    color: '#666',
  },
  itemHorario: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  itemPontos: {
    fontSize: 16,
    color: '#0066FF',
    fontWeight: 'bold',
  },
});
