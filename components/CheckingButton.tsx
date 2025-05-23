import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  loading: boolean;
};

export default function CheckinButton({ onPress, loading }: Props) {
  return loading ? (
    <ActivityIndicator size="large" color="#0066FF" />
  ) : (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Fazer Check-in</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#0066FF',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
