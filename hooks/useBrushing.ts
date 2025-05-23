import { useState } from 'react';
import { Alert } from 'react-native';

type UserPoints = {
  points: number;
};

export function useBrushing(userId: number) {
  const [loading, setLoading] = useState(false);

  const salvarEscovacao = async () => {
    setLoading(true);
    const agora = new Date();
    const data = agora.toLocaleDateString('pt-BR');
    const horario = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    try {
      const response = await fetch(`http://192.168.25.10:5023/api/BrushingRecords`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          brushingTime: new Date().toISOString(),
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        await atualizarPontos();
        Alert.alert('Sucesso', `Check-in registrado em ${data} às ${horario}`);
      } else {
        const errorMsg =
          (responseData && (responseData.message || JSON.stringify(responseData))) || 'Desconhecido';
        Alert.alert('Erro', `Falha ao registrar a escovação: ${errorMsg}`);
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      Alert.alert('Erro', 'Erro ao conectar com a API.');
    } finally {
      setLoading(false);
    }
  };

  const atualizarPontos = async () => {
    try {
      const response = await fetch(`http://192.168.25.10:5023/api/users/${userId}`);
      if (!response.ok) throw new Error('Erro ao buscar pontos');

      const dados: UserPoints = await response.json();

      if (typeof dados.points === 'number') {
        Alert.alert('Pontos Atualizados', `Você tem ${dados.points} pontos agora!`);
      } else {
        Alert.alert('Aviso', 'Não foi possível obter os pontos do usuário.');
      }
    } catch (error) {
      console.error('Erro ao obter os pontos do usuário:', error);
      Alert.alert('Erro', 'Não foi possível atualizar os pontos.');
    }
  };

  return { salvarEscovacao, loading };
}
