import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bienvenido a nuestra Tienda de Plantas</Text>
      <Text style={styles.description}>
        Descubre una amplia variedad de plantas y accesorios para tu jardín. 
        Ofrecemos las mejores opciones para embellecer tu hogar y crear espacios verdes únicos.
      </Text>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default HomeScreen;

