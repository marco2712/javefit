import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const SideMenu = ({ visible, onClose, onNavigate, user }) => {
  const MenuItem = ({ icon, text, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuIcon}>{icon}</Text>
      <Text style={styles.menuText}>{text}</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.overlayBackground}
          onPress={onClose}
          activeOpacity={1}
        />
        <View style={styles.menuContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
            <View style={styles.userInfo}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {user.name.split(' ').map(n => n[0]).join('')}
                </Text>
              </View>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userProgram}>{user.program}</Text>
              <Text style={styles.userCode}>{user.code}</Text>
            </View>
          </View>

          <ScrollView style={styles.menuList}>
            <MenuItem
              icon="🏠"
              text="Inicio"
              onPress={() => {
                onNavigate('home');
                onClose();
              }}
            />
            <MenuItem
              icon="💪"
              text="Mis Rutinas"
              onPress={() => {
                onNavigate('routines');
                onClose();
              }}
            />
            <MenuItem
              icon="📈"
              text="Progreso"
              onPress={() => {
                onNavigate('stats');
                onClose();
              }}
            />
            <MenuItem
              icon="🍎"
              text="Nutrición"
              onPress={() => {
                onNavigate('nutrition');
                onClose();
              }}
            />
            <MenuItem
              icon="👥"
              text="Comunidad"
              onPress={() => {
                onNavigate('community');
                onClose();
              }}
            />
            <MenuItem icon="📅" text="Horarios" onPress={() => {}} />
            <MenuItem
              icon="👤"
              text="Mi Perfil"
              onPress={() => {
                onNavigate('profile');
                onClose();
              }}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  overlayBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    width: width * 0.8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    backgroundColor: '#1E3A8A',
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  closeButton: {
    marginBottom: 16,
  },
  closeIcon: {
    fontSize: 24,
    color: '#fff',
  },
  userInfo: {
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  userProgram: {
    fontSize: 14,
    color: '#93C5FD',
    marginBottom: 2,
  },
  userCode: {
    fontSize: 12,
    color: '#BFDBFE',
  },
  menuList: {
    flex: 1,
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 4,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  menuArrow: {
    fontSize: 20,
    color: '#9CA3AF',
  },
});

export default SideMenu;
