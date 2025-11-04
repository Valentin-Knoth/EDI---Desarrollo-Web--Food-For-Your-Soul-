# Food For Your Soul - Restaurante Gourmet

## 📋 Información del Proyecto

**Título:** Food For Your Soul  
**Autor:** [Tu Nombre]  
**Fecha:** 2024  
**Asignatura:** EDI Programación Web - Clase 13

---

## 🎯 Objetivo del Sitio

Sitio web completo para un restaurante gourmet que ofrece una experiencia culinaria de alta calidad. El objetivo es proporcionar información sobre el menú, permitir reservas de mesa, mostrar artículos del blog y facilitar el contacto con los clientes, todo con un diseño moderno, responsive y accesible.

---

## 🎨 Paleta de Colores

### Colores Principales
- **Brand (Color de marca):** `#ea462b` - Naranja/Rojo vibrante
- **Brand Dark:** `#d13d26` - Variante oscura del color principal
- **Fondo:** `#ffffff` - Blanco
- **Fondo oscuro:** `#111111` - Negro para secciones oscuras
- **Texto principal:** `#23292c` - Gris oscuro
- **Texto secundario:** `#777777` - Gris medio
- **Bordes:** `#ebebeb` - Gris claro
- **Bordes ligeros:** `#e3e1f3` - Gris muy claro para bordes sutiles
- **Hover:** `#f2f4f8` - Gris muy claro para efectos hover

### Implementación
Los colores se gestionan mediante **variables CSS** en `:root` para facilitar el mantenimiento y la coherencia visual.

```css
:root {
    --color-brand: #ea462b;
    --color-brand-dark: #d13d26;
    --color-bg: #ffffff;
    --color-bg-dark: #111111;
    --color-text: #23292c;
    --color-text-light: #777777;
    /* ... más variables */
}
```

---

## 📝 Tipografía

### Fuentes Utilizadas
- **Primaria:** `"Zilla Slab", serif` - Para títulos y encabezados
- **Secundaria:** `"Lato", sans-serif` - Para párrafos y texto general

### Sistema Tipográfico
Implementado con unidades **rem** para escalabilidad:

- **Base:** `1rem` (16px)
- **H1:** `5.625rem` (90px) - Títulos principales
- **H2:** `3.125rem` (50px) - Subtítulos
- **H3:** `1.375rem` (22px) - Encabezados de sección
- **H4:** `1.125rem` (18px) - Encabezados menores
- **Párrafo:** `1rem` (16px) - Texto base con `line-height: 1.625`

---

## 🧩 Componentes y Secciones Implementadas

### 1. Header y Navegación
- Barra de navegación fija (`position: fixed`) con z-index alto
- Logo clickeable con imagen responsive
- Menú responsive con toggle para móviles
- Dropdowns accesibles con soporte de teclado (Enter, Space, Escape)
- Botón "Book a Table" visible en desktop
- Navegación centrada con flexbox
- Header con sombra sutil para separación visual

### 2. Slider Principal (index.html)
- Slider de imágenes con transiciones suaves automáticas
- Contenido superpuesto centrado con títulos y llamados a la acción
- Animaciones de aparición con `@keyframes` (fadeIn, slideIn)
- Sistema de imágenes con background-image para mejor rendimiento
- Contenido del slide perfectamente centrado horizontal y verticalmente
- Transiciones automáticas cada 5 segundos

### 3. Formulario de Contacto (contact.html)
- Validación front-end completa con JavaScript
- Retroalimentación visual en tiempo real
- Mensajes de error personalizados
- Accesibilidad completa (ARIA labels, focus management)
- Estados visuales (invalido/valido) con clases CSS
- Validación con debounce para mejor UX

### 4. Formulario de Reservación (reservation.html)
- Formulario completo con validación
- Campos: nombre, email, teléfono, fecha, hora, número de personas
- Validación de formato de fecha y hora
- Comentarios adicionales opcionales

