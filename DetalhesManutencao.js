import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const detalhesManutencao = ({ route }) => {
  const { id } = route.params;
  const detalhesManutencao = { equipamento: 'Televisao', descricao: 'Nao liga', status: 'Pendente' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Solicitação</Text>
      <Text>Equipamento: {detalhesManutencao.equipamento}</Text>
      <Text>Descrição: {detalhesManutencao.descricao}</Text>
      <Text>Status: {detalhesManutencao.status}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DetalhesManutencao;
