import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Importando useFocusEffect

const Perfil = () => {
  const [nome, setNome] = useState('');
  const [nomeEditado, setNomeEditado] = useState('');
  const [pontos, setPontos] = useState(0);
  const [nivel, setNivel] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  // Carregar dados do usuário sempre que a tela for acessada
  useFocusEffect(
    React.useCallback(() => {
      const carregarUsuario = async () => {
        try {
          const response = await fetch('http://192.168.25.10:5023/api/users');
          const dados = await response.json();

          const usuario = Array.isArray(dados) && dados.length > 0 ? dados[0] : null;

          if (usuario) {
            setUserId(usuario.id);
            setNome(usuario.name);
            setNomeEditado(usuario.name);
            setPontos(usuario.points ?? 0);
            setNivel(usuario.level ?? Math.floor((usuario.points ?? 0) / 100));
          } else {
            Alert.alert('Erro', 'Usuário não encontrado.');
          }
        } catch (error) {
          Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
        } finally {
          setCarregando(false);
        }
      };

      carregarUsuario();
    }, [])
  );

  const salvarNome = async () => {
    if (!nomeEditado.trim()) {
      Alert.alert('Atenção', 'O nome não pode estar vazio.');
      return;
    }

    if (userId === null) {
      Alert.alert('Erro', 'ID do usuário não encontrado.');
      return;
    }

    setSalvando(true);
    try {
      const response = await fetch(`http://192.168.25.10:5023/api/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId, name: nomeEditado }),
      });

      if (!response.ok) throw new Error();

      setNome(nomeEditado);
      Alert.alert('Sucesso', 'Nome atualizado com sucesso!');
    } catch {
      Alert.alert('Erro', 'Não foi possível atualizar o nome.');
    } finally {
      setSalvando(false);
    }
  };

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0066FF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nomeUsuario}>Olá {nome}</Text>

      <TextInput
        style={styles.input}
        value={nomeEditado}
        onChangeText={setNomeEditado}
        placeholder="Editar nome"
      />
      <Button title={salvando ? 'Salvando...' : 'Salvar'} onPress={salvarNome} disabled={salvando} />

      <View style={styles.infoContainer}>
        <View style={styles.infoBox1}>
          <Text style={styles.infoLabel}>Pontos</Text>
          <Text style={styles.infoValue}>{pontos}</Text>
        </View>

        <View style={styles.infoBox2}>
          <Text style={styles.infoLabel}>Nível</Text>
          <Text style={styles.infoValue}>{nivel}</Text>
        </View>
      </View>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nomeUsuario: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30,
  },
  infoBox1: {
    alignItems: 'center',
    backgroundColor: '#A1F1FF',
    padding: 20,
    borderRadius: 15,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoBox2: {
    alignItems: 'center',
    backgroundColor: '#609FFF',
    padding: 20,
    borderRadius: 15,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
  },
});