### 5. Páginas de Menú
- **menu.html** - Menú Style 1 con categorías organizadas
- **menu2.html** - Menú Style 2 con grid de cards
- Platos organizados por categorías (Entradas, Principales, Postres)
- Precios destacados con color de marca

### 6. Página About (about.html)
- Sección "Sobre Nosotros" con historia
- Misión y valores del restaurante
- Lista de valores con checkmarks visuales

### 7. Blog (blog.html)
- Grid de artículos del blog
- Cards con hover effects
- Enlaces a artículos individuales
- Meta información (fecha, autor)

### 8. Artículo Individual (single-post.html)
- Página de artículo completo
- Enlace de regreso al blog
- Header del post bien espaciado
- Contenido estructurado con títulos y párrafos
- Footer con botón de acción

### 9. Versiones Alternativas de Home
- **home2.html** - Versión alternativa con hero section
- **home3.html** - Tercera versión del home

### 10. Contacto Alternativo (contact2.html)
- Versión alternativa de contacto
- Información de contacto en cards
- Formulario con campo de asunto adicional

### 11. Botones
- Dos estilos: `button-one` (outline) y `button-two` (fondo sólido)
- Transiciones suaves en hover
- Efectos de elevación al interactuar
- Estados active para feedback táctil

---

## ✅ Validaciones Aplicadas

### Formularios (Guía 4)

#### Validación HTML5
- Atributos `required` para campos obligatorios
- `minlength` y `maxlength` para límites de caracteres
- `type="email"` para validación de correo
- `type="date"` y `type="time"` para fechas y horas
- `type="number"` con `min` y `max` para números
- `pattern` para formato de teléfono
- `novalidate` en el form para control manual con JS

#### Validación JavaScript
- **Nombre:** Mínimo 3 caracteres, máximo 50, solo letras y espacios
- **Email:** Formato de correo válido con regex
- **Teléfono:** Opcional, formato numérico con caracteres especiales permitidos
- **Mensaje:** Mínimo 10 caracteres, máximo 500
- **Fecha:** Validación de formato de fecha
- **Hora:** Validación de formato de hora
- **Personas:** Número entre 1 y 20

#### Retroalimentación Visual
- Clases `.invalido` y `.valido` para estados visuales
- Mensajes de error en tiempo real con `aria-live="polite"`
- Estados de foco mejorados con `outline` visible
- Bordes de color rojo para inválidos y verde para válidos
- Backgrounds de color para mejor feedback visual

### Accesibilidad (WCAG 2.1)

#### Implementado:
- ✅ Etiquetas `aria-label` y `aria-describedby` en todos los elementos interactivos
- ✅ Atributos `aria-required` y `role="alert"` en formularios
- ✅ `aria-live="polite"` para mensajes dinámicos
- ✅ `aria-expanded` para menús desplegables
- ✅ `aria-hidden="true"` para iconos decorativos
- ✅ Foco visible con `:focus-visible` y outline personalizado
- ✅ Navegación por teclado completa (Tab, Enter, Space, Escape)
- ✅ Textos alternativos descriptivos en todas las imágenes
- ✅ Respeto a `prefers-reduced-motion` para animaciones
- ✅ Estructura semántica HTML5 (header, nav, main, article, section)

---

## 💻 Interactividad con JavaScript

### 1. Slider (slider.js)
- Implementado con jQuery 3.7.1
- Transiciones automáticas cada 5 segundos
- Animaciones suaves con jQuery Easing
- Sistema de background-image para mejor rendimiento
- Manejo de unidades vh y px
- Validación de jQuery antes de inicialización
- Optimizado para carga diferida con `defer`

### 2. Validación de Formulario (form-validation.js)
- Validación en tiempo real (blur y input con debounce de 300ms)
- Validación completa al envío
- Limpieza y reset de formulario después del envío
- Manejo de estados y mensajes con feedback visual
- Soporte para múltiples formularios (contacto y reservación)
- Mensajes personalizados por tipo de error
- Navegación automática al primer campo con error

