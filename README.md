# Users App - React Native

## Descripción
Aplicación móvil que implementa un CRUD de usuarios con AsyncStorage para la persistencia de datos.

## Funcionalidades
- Crear, leer, actualizar y eliminar usuarios
- Gestión de fotografías de perfil
- Almacenamiento local con AsyncStorage
- Interfaz en español

## Estructura
```
src/
├── services/
│   ├── UserService.js
│   └── ImageService.js
├── constants/
│   ├── storage.js
│   └── theme.js
├── utils/
│   └── helpers.js
└── App.js
```

## Instalación
```bash
npm install
npm start
```

## Tecnologías
- React Native
- Expo
- AsyncStorage
- Expo Image Picker

## Criterios Cumplidos
- CRUD completo de usuarios
- Listado con visualización individual
- Campos: nombre, apellido, fotografía
- Fotografías en miniatura
- Eliminación de fotos individual
- Edición y eliminación de registros
- Persistencia con AsyncStorage
