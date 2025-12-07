Aquí tienes el archivo `README.md` completo y profesional, actualizado con todas las mejoras de arquitectura, responsividad y conexión a la nube. Está listo para copiar y pegar directamente en tu repositorio de GitHub.

````markdown
# 🍳 Recetario Atomic

> Una aplicación moderna de gestión de recetas culinarias desarrollada con **Angular 19+**, **Signals** y arquitectura **Atomic Design**, conectada a la nube mediante **MockAPI**.

Este proyecto implementa una solución completa y escalable para la asignatura de Desarrollo de Interfaces, destacando por su diseño responsivo "Gourmet", gestión de estado reactiva y persistencia de datos real.

---

## 🚀 Tecnologías y Herramientas

* **Framework:** Angular 19+ (Standalone Components).
* **Gestión de Estado:** Angular Signals (`signal`, `computed`, `effect`) para un flujo de datos reactivo y eficiente.
* **Estilos:** Bootstrap 5 + SCSS personalizado (Diseño Gourmet, Glassmorphism, animaciones).
* **Arquitectura:** Atomic Design (Átomos, Moléculas, Organismos, Páginas).
* **Backend:** MockAPI (API RESTful en la nube).
* **Formularios:** Reactive Forms con `FormArray` para gestión dinámica de ingredientes.
* **Control de Flujo:** Nueva sintaxis de Angular (`@if`, `@for`).

---

## ✨ Funcionalidades Clave

### 1. Conexión Cloud-First (MockAPI)
La aplicación opera contra un backend real, garantizando la persistencia de datos entre sesiones y dispositivos.
* **CRUD Completo:** Crear, Leer, Actualizar y Borrar recetas directamente en la nube.
* **Optimización:** Uso de `HttpClient` para operaciones asíncronas eficientes.

### 2. Gestión Avanzada de Recetas
* **Creación Dinámica:** Formulario reactivo que permite añadir y eliminar ingredientes dinámicamente (`FormArray`).
* **Validación Visual:** Feedback inmediato al usuario sobre el estado de los campos (título, calorías, URL de imagen, etc.).
* **Detalle Rico:** Visualización inmersiva con lista de ingredientes, calorías y metadatos.

### 3. Sistema Social de Votación
* **Valoración Interactiva:** Modal dedicado con animaciones para puntuar recetas.
* **Cálculo en Tiempo Real:** Algoritmo de media ponderada que actualiza el rating y el conteo de votos instantáneamente en la interfaz.

### 4. Búsqueda y Filtrado Inteligente
* **Reactive Filtering:** Uso de `computed signals` para filtrar la lista de recetas por texto y puntuación mínima simultáneamente, sin mutar los datos originales.

### 5. Diseño UI/UX Responsivo
* **Adaptabilidad:** Grid system ajustado para móviles, tablets y escritorio.
* **Micro-interacciones:** Efectos `hover-lift`, transiciones suaves y sombras para una experiencia de usuario "premium".

---

## 🏗️ Arquitectura de la Solución

El proyecto sigue estrictamente los principios de **Atomic Design** y la separación de responsabilidades:

### 📂 Estructura de Directorios

```text
src/app/atomic-design/
├── atoms/          # Componentes indivisibles (RatingStars, Button)
├── molecules/      # Agrupaciones simples (RecipeCard)
├── organisms/      # Bloques funcionales complejos (RecipeList, RecipeFilter, VotingModal, RecipeForm)
├── pages/          # Vistas completas (HomePage, RecipeDetail, RecipeAdd)
└── services/       # Lógica de negocio y comunicación HTTP
````

### 🧠 Patrón Smart vs. Dumb Components

  * **Smart Components (Páginas):**
      * **`HomePage`**: Actúa como orquestador. Inyecta el `RecipeService`, gestiona los Signals de estado global y local, y coordina la comunicación entre los organismos.
  * **Dumb Components (Organismos/Moléculas):**
      * **`RecipeList`, `RecipeFilter`, `RecipeCard`**: Son componentes puros de presentación. No tienen dependencias de servicios; reciben datos exclusivamente vía `input()` y comunican acciones al padre mediante eventos `output()`.

-----

## ⚙️ Configuración del Backend (MockAPI)

Para el correcto funcionamiento, el proyecto se conecta a un endpoint en **MockAPI.io** configurado con el siguiente esquema en el recurso `recipes`:

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | string | Identificador único (autogenerado) |
| `titulo` | string | Nombre del plato |
| `descripcion` | string | Historia o pasos de preparación |
| `imagen` | string | URL de la fotografía |
| `calorias` | number | Valor energético por ración |
| `rating` | number | Puntuación media (0-5) |
| `votos` | number | Cantidad total de valoraciones |
| `ingredientes` | object | Array de strings (almacenado como objeto JSON) |

> **Nota:** La URL del API se encuentra configurada en `src/app/atomic-design/services/recipe.service.ts`.

-----

## 🛠️ Instalación y Ejecución

Sigue estos pasos para desplegar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone <url-del-repositorio>
    cd RecetarioAtomic
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    ng serve
    ```

4.  **Acceder a la aplicación:**
    Abre tu navegador y navega a `http://localhost:4200/`.

-----

## 🧪 Comandos Útiles

| Comando | Descripción |
| :--- | :--- |
| `ng serve` | Levanta el servidor de desarrollo local |
| `ng build` | Compila el proyecto para producción (carpeta `dist/`) |
| `ng test` | Ejecuta las pruebas unitarias con Karma/Jasmine |
| `ng generate component` | Crea un nuevo componente (Angular CLI) |


```
```
