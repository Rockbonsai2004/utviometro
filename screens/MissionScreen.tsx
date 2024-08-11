
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MissionScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuestra Misión</Text>
      <Text>
        Aquí puedes colocar la misión de tu proyecto.
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

export default MissionScreen;
