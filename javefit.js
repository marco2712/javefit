import React, { useState } from 'react';
import { Menu, X, Home, Dumbbell, TrendingUp, Apple, Users, Calendar, User, ChevronRight, Play, Lock, Fingerprint } from 'lucide-react';

// ============================================
// COMPONENTES REUTILIZABLES
// ============================================

const SideMenu = ({ menuOpen, setMenuOpen, setCurrentScreen, user }) => {
  const MenuItem = ({ icon: Icon, text, onClick }) => (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 hover:bg-blue-50 rounded-xl transition-colors text-left"
    >
      <Icon className="w-5 h-5 text-blue-900" />
      <span className="font-medium text-gray-700">{text}</span>
      <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
    </button>
  );

  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)}></div>
      <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-2xl">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 text-white">
          <button onClick={() => setMenuOpen(false)} className="mb-4">
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-bold text-lg">{user.name}</h3>
              <p className="text-blue-200 text-sm">{user.program}</p>
              <p className="text-blue-300 text-xs">{user.code}</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <MenuItem icon={Home} text="Inicio" onClick={() => { setCurrentScreen('home'); setMenuOpen(false); }} />
          <MenuItem icon={Dumbbell} text="Mis Rutinas" onClick={() => { setCurrentScreen('routines'); setMenuOpen(false); }} />
          <MenuItem icon={TrendingUp} text="Progreso" onClick={() => { setCurrentScreen('stats'); setMenuOpen(false); }} />
          <MenuItem icon={Apple} text="Nutrición" onClick={() => { setCurrentScreen('nutrition'); setMenuOpen(false); }} />
          <MenuItem icon={Users} text="Comunidad" onClick={() => { setCurrentScreen('community'); setMenuOpen(false); }} />
          <MenuItem icon={Calendar} text="Horarios" />
          <MenuItem icon={User} text="Mi Perfil" onClick={() => { setCurrentScreen('profile'); setMenuOpen(false); }} />
        </nav>
      </div>
    </div>
  );
};

const Header = ({ title, setMenuOpen }) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-b-3xl">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="w-6"></div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label }) => (
  <div className="bg-white bg-opacity-10 rounded-xl p-4">
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-blue-200 text-sm">{label}</div>
  </div>
);

const NewsCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
      <div className="text-4xl">{image}</div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </div>
  );
};

const RoutineCard = ({ routine, onSelect }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-lg text-gray-800 flex-1">{routine.name}</h3>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          {routine.difficulty}
        </span>
      </div>
      
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <span>⏱️ {routine.duration}</span>
        <span>💪 {routine.exercises} ejercicios</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {routine.muscleGroups.map((group, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs">
            {group}
          </span>
        ))}
      </div>

      <button 
        onClick={() => onSelect(routine)}
        className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
      >
        <Play className="w-4 h-4" />
        Ver Rutina Completa
      </button>
    </div>
  );
};

// ============================================
// PANTALLAS
// ============================================

const LoginScreen = ({ setCurrentScreen }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <div className="w-24 h-24 bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
          <Dumbbell className="w-14 h-14 text-blue-900" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">JaveFit</h1>
        <p className="text-blue-200 text-lg">Pontificia Universidad Javeriana Cali</p>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Bienvenido</h2>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Usuario institucional</label>
            <input 
              type="text" 
              placeholder="estudiante@javerianacali.edu.co"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button 
          onClick={() => setCurrentScreen('biometric')}
          className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors mb-4"
        >
          Iniciar Sesión
        </button>

        <div className="text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>

      <p className="text-blue-200 text-sm mt-8">Desarrollado por WaveCore Technologies</p>
    </div>
  );
};

const BiometricScreen = ({ setCurrentScreen }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Fingerprint className="w-12 h-12 text-blue-900" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Acceso Biométrico</h2>
        <p className="text-gray-600 mb-8">
          Activa FaceID o huella dactilar para acceder de forma rápida y segura
        </p>

        <div className="space-y-3 mb-8">
          <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
            <Lock className="w-5 h-5" />
            Activar FaceID
          </button>
          
          <button 
            onClick={() => setCurrentScreen('home')}
            className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Continuar sin biometría
          </button>
        </div>

        <p className="text-xs text-gray-500">
          Podrás activar esta función más tarde desde tu perfil
        </p>
      </div>
    </div>
  );
};

