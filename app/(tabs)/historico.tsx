import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Alert } from 'react-native';

interface Escovacao {
  id: string;
  data: string;
  horario: string;
  pontos: number;
}

const Historico = () => {
  const [historico, setHistorico] = useState<Escovacao[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarHistorico = async () => {
      try {
        const response = await fetch('');
        if (!response.ok) {
          throw new Error('Erro ao buscar escovações');
        }
        const dados = await response.json();
        setHistorico(dados);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar o histórico.');
      } finally {
        setLoading(false);
      }
    };

    buscarHistorico();
  }, []);

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

      {loading ? (
        <ActivityIndicator size="large" color="#0066FF" />
      ) : (
        <FlatList
          data={historico}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.lista}
        />
      )}
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
    color: '#0066FF',
    fontWeight: 'bold',
  },
});
