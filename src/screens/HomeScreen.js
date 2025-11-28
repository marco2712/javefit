import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StatCard, NewsCard } from '../components';

const HomeScreen = ({ onMenuPress, user, stats, news }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={onMenuPress}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>JaveFit</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.greetingSection}>
          <Text style={styles.greeting}>Hola, {user.name.split(' ')[0]}</Text>
          <Text style={styles.subgreeting}>¿Listo para entrenar hoy?</Text>
        </View>

        <View style={styles.statsRow}>
          <StatCard
            value={stats.workoutsThisWeek}
            label="Entrenamientos esta semana"
          />
          <StatCard
            value={`${stats.currentWeight} kg`}
            label="Peso actual"
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.todayRoutineCard}>
          <Text style={styles.sectionTitle}>Rutina de Hoy</Text>
          <View style={styles.routineHighlight}>
            <View style={styles.routineHeader}>
              <Text style={styles.routineTitle}>Fuerza Superior</Text>
              <View style={styles.durationBadge}>
                <Text style={styles.durationText}>45 min</Text>
              </View>
            </View>
            <Text style={styles.routineInfo}>
              8 ejercicios • Nivel Intermedio
            </Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>
                ▶ Comenzar Entrenamiento
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.newsSection}>
          <Text style={styles.sectionTitle}>Novedades</Text>
          {news.map((item, idx) => (
            <NewsCard key={idx} {...item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#1E3A8A',
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 80,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  menuIcon: {
    fontSize: 24,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  placeholder: {
    width: 24,
  },
  greetingSection: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subgreeting: {
    fontSize: 16,
    color: '#93C5FD',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  content: {
    paddingHorizontal: 24,
    marginTop: -48,
  },
  todayRoutineCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  routineHighlight: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    padding: 16,
  },
  routineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  routineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  durationBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  durationText: {
    fontSize: 14,
    color: '#fff',
  },
  routineInfo: {
    fontSize: 14,
    color: '#BFDBFE',
    marginBottom: 16,
  },
  startButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: '600',
  },
  newsSection: {
    marginBottom: 24,
  },
});

export default HomeScreen;
