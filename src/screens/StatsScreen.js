import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header } from '../components';

const StatsScreen = ({ onMenuPress, stats }) => {
  return (
    <View style={styles.container}>
      <Header title="Mi Progreso" onMenuPress={onMenuPress} />

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumen Mensual</Text>
          <View style={styles.statsGrid}>
            <View style={[styles.statBox, styles.blueBox]}>
              <Text style={styles.statValue}>{stats.totalWorkouts}</Text>
              <Text style={styles.statLabel}>Entrenamientos</Text>
            </View>
            <View style={[styles.statBox, styles.greenBox]}>
              <Text style={styles.statValue}>{stats.caloriesBurned}</Text>
              <Text style={styles.statLabel}>Calorías quemadas</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Evolución de Peso</Text>
          <View style={styles.chartContainer}>
            <View style={styles.chart}>
              <View style={[styles.bar, { height: '60%' }]} />
              <View style={[styles.bar, { height: '70%' }]} />
              <View style={[styles.bar, { height: '65%' }]} />
              <View style={[styles.bar, { height: '75%' }]} />
              <View style={[styles.bar, { height: '80%' }]} />
            </View>
          </View>
          <View style={styles.chartLabels}>
            <Text style={styles.chartLabel}>Sem 1</Text>
            <Text style={styles.chartLabel}>Sem 2</Text>
            <Text style={styles.chartLabel}>Sem 3</Text>
            <Text style={styles.chartLabel}>Sem 4</Text>
            <Text style={styles.chartLabel}>Actual</Text>
          </View>
        </View>

        <View style={styles.challengeCard}>
          <Text style={styles.challengeIcon}>🎯</Text>
          <Text style={styles.challengeTitle}>Reto del Mes</Text>
          <Text style={styles.challengeDescription}>
            30 días de entrenamiento continuo
          </Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '56%' }]} />
          </View>
          <Text style={styles.progressText}>17 de 30 días completados</Text>
        </View>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statBox: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  blueBox: {
    backgroundColor: '#DBEAFE',
  },
  greenBox: {
    backgroundColor: '#D1FAE5',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  chartContainer: {
    height: 192,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
  },
  chart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  bar: {
    width: 32,
    backgroundColor: '#3B82F6',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  chartLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  chartLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  challengeCard: {
    backgroundColor: '#8B5CF6',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  challengeIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#E9D5FF',
    marginBottom: 16,
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 6,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  progressText: {
    fontSize: 14,
    color: '#E9D5FF',
  },
});

export default StatsScreen;
