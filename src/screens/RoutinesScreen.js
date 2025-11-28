import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Header, RoutineCard } from '../components';

const RoutinesScreen = ({ onMenuPress, routines }) => {
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  return (
    <View style={styles.container}>
      <Header title="Mis Rutinas" onMenuPress={onMenuPress} />

      <ScrollView style={styles.content}>
        {routines.map((routine) => (
          <RoutineCard
            key={routine.id}
            routine={routine}
            onSelect={setSelectedRoutine}
          />
        ))}

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>
            + Crear Rutina Personalizada
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  createButton: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#93C5FD',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  createButtonText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RoutinesScreen;
