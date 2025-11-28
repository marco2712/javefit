# JaveFit - Aplicación Móvil para Gimnasio Javeriana Cali

Aplicación móvil desarrollada con React Native para la gestión de entrenamientos y rutinas del gimnasio de la Pontificia Universidad Javeriana Cali.

## 📁 Estructura del Proyecto

```
javefit/
├── App.js                      # Componente principal y navegación
├── package.json                # Dependencias del proyecto
├── src/
│   ├── components/             # Componentes reutilizables de UI
│   │   ├── Header.js           # Encabezado de pantallas
│   │   ├── StatCard.js         # Tarjeta de estadísticas
│   │   ├── NewsCard.js         # Tarjeta de noticias
│   │   ├── RoutineCard.js      # Tarjeta de rutinas
│   │   └── index.js            # Exportaciones de componentes
│   ├── screens/                # Pantallas de la aplicación
│   │   ├── LoginScreen.js      # Pantalla de inicio de sesión
│   │   ├── BiometricScreen.js  # Configuración biométrica
│   │   ├── HomeScreen.js       # Pantalla principal
│   │   ├── RoutinesScreen.js   # Lista de rutinas
│   │   ├── StatsScreen.js      # Estadísticas y progreso
│   │   ├── ProfileScreen.js    # Perfil del usuario
│   │   └── index.js            # Exportaciones de pantallas
│   ├── navigation/             # Componentes de navegación
│   │   └── SideMenu.js         # Menú lateral
│   └── data/                   # Datos mock y configuración
│       └── mockData.js         # Datos de prueba
```

## 🎯 Propuesta de Valor

JaveFit es una aplicación integral que ofrece:

- **Acceso institucional seguro** con autenticación biométrica
- **Rutinas personalizadas** adaptadas al nivel del usuario
- **Seguimiento de progreso** con estadísticas detalladas
- **Integración con báscula digital** para mediciones precisas
- **Modelos 3D anatómicos** para aprender técnicas correctas
- **Comunidad javeriana** para motivación y retos grupales

## 🚀 Características Implementadas

### Autenticación
- Login con credenciales institucionales
- Opción de acceso biométrico (FaceID/Huella)

### Dashboard Principal
- Vista de rutina del día
- Estadísticas de entrenamientos semanales
- Novedades y noticias del gimnasio

### Gestión de Rutinas
- Biblioteca de rutinas predefinidas
- Detalles de ejercicios y grupos musculares
- Opción para crear rutinas personalizadas

### Seguimiento de Progreso
- Gráficos de evolución de peso
- Contador de entrenamientos mensuales
- Calorías quemadas
- Sistema de retos y desafíos

### Perfil de Usuario
- Información académica
- Datos físicos y composición corporal
- Configuración de acceso biométrico
- Actualización con báscula digital

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Instalar Expo CLI globalmente (si no lo tienes):
```bash
npm install -g expo-cli
```

3. Iniciar la aplicación:
```bash
npm start
```

4. Ejecutar en dispositivo o emulador:
- Para Android: `npm run android`
- Para iOS: `npm run ios`
- Para Web: `npm run web`

## 📱 Tecnologías

- **React Native** - Framework principal
- **Expo** - Herramientas de desarrollo
- **React Hooks** - Manejo de estado

## 🎨 Diseño

- Colores principales: Azul Javeriana (#1E3A8A)
- Diseño moderno con esquinas redondeadas
- Interfaz intuitiva y amigable
- Optimizado para dispositivos móviles

## 👥 Desarrollado por

**WaveCore Technologies**

Para la Pontificia Universidad Javeriana Cali

---

## 📝 Notas de Desarrollo

Este es un prototipo funcional. Características futuras incluirán:
- Integración con backend real
- Sincronización con báscula digital IoT
- Visualización de modelos 3D anatómicos
- Sistema de notificaciones push
- Red social interna
- Reserva de horarios del gimnasio
