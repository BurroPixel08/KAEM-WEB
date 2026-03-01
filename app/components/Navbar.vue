<template>
  <nav class="nav-container">
    <ul class="nav-menu">
      <li class="nav-item">
        <NuxtLink to="/" class="nav-link">HOME</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink to="/catalogo" class="nav-link">CATÁLOGO</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink to="/personalizar" class="nav-link">PERSONALIZAR</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink to="/nosotros" class="nav-link">NOSOTROS</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style scoped>
/* Contenedor Principal: Sticky + Cristal Empañado */
.nav-container {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.2rem 0;
  
  /* Efecto Glassmorphism */
  background: rgba(255, 255, 255, 0.3); /* Blanco muy transparente */
  backdrop-filter: blur(12px);          /* El "empañado" */
  -webkit-backdrop-filter: blur(12px);  /* Soporte para Safari */
  
  /* Borde sutil y sombra */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

/* Estructura de la lista */
.nav-menu {
  display: flex;
  gap: 3.5rem; /* Espaciado generoso para minimalismo */
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Estilo de los Enlaces */
.nav-link {
  text-decoration: none;
  color: #1a1a1a;
  font-size: 0.75rem;     /* Pequeño y elegante */
  font-weight: 600;
  letter-spacing: 0.2em;  /* Espaciado entre letras */
  text-transform: uppercase;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.4s ease;
  opacity: 0.8;
}

/* Línea animada inferior (Hover) */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--enfasis-color);
  transition: width 0.3s ease;
}

.nav-link:hover {
  opacity: 1;
  letter-spacing: 0.25em; /* Pequeño efecto de expansión */
}

.nav-link:hover::after {
  width: 100%;
}

/* Clase activa automática de Nuxt */
.router-link-active {
  opacity: 1;
  font-weight: 800;
}

.router-link-active::after {
  width: 100%;
}

/* Adaptación para pantallas pequeñas */
@media (max-width: 768px) {
  .nav-menu {
    gap: 1.5rem;
  }
  .nav-link {
    font-size: 0.65rem;
    letter-spacing: 0.1em;
  }
}
</style>