import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Perfil = () => {
  // Dados do usuário (pode ser substituído por dados dinâmicos)
  const usuario = {
    nome: 'João Silva',
    pontos: 1250,
    nivel: 8,
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com nome do usuário */}
      <Text style={styles.nomeUsuario}>{usuario.nome}</Text>

      {/* Container para pontos e nível */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Pontos</Text>
          <Text style={styles.infoValue}>{usuario.pontos}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Nível</Text>
          <Text style={styles.infoValue}>{usuario.nivel}</Text>
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
    marginBottom: 40,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  infoBox: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});