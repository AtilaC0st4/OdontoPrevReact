import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

// Definindo o tipo para cada item do histórico
interface Escovacao {
  id: string;
  data: string;
  horario: string;
  pontos: number;
}

const Historico = () => {
  // Dados de exemplo para o histórico de escovações
  const historicoEscovacoes: Escovacao[] = [
    { id: '1', data: '2023-10-01', horario: '08:30', pontos: 50 },
    { id: '2', data: '2023-10-01', horario: '13:45', pontos: 50 },
    { id: '3', data: '2023-10-02', horario: '09:15', pontos: 50 },
    { id: '4', data: '2023-10-02', horario: '20:00', pontos: 50 },
    { id: '5', data: '2023-10-03', horario: '07:50', pontos: 50 },
  ];

  // Função para renderizar cada item da lista
  const renderItem = ({ item }: { item: Escovacao }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemData}>{item.data}</Text>
      <Text style={styles.itemHorario}>{item.horario}</Text>
      <Text style={styles.itemPontos}>+{item.pontos} pontos</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Escovações</Text>

      {/* Lista de escovações */}
      <FlatList
        data={historicoEscovacoes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

export default Historico;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  lista: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    color: '#4CAF50', // Verde para destacar os pontos
    fontWeight: 'bold',
  },
});