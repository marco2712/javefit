import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import {
  LoginScreen,
  BiometricScreen,
  HomeScreen,
  RoutinesScreen,
  StatsScreen,
  ProfileScreen,
} from './src/screens';
import SideMenu from './src/navigation/SideMenu';
import { mockUser, mockStats, mockRoutines, mockNews } from './src/data/mockData';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    setCurrentScreen('biometric');
  };

  const handleBiometricContinue = () => {
    setCurrentScreen('home');
  };

  const handleBiometricSkip = () => {
    setCurrentScreen('home');
  };

  const handleMenuPress = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'biometric':
        return (
          <BiometricScreen
            onContinue={handleBiometricContinue}
            onSkip={handleBiometricSkip}
          />
        );
      case 'home':
        return (
          <HomeScreen
            onMenuPress={handleMenuPress}
            user={mockUser}
            stats={mockStats}
            news={mockNews}
          />
        );
      case 'routines':
        return (
          <RoutinesScreen
            onMenuPress={handleMenuPress}
            routines={mockRoutines}
          />
        );
      case 'stats':
        return (
          <StatsScreen onMenuPress={handleMenuPress} stats={mockStats} />
        );
      case 'profile':
        return (
          <ProfileScreen
            onMenuPress={handleMenuPress}
            user={mockUser}
            stats={mockStats}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E3A8A" />
      {renderScreen()}
      <SideMenu
        visible={menuOpen}
        onClose={handleMenuClose}
        onNavigate={handleNavigate}
        user={mockUser}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A',
  },
});

export default App;
