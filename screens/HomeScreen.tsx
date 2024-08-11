import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import axios from 'axios';
import TrafficLight from '../components/TrafficLight';

type Pluviometro = {
  pluviómetro_id: number;
  nombre: string;
};

const HomeScreen: React.FC = () => {
  const [selectedPluviometro, setSelectedPluviometro] = useState<number | null>(null);
  const [pluviometros, setPluviometros] = useState<Pluviometro[]>([]);
  const [alertLevel, setAlertLevel] = useState<'red' | 'amber' | 'green'>('green');

  useEffect(() => {
    // Fetch the list of pluviómetros from the API
    const fetchPluviometros = async () => {
      try {
        const response = await axios.get('http://192.168.100.3:3000/pluviometros');
        setPluviometros(response.data);
      } catch (error) {
        console.error('Error fetching pluviómetros:', error);
      }
    };

    fetchPluviometros();
  }, []);

  useEffect(() => {
    if (selectedPluviometro) {
      // Fetch the alert level for the selected pluviómetro
      const fetchAlertLevel = async () => {
        try {
          const response = await axios.get(`http://192.168.100.3:3000/alerta/${selectedPluviometro}`);
          const { nivel_alerta } = response.data;
          
          switch (nivel_alerta) {
            case 'rojo':
              setAlertLevel('red');
              break;
            case 'ambar':
              setAlertLevel('amber');
              break;
            case 'verde':
              setAlertLevel('green');
              break;
            default:
              setAlertLevel('green');
          }
        } catch (error) {
          console.error('Error fetching alert level:', error);
        }
      };

      fetchAlertLevel();
    }
  }, [selectedPluviometro]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerta de Inundación</Text>

    <Picker
         selectedValue={selectedPluviometro}
         style={styles.picker}
         onValueChange={(itemValue: number | null) => setSelectedPluviometro(itemValue)}
>
         <Picker.Item label="Seleccione un pluviómetro" value={null} />
         {pluviometros.map((pluviometro) => (
         <Picker.Item key={pluviometro.pluviómetro_id} label={pluviometro.nombre} value={pluviometro.pluviómetro_id} />
      ))}
    </Picker>


      {selectedPluviometro && <TrafficLight color={alertLevel} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 250,
    marginBottom: 20,
  },
});

export default HomeScreen;
