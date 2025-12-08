# Recetario Atomic

> Una aplicación de gestión de recetas "Cloud-First" desarrollada con **Angular 19+**, **Signals** y arquitectura **Atomic Design**.

Este proyecto representa una solución completa para la asignatura de Desarrollo de Interfaces, combinando una estética moderna "Gourmet" con una arquitectura de software robusta y escalable.

---

## Tecnologías y Herramientas

* **Framework:** Angular 19+ (Standalone Components).
* **Gestión de Estado:** Angular Signals (`writable`, `computed`) para reactividad granular.
* **Estilos:** Bootstrap 5 + SCSS (Diseño personalizado, Glassmorphism, Responsive Grid).
* **Arquitectura:** Atomic Design + Patrón Smart/Dumb Components.
* **Backend:** MockAPI (Persistencia real en la nube).
* **Formularios:** Reactive Forms avanzados con `FormArray` para ingredientes dinámicos.

---

## Arquitectura de la Solución: Atomic Design

El proyecto no está organizado por "tipo de archivo", sino por **complejidad de componente**, siguiendo la metodología Atomic Design. Esto garantiza la reutilización y el mantenimiento escalable.

La estructura se encuentra bajo `src/app/atomic-design/`:

### 1. Átomos (`/atoms`)
Los bloques de construcción indivisibles. Poseen estilos y lógica de presentación pura, pero no lógica de negocio.
* **`RatingStarsComponent`**: Recibe un número (`@Input rating`) y renderiza visualmente las estrellas (llenas/vacías). No sabe de dónde viene el dato.
* **`AdButtonComponent`**: Un botón reutilizable con variantes de estilo (`primary`, `outline-danger`) que encapsula las clases de Bootstrap.

### 2. Moléculas (`/molecules`)
Agrupaciones de átomos que forman una unidad funcional simple.
* **`RecipeCardComponent`**: Combina una imagen HTML, textos y los átomos `RatingStars` y `AdButton`.
    * *Responsabilidad:* Mostrar el resumen de **una única receta**.
    * *Comunicación:* Es un componente "tonto" (Dumb). Al hacer click en "Votar" o "Borrar", no ejecuta la acción, sino que emite un evento (`voteRequest`, `deleteRequest`) hacia arriba.

### 3. Organismos (`/organisms`)
Secciones complejas de la interfaz que forman partes distintivas de la aplicación.
* **`RecipeListComponent`**: Gestiona la rejilla (Grid) responsiva de múltiples `RecipeCard`. Controla el layout y los estados vacíos (empty states).
* **`RecipeFilterComponent`**: Una barra de herramientas completa con buscador de texto y selector de puntuación.
* **`RecipeFormComponent`**: Un formulario complejo que gestiona validaciones visuales y la lógica dinámica de añadir/quitar ingredientes mediante `FormArray`.
* **`VotingModalComponent`**: Un ecosistema autocontenido para la interacción de votación, con animaciones y gestión de estado visual (hover).

### 4. Páginas (`/pages`) - "Smart Components"
El nivel más alto. Aquí es donde se inyectan los servicios y se gestiona el estado.
* **`HomePageComponent`**: El "Director de Orquesta".
    1.  Inyecta `RecipeService`.
    2.  Lee los **Signals** del servicio.
    3.  Calcula datos derivados (filtro de recetas) usando `computed()`.
    4.  Escucha los eventos de los organismos (ej: `deleteRequest` de la lista) y llama al servicio.
* **`RecipeDetailComponent`**: Gestiona la vista detallada, recuperando datos por ID desde la URL.

---

## Flujo de Datos y Signals

La aplicación utiliza un flujo de datos unidireccional y reactivo:

1.  **Servicio (`RecipeService`):** Mantiene el "Single Source of Truth" en un `signal` privado. Se conecta a MockAPI mediante `HttpClient`.
2.  **Lectura:** Los componentes leen una señal de solo lectura (`asReadonly()`).
3.  **Filtrado:** La `HomePage` utiliza `computed()` para filtrar la lista en tiempo real (por texto y estrellas) sin mutar el array original.
4.  **Escritura:** Las acciones (crear, borrar, votar) llaman a métodos del servicio que actualizan el backend y, tras la respuesta exitosa, regeneran la señal local.

---

## Funcionalidades Destacadas

### Conexión Backend Real (MockAPI)
Operaciones CRUD completas contra la nube. Los datos persisten entre recargas y dispositivos.
* **Schema:** `id`, `titulo`, `descripcion`, `imagen`, `calorias` (Number), `rating` (Number), `votos` (Number), `ingredientes` (Array).

### Sistema de Votación Ponderada
Implementación de lógica de negocio real:
> `Nueva Media = ((Media Actual * Votos Actuales) + Nuevo Voto) / (Votos Actuales + 1)`

### UX/UI Gourmet
* Diseño **totalmente responsivo** (adaptado a Móvil, Tablet y Desktop).
* Feedback visual en formularios (mensajes de error en tiempo real).
* Efectos de micro-interacción (`hover-lift`, transiciones de escala).

---

## Instalación y Despliegue

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-repo>
    cd RecetarioAtomic
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar:**
    ```bash
    ng serve
    ```
    Navegar a `http://localhost:4200`.

---