### 3. Menú Interactivo (menu-interactive.js)
- Toggle del menú móvil con gestión de `aria-expanded`
- Cierre automático al hacer clic fuera del menú
- Soporte de teclado completo (Enter, Space, Escape)
- Cierre del menú al hacer clic en enlaces
- Gestión de dropdowns con teclado
- Compatible con navegación por teclado

### 4. Eventos DOM
- Uso de `addEventListener` para separar lógica del HTML
- Delegación de eventos donde corresponde
- Prevención de comportamientos por defecto cuando es necesario
- Compatible con navegadores modernos

---

## 🎬 Animaciones y Transiciones

### Transiciones (Guía 5)
- **Botones:** Cambio de color y elevación en hover (`0.3s ease-in-out`)
- **Enlaces:** Cambio de color suave (`0.3s ease-in-out`)
- **Dropdowns:** Aparición con `transform` y `opacity` (`0.15s ease-in-out`)
- **Formulario:** Cambio de borde al enfocar (`0.3s ease-in-out`)
- **Cards:** Elevación en hover con transform y box-shadow

### Animaciones con @keyframes
1. **fadeIn:** Aparición suave desde abajo
   ```css
   @keyframes fadeIn {
       from { opacity: 0; transform: translateY(20px); }
       to { opacity: 1; transform: translateY(0); }
   }
   ```

2. **slideIn:** Deslizamiento desde la derecha
   ```css
   @keyframes slideIn {
       from { opacity: 0; transform: translateX(100%); }
       to { opacity: 1; transform: translateX(0); }
   }
   ```

3. **flotar:** Movimiento vertical suave (preparado para elementos decorativos)
   ```css
   @keyframes flotar {
       0%, 100% { transform: translateY(0); }
       50% { transform: translateY(-20px); }
   }
   ```

### Aplicación
- Contenedor principal: `fadeIn` al cargar (0.5s)
- Contenido del slider: `fadeIn` y `slideIn` con delays escalonados (0.3s, 0.5s, 0.7s, 0.9s)
- Dropdowns: Transición de `transform` y `opacity`
- Cards de menú y blog: Elevación en hover

### Accesibilidad de Animaciones
Implementada media query `@media (prefers-reduced-motion: reduce)` para desactivar animaciones cuando el usuario lo prefiera, respetando las preferencias de accesibilidad.

---

## ⚡ Optimización y Rendimiento

### Optimización de Carga (Guía 6)

#### Scripts
- Atributo `defer` en todos los scripts para carga diferida
- Orden correcto: jQuery → jQuery Easing → Scripts propios
- Verificación de disponibilidad de jQuery antes de usar
- Scripts externos con `integrity` para seguridad

#### Imágenes
- `loading="eager"` para imágenes críticas (logo, primer slide)
- `loading="lazy"` para imágenes secundarias (segundo slide)
- Textos alternativos descriptivos en todas las imágenes
- Uso de background-image en slider para mejor rendimiento
- `object-fit: cover` para ajuste correcto de imágenes

#### CSS
- Variables CSS para reducir repetición y facilitar mantenimiento
- Uso de unidades relativas (rem) para escalabilidad
- Transiciones optimizadas con `transform` y `opacity` (GPU-accelerated)
- Media queries organizadas y eficientes
- Código CSS limpio y comentado

#### HTML
- Estructura semántica HTML5
- Meta tags optimizados (description, viewport)
- Idioma correcto (`lang="es"`)
- Atributos ARIA para accesibilidad

