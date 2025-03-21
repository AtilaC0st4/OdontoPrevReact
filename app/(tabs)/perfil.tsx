import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Perfil = () => {
 
  const usuario = {
    nome: 'João Silva',
    pontos: 1250,
    nivel: 8,
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.nomeUsuario}>Olá {usuario.nome}</Text>

      
      <View style={styles.infoContainer}>
        <View style={styles.infoBox1}>
          
          <Text style={styles.infoLabel}>Pontos</Text>
          <Text style={styles.infoValue}>{usuario.pontos}</Text>
        </View>

        <View style={styles.infoBox2}>
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