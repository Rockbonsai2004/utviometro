import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactUsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contáctanos</Text>
      <Text>
        Información de contacto y formulario de contacto irían aquí.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ContactUsScreen;
