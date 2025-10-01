# 🍕 Pizzería Mamma Mia — Hito 5 (React Router I)
<img width="912" height="582" alt="image" src="https://github.com/user-attachments/assets/ab28a661-0255-4b64-a67d-5d64c755f45d" />

## 📌 Descripción

En este hito implementamos **enrutamiento con React Router** para nuestra aplicación de Pizzería Mamma Mia, trasladando vistas a `pages/`, creando rutas protegidas y agregando lógica de autenticación y carrito persistente.

---

## 🚀 Tecnologías utilizadas

* **Vite + React**
* **React Router v6**
* **React-Bootstrap + Bootstrap 5**
* **Context API** (Auth + Cart)
* **LocalStorage** para persistencia de sesión y carrito
* **GitHub Actions** + **GitHub Pages** para despliegue continuo

---

## 📂 Estructura de carpetas relevante

```
src/
 ├── components/         # Componentes reutilizables (Navbar, Footer, etc.)
 ├── context/            # Contextos globales (AuthContext, CartContext)
 ├── data/               # Datos estáticos (pizzas.js)
 ├── pages/              # Páginas (Home, Cart, LoginPage, RegisterPage, Profile, Pizza, NotFound)
 ├── routes/             # ProtectedRoute
 ├── App.jsx             # Definición de rutas
 └── main.jsx            # Punto de entrada con BrowserRouter
```

---

## 📌 Requerimientos del hito y su cumplimiento

1. **Instalación y configuración de React Router** ✔️

   * `BrowserRouter` configurado en `main.jsx` con `basename` para GitHub Pages.

2. **Traslado de vistas a `pages/`** ✔️

   * `Home`, `RegisterPage`, `LoginPage`, `Cart`, `Pizza`, `Profile`, `NotFound`.

3. **Definición de rutas en `App.jsx`** ✔️

   * `/` → `Home`
   * `/register` → `RegisterPage`
   * `/login` → `LoginPage`
   * `/cart` → `Cart`
   * `/pizza/p001` → `Pizza`
   * `/profile` → `Profile`
   * `/404` → `NotFound`
   * `*` → `NotFound`

4. **Página NotFound** ✔️

   * Implementada con mensaje y botón para volver a `/`.

5. **Página Profile** ✔️

   * Muestra email del usuario logeado.
   * Incluye botón de **Cerrar sesión** que redirige al Home.
   * Protección extra: si no hay sesión activa y se intenta acceder a `/profile`, redirige al Home automáticamente.

6. **Navbar** ✔️

   * Enlaces de navegación (`Home`, `Login`, `Register`, `Profile`, `Cart`).
   * Botón `🛒 Total: $xxx` con acceso directo al carrito.
   * Lógica para ocultar `Logout` en la vista de `Profile` y dejar solo el botón dentro del body.

---

## 🔑 Contextos implementados

### `AuthContext`

* Maneja autenticación simulada.
* Persiste en `localStorage`.
* Métodos: `login`, `logout`.

### `CartContext`

* Maneja estado global del carrito.
* Persiste en `localStorage`.
* Funciones: `add`, `inc`, `dec`, `remove`.
* Calcula total automáticamente.

---

## 🌐 Despliegue

* Flujo de **GitHub Actions** configurado en `.github/workflows/deploy.yml`.
* Incluye fallback SPA (`404.html`) para rutas internas.
* Deploy automático a **GitHub Pages** al pushear a `main`.

---

## ✅ Estado del hito

  * Redirección automática al Home al cerrar sesión.
  * Protección de la ruta `/profile` cuando no hay sesión.
  * Navbar dinámico que oculta botón `Logout` en la vista Profile.


---

## 📸 Live Preview


