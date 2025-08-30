# RedTur - Conecta con el Turismo de Chile

Una plataforma moderna que conecta profesionales del turismo en Chile con oportunidades laborales y colaboraciones significativas.

## 🎯 Sobre el Proyecto

RedTur es una red curada que democratiza las oportunidades en turismo, conectando a guías, agencias, operadores y profesionales del sector turístico chileno.

### ✨ Características Principales

- **Navegación Moderna**: Interfaz limpia con tipografía Inter y numeración técnica (01/, 02/, 03/, 04/)
- **Diseño Minimalista**: Iconos Lucide, efectos sutiles y animaciones fluidas
- **Formulario Optimizado**: Proceso de inscripción simplificado con validación
- **Responsive Design**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Reveal animations con IntersectionObserver nativo

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Fonts**: Inter, Barlow Condensed, League Spartan
- **Icons**: Lucide React
- **Animations**: CSS Transitions + IntersectionObserver

## 📦 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/fforttuna/redtur-conecta-crece.git

# 2. Navegar al directorio del proyecto
cd redtur-conecta-crece

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:8080` (o el puerto que Vite asigne).

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   ├── HeroSection.tsx # Sección principal
│   ├── Navbar.tsx      # Navegación
│   ├── ProblemSection.tsx # Sección de problemas
│   ├── HowItWorksSection.tsx # Cómo funciona
│   ├── MissionSection.tsx # Nuestra misión
│   ├── BetaSection.tsx # Formulario de inscripción
│   ├── TestimonialSection.tsx # Testimonios
│   ├── PartnersSection.tsx # Socios estratégicos
│   └── FloatingWhatsAppButton.tsx # Botón flotante
├── pages/              # Páginas de la aplicación
│   ├── Index.tsx       # Landing page principal
│   └── About.tsx       # Página Sobre nosotros
├── index.css           # Estilos globales
└── main.tsx           # Punto de entrada
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Fondo**: `#0A0B0D` (casi negro)
- **Primario**: Azul cobalto (`#0B3A64 → #0E5AA3 → #103B79`)
- **Secundario**: Morado profundo (`#3A1F5C`)
- **Acento**: Naranja atenuado (`#C26B2D`)
- **Texto**: Blanco puro (`#FFFFFF`) y gris claro (`#D7DBE0`)

### Tipografías
- **Navegación**: Inter (600-700, tracking amplio)
- **Cuerpo**: League Spartan (400-700)
- **Números**: Inter con variantes numéricas

### Micro-interacciones
- Transiciones suaves (200-260ms, ease-out)
- Hover states con `:hover` y `:focus-visible`
- Animaciones de reveal con IntersectionObserver
- Respeto por `prefers-reduced-motion`

## 📱 Secciones de la Landing

1. **Hero Section**: Título principal con fondo SVG complejo
2. **El Problema**: 3 cards con iconos y problemas identificados
3. **Cómo Funciona**: 3 pasos con formulario integrado
4. **Nuestra Misión**: 3 columnas con objetivos
5. **Testimonio**: Sección inmersiva con quote
6. **Socios Estratégicos**: Logos con efectos hover
7. **Formulario Beta**: Inscripción con validación

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linting con ESLint
```

## 📄 Licencia

Este proyecto es privado y pertenece a RedTur.

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **WhatsApp**: +56 9 8177 9956
- **Email**: [Tu email aquí]
- **Sitio Web**: [URL del sitio]

---

Desarrollado con ❤️ para conectar el turismo de Chile