### Estructura de Archivos Completa
```
Clase 13/
├── css/
│   ├── fonts/
│   │   ├── fontawesome-webfont.woff2
│   │   └── revicons.woff
│   ├── koad-assets.css
│   ├── style.css (mejorado con variables, animaciones y responsive)
│   └── contact.css (estilos del formulario)
├── images/
│   ├── logo.png
│   ├── slide1.jpg
│   └── slide2.jpg
├── scripts/
│   ├── slider.js (slider principal con jQuery)
│   ├── form-validation.js (validación de formularios)
│   └── menu-interactive.js (interactividad del menú)
├── about.html
├── blog.html
├── contact.html
├── contact2.html
├── home2.html
├── home3.html
├── index.html
├── menu.html
├── menu2.html
├── reservation.html
├── single-post.html
└── README.md
```

---

## 🧪 Pruebas de Rendimiento Realizadas

### Herramientas Utilizadas
1. **Google Lighthouse** (Chrome DevTools)
   - Performance: [Pendiente de medición]
   - Accessibility: [Pendiente de medición]
   - Best Practices: [Pendiente de medición]
   - SEO: [Pendiente de medición]

2. **Validadores Web**
   - HTML: https://validator.w3.org/
   - CSS: https://jigsaw.w3.org/css-validator/
   - Contraste: https://webaim.org/resources/contrastchecker/

### Mejoras Implementadas
- ✅ Carga diferida de scripts (`defer`)
- ✅ Lazy loading de imágenes
- ✅ Variables CSS para reducir tamaño y mejorar mantenimiento
- ✅ Transiciones optimizadas (GPU-accelerated con transform y opacity)
- ✅ Código semántico y limpio
- ✅ Header fijo optimizado con z-index apropiado
- ✅ Sistema de grid y flexbox para layouts eficientes

---

## 📱 Responsive Design

### Enfoque Mobile-First (Guía 3)
- Breakpoints principales:
  - Móvil: `< 480px`
  - Tablet: `481px - 768px`
  - Desktop: `> 768px`
  - Large: `> 991px`

### Características Responsive
- Menú colapsable en móviles (toggle button)
- Dropdowns adaptados a móviles (posición relativa)
- Formulario adaptativo con padding responsive
- Imágenes responsivas con `object-fit: cover`
- Tipografía escalable con rem
- Grid responsive para menús y blog (1 columna en móvil)
- Slider con altura adaptativa (100vh en desktop, 70vh en móvil)
- Botón "Book a Table" oculto en móviles

### Media Queries Implementadas
- `@media (max-width: 991px)` - Para tablets y móviles
- `@media (max-width: 768px)` - Para móviles
- `@media (prefers-reduced-motion: reduce)` - Para accesibilidad

---

## 🌐 Páginas del Sitio

### Páginas Principales
1. **index.html** - Página principal con slider
2. **home2.html** - Versión alternativa del home
3. **home3.html** - Tercera versión del home

### Menú
4. **menu.html** - Menú Style 1 (categorías)
5. **menu2.html** - Menú Style 2 (grid de cards)

### Información
6. **about.html** - Sobre nosotros
7. **reservation.html** - Formulario de reservación

### Blog
8. **blog.html** - Listado de artículos
9. **single-post.html** - Artículo individual

### Contacto
10. **contact.html** - Formulario de contacto principal
11. **contact2.html** - Versión alternativa de contacto

---

## 🔍 Observaciones y Mejoras Futuras

### Pendientes
1. **Optimización de Imágenes**
   - Convertir imágenes a WebP o AVIF
   - Implementar srcset para diferentes resoluciones
   - Comprimir imágenes sin pérdida de calidad
   - Agregar imágenes de respaldo (fallback)

2. **Backend del Formulario**
   - Integrar con servidor para envío real
   - Implementar validación backend
   - Agregar protección CSRF
   - Envío por email automático

3. **SEO**
   - Agregar meta tags Open Graph
   - Implementar schema.org para negocio local
   - Sitemap.xml y robots.txt
   - Meta descriptions únicas por página
   - Canonical URLs

4. **Performance**
   - Minificar CSS y JS en producción
   - Implementar Service Workers para cache
   - Optimizar fuentes (font-display: swap)
   - Implementar lazy loading más agresivo
   - Code splitting para JavaScript

