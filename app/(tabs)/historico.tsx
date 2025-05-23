import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import HistoricoLista from '../../components/HistoricoLista';
import MensagemCarregamento from '../../components/MensagemCarregamento';

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
          const response = await fetch('http://192.168.25.10:5023/api/BrushingRecords');
          const dados = await response.json();

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

            if (!response.ok) throw new Error();
            setHistorico((prev) => prev.filter((item) => item.id !== id));
          } catch {
            Alert.alert('Erro', 'Não foi possível excluir o item.');
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Escovações</Text>
      <MensagemCarregamento loading={loading} vazio={!loading && historico.length === 0} />
      {!loading && historico.length > 0 && (
        <HistoricoLista historico={historico} onDelete={excluirItem} />
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
});