const HomeScreen = ({ setMenuOpen, user, stats, news }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 pb-20 rounded-b-3xl">
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">JaveFit</h1>
          <div className="w-6"></div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">Hola, {user.name.split(' ')[0]}</h2>
          <p className="text-blue-200">¿Listo para entrenar hoy?</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard value={stats.workoutsThisWeek} label="Entrenamientos esta semana" />
          <StatCard value={`${stats.currentWeight} kg`} label="Peso actual" />
        </div>
      </div>

      <div className="px-6 -mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Rutina de Hoy</h3>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold">Fuerza Superior</h4>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">45 min</span>
            </div>
            <p className="text-blue-100 text-sm mb-4">8 ejercicios • Nivel Intermedio</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold w-full hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Comenzar Entrenamiento
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Novedades</h3>
          <div className="space-y-3">
            {news.map((item, idx) => (
              <NewsCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RoutinesScreen = ({ setMenuOpen, routines }) => {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Mis Rutinas" setMenuOpen={setMenuOpen} />

      <div className="px-6 pt-6">
        <div className="space-y-4">
          {routines.map(routine => (
            <RoutineCard 
              key={routine.id} 
              routine={routine}
              onSelect={setSelectedRoutine}
            />
          ))}
        </div>

        <button className="w-full mt-6 border-2 border-dashed border-blue-300 text-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
          + Crear Rutina Personalizada
        </button>
      </div>
    </div>
  );
};

const StatsScreen = ({ setMenuOpen, stats }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Mi Progreso" setMenuOpen={setMenuOpen} />

      <div className="px-6 pt-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Resumen Mensual</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-900">{stats.totalWorkouts}</div>
              <div className="text-sm text-gray-600 mt-1">Entrenamientos</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-700">{stats.caloriesBurned}</div>
              <div className="text-sm text-gray-600 mt-1">Calorías quemadas</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Evolución de Peso</h3>
          <div className="h-48 bg-gradient-to-t from-blue-50 to-transparent rounded-xl flex items-end justify-around p-4">
            <div className="w-8 bg-blue-400 rounded-t" style={{height: '60%'}}></div>
            <div className="w-8 bg-blue-500 rounded-t" style={{height: '70%'}}></div>
            <div className="w-8 bg-blue-600 rounded-t" style={{height: '65%'}}></div>
            <div className="w-8 bg-blue-700 rounded-t" style={{height: '75%'}}></div>
            <div className="w-8 bg-blue-800 rounded-t" style={{height: '80%'}}></div>
          </div>
          <div className="flex justify-around text-xs text-gray-500 mt-2">
            <span>Sem 1</span>
            <span>Sem 2</span>
            <span>Sem 3</span>
            <span>Sem 4</span>
            <span>Actual</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
          <h3 className="font-bold text-lg mb-2">🎯 Reto del Mes</h3>
          <p className="text-purple-100 mb-4">30 días de entrenamiento continuo</p>
          <div className="bg-white bg-opacity-20 rounded-full h-3 mb-2">
            <div className="bg-white h-3 rounded-full" style={{width: '56%'}}></div>
          </div>
          <p className="text-sm text-purple-100">17 de 30 días completados</p>
        </div>
      </div>
    </div>
  );
};

const ProfileScreen = ({ setMenuOpen, user, stats }) => {
  const InfoRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );

  const SettingButton = ({ icon: Icon, text }) => (
    <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
      <Icon className="w-5 h-5 text-gray-600" />
      <span className="flex-1 text-left text-gray-700">{text}</span>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 pb-24 rounded-b-3xl">
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Mi Perfil</h1>
          <div className="w-6"></div>
        </div>

        <div className="text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-blue-900 font-bold text-2xl">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
          <p className="text-blue-200">{user.code}</p>
        </div>
      </div>

      <div className="px-6 -mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Información Académica</h3>
          <div className="space-y-3">
            <InfoRow label="Programa" value={user.program} />
            <InfoRow label="Código" value={user.code} />
            <InfoRow label="Correo" value={user.email} />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Datos Físicos</h3>
          <div className="space-y-3">
            <InfoRow label="Peso" value={`${stats.currentWeight} kg`} />
            <InfoRow label="Altura" value="175 cm" />
            <InfoRow label="IMC" value="23.7" />
            <InfoRow label="Grasa corporal" value="18.5%" />
          </div>
          <button className="w-full mt-4 bg-blue-100 text-blue-700 py-3 rounded-xl font-semibold hover:bg-blue-200 transition-colors">
            Actualizar con Báscula Digital
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Configuración</h3>
          <div className="space-y-3">
            <SettingButton icon={Fingerprint} text="Acceso Biométrico" />
            <SettingButton icon={User} text="Editar Perfil" />
            <button className="w-full text-red-600 py-3 hover:bg-red-50 rounded-xl transition-colors font-semibold">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [menuOpen, setMenuOpen] = useState(false);

  const user = {
    name: "Marco Antonio Riascos",
    program: "Ingeniería de Sistemas",
    code: "2021250001",
    email: "marcor27@javerianacali.edu.co"
  };

  const stats = {
    workoutsThisWeek: 4,
    totalWorkouts: 23,
    currentWeight: 72.5,
    caloriesBurned: 1840
  };

  const routines = [
    {
      id: 1,
      name: "Rutina de Fuerza - Nivel Intermedio",
      duration: "45 min",
      exercises: 8,
      difficulty: "Intermedio",
      muscleGroups: ["Pecho", "Tríceps", "Hombros"]
    },
    {
      id: 2,
      name: "Cardio y Resistencia",
      duration: "30 min",
      exercises: 6,
      difficulty: "Principiante",
      muscleGroups: ["Cardio", "Core"]
    },
    {
      id: 3,
      name: "Pierna Completa",
      duration: "60 min",
      exercises: 10,
      difficulty: "Avanzado",
      muscleGroups: ["Cuádriceps", "Glúteos", "Isquiotibiales"]
    }
  ];

  const news = [
    {
      title: "Nueva Báscula Digital Disponible",
      description: "Mide tu composición corporal completa",
      image: "🏋️"
    },
    {
      title: "Reto del Mes: 30 Días Activos",
      description: "Únete a la comunidad javeriana",
      image: "🎯"
    },
    {
      title: "Nuevos Modelos 3D Anatómicos",
      description: "Aprende la técnica correcta",
      image: "🧠"
    }
  ];

  const screenProps = {
    setCurrentScreen,
    setMenuOpen,
    user,
    stats,
    routines,
    news
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      <SideMenu 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setCurrentScreen={setCurrentScreen}
        user={user}
      />
      
      {currentScreen === 'login' && <LoginScreen {...screenProps} />}
      {currentScreen === 'biometric' && <BiometricScreen {...screenProps} />}
      {currentScreen === 'home' && <HomeScreen {...screenProps} />}
      {currentScreen === 'routines' && <RoutinesScreen {...screenProps} />}
      {currentScreen === 'stats' && <StatsScreen {...screenProps} />}
      {currentScreen === 'profile' && <ProfileScreen {...screenProps} />}
    </div>
  );
};

export default App;