5. **Funcionalidades Adicionales**
   - Galería de imágenes con lightbox
   - Sistema de comentarios en blog
   - Búsqueda en el sitio
   - Integración con redes sociales
   - Sistema de reservas con calendario interactivo

6. **Accesibilidad Avanzada**
   - Modo de alto contraste
   - Soporte para lectores de pantalla mejorado
   - Skip links para navegación rápida
   - Indicadores de foco más visibles

7. **Testing**
   - Pruebas en diferentes navegadores
   - Pruebas de accesibilidad automatizadas
   - Pruebas de rendimiento regulares
   - Testing en dispositivos reales

---

## 📚 Referencias y Bibliografía

- **Gauchat, J.D.** (2017). *El gran libro de HTML5, CSS3 y JavaScript* (3ª Ed.). Capítulos 3-10.
- **MDN Web Docs:** https://developer.mozilla.org/es/docs/Web
- **Google Web.dev:** https://web.dev/performance/
- **W3C Accessibility Guidelines (WCAG 2.1):** https://www.w3.org/WAI/WCAG21/quickref/
- **W3C CSS Transitions:** https://www.w3.org/TR/css-transitions-1/
- **jQuery Documentation:** https://api.jquery.com/
- **Bootstrap Documentation:** https://getbootstrap.com/docs/ (para referencia de clases)

---

## ✅ Checklist de Evaluación Final

- ✅ Estructura HTML semántica y completa (11 páginas)
- ✅ Diseño responsive (mobile-first, Grid/Flex)
- ✅ Paleta y tipografía coherentes (variables CSS)
- ✅ Interactividad JS funcional (eventos, DOM, validaciones)
- ✅ Formulario con validaciones HTML5 + JS (2 formularios)
- ✅ Animaciones y transiciones accesibles
- ✅ Accesibilidad básica: foco visible, etiquetas, contraste
- ✅ Optimización de imágenes y recursos (lazy loading)
- ✅ Código limpio, ordenado y comentado
- ✅ Documentación final (README completo)
- ✅ Header fijo funcional y bien posicionado
- ✅ Slider centrado y funcional
- ✅ Navegación completa y accesible

---

## 🚀 Instrucciones de Uso

### Para Desarrolladores
1. Abrir el proyecto en un editor de código (VS Code recomendado)
2. Abrir `index.html` en un navegador moderno
3. Para desarrollo local, usar un servidor local (Live Server, Python SimpleHTTPServer, etc.)
4. Verificar que todos los scripts se carguen correctamente (consola del navegador)
5. Probar en diferentes tamaños de pantalla (DevTools responsive mode)
6. Validar accesibilidad con herramientas de desarrollo

### Para Usuarios Finales
1. Abrir `index.html` en un navegador moderno (Chrome, Firefox, Edge, Safari)
2. Navegar por las diferentes secciones usando el menú
3. Probar los formularios de contacto y reservación
4. Leer los artículos del blog
5. Explorar el menú del restaurante

### Requisitos
- Navegador moderno con soporte para ES6+
- Conexión a internet para cargar jQuery desde CDN
- JavaScript habilitado

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con variables, animaciones y responsive
- **JavaScript (ES6+)** - Interactividad y validaciones
- **jQuery 3.7.1** - Manipulación del DOM y animaciones
- **jQuery Easing 1.4.1** - Transiciones suaves
- **Font Awesome** - Iconos (incluido en koad-assets.css)
- **Google Fonts** - Lato y Zilla Slab

---

## 📝 Notas de Desarrollo

### Decisiones de Diseño
- Se eligió un diseño limpio y minimalista para destacar el contenido
- El color de marca (#ea462b) se usa estratégicamente para llamados a la acción
- El sistema tipográfico con rem asegura escalabilidad en todos los dispositivos
- Las animaciones son sutiles y no distractivas

---

**Proyecto desarrollado como TP Integrador para EDI Programación Web**

