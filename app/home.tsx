import React, { Component } from 'react'
import { Text, StyleSheet, View, Pressable, } from 'react-native'
import { Link, Router } from "expo-router";


export default class home extends Component {
  render() {
    return (
      <View>
        <Link href="./cadastroEscovacao" asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnAcessar}>Cadastre uma escovacão</Text>
          </Pressable>
        </Link>

        <Link href="./visualizarEscovacao" asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnAcessar}>Veja suas escovacões</Text>
          </Pressable>
        </Link>

        <Link href="./pontuacao" asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnAcessar}>Veja seus Pontos</Text>
          </Pressable>
        </Link>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#6AE9FF",
    paddingVertical: 12, // Melhor ajuste do tamanho do botão
    paddingHorizontal: 30, // Melhor que width fixa
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  btnAcessar: {
    fontSize: 20, // Reduzindo um pouco para manter proporção
    fontWeight: "bold",
    color: "#033EA6",
  }
})
