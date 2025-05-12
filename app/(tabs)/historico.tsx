import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

interface Escovacao {
  id: string;
  data: string;
  horario: string;
  pontos: number;
}

const Historico = () => {
  const [historico, setHistorico] = useState<Escovacao[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const buscarHistorico = async () => {
        setLoading(true);

        try {
          console.log('Buscando histórico...');
          const response = await fetch('http://192.168.25.10:5023/api/BrushingRecords');

          if (!response.ok) {
            console.log('Erro HTTP:', response.status);
            throw new Error('Erro ao buscar escovações');
          }

          const dados = await response.json();
          console.log('Resposta da API:', dados);

          const lista = Array.isArray(dados) ? dados : dados?.items || [];

          const historicoFormatado = lista.map((item: any) => {
            const dataHora = new Date(item.brushingTime);
            return {
              id: String(item.id),
              data: dataHora.toLocaleDateString('pt-BR'),
              horario: dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
              pontos: item.points ?? 10,
            };
          });

          setHistorico(historicoFormatado);
        } catch (error) {
          console.log('Erro no fetch:', error);
          Alert.alert('Erro', 'Não foi possível carregar o histórico.');
        } finally {
          setLoading(false);
        }
      };

      buscarHistorico();
    }, [])
  );

  const excluirItem = async (id: string) => {
    Alert.alert('Confirmação', 'Deseja realmente excluir este item?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            const response = await fetch(`http://192.168.25.10:5023/api/BrushingRecords/${id}`, {
              method: 'DELETE',
            });

            if (!response.ok) {
              throw new Error('Erro ao excluir item');
            }

            setHistorico((prev) => prev.filter((item) => item.id !== id));
          } catch (error) {
            Alert.alert('Erro', 'Não foi possível excluir o item.');
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }: { item: Escovacao }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => excluirItem(item.id)} style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={20} color="#FF3333" />
      </TouchableOpacity>
      <View style={styles.itemContent}>
        <Text style={styles.itemData}>{item.data}</Text>
        <Text style={styles.itemHorario}>{item.horario}</Text>
        <Text style={styles.itemPontos}>+{item.pontos} pontos</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Escovações</Text>

      {loading ? (
  <ActivityIndicator size="large" color="#0066FF" />
) : historico.length === 0 ? (
  <Text style={styles.mensagemVazia}>Nenhum registro encontrado.</Text>
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
  mensagemVazia: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 50,
  },
  
});
