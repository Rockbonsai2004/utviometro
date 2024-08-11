import React from 'react';
import { View, StyleSheet } from 'react-native';

type TrafficLightProps = {
  color: 'red' | 'amber' | 'green';
};

const TrafficLight: React.FC<TrafficLightProps> = ({ color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, color === 'red' && styles.red]} />
      <View style={[styles.circle, color === 'amber' && styles.amber]} />
      <View style={[styles.circle, color === 'green' && styles.green]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 300,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-around',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'gray',
  },
  red: {
    backgroundColor: 'red',
  },
  amber: {
    backgroundColor: 'orange',
  },
  green: {
    backgroundColor: 'green',
  },
});

export default TrafficLight;
