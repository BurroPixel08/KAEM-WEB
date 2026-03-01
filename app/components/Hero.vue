<template>
    <section class="hero-container">
        <div class="text">
            <h1 class="logo">KAEM</h1>
            <p class="slogan">TU <span>VISIÓN</span>, TU <span>ESTILO</span></p>
            <div class="more-row"></div>
        </div>

        <div class="clothing-container">
            <ul class="clothings">
                <picture>
                    <img src="/franela.png" alt="franela">
                </picture>
                <picture>
                    <img src="/pullover.png" alt="franela">
                </picture>
                <picture>
                    <img src="/oversize.png" alt="franela">
                </picture>
                <picture>
                    <img src="/hoodie.png" alt="franela">
                </picture>
            </ul>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
/* Contenedor Principal */
.hero-container {
  height: 100vh; /* Ajusta según el alto de tu navbar */
  background-color: #e5e5e5; /* Color gris claro de fondo de la imagen */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  overflow: hidden; /* Para que las prendas no creen scroll horizontal */
}

/* Sección de Texto (Logo y Slogan) */
.text {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.logo {
  font-family: 'Cubao', sans-serif; /* Aplicamos tu fuente */
  font-size: clamp(6rem, 35vw, 18rem); /* Tamaño más agresivo */
  font-weight: normal;
  line-height: 0.6;   /* Crucial para el look de la imagen */
  letter-spacing: -0.02em; /* Junta un poco las letras */
  margin: 0;
  color: #000;
}

.slogan {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #000;
  text-transform: uppercase;
}

.slogan span {
  color: var(--enfasis-color); /* Aquí usamos tu #5416cf */
}

/* Icono de flecha (more-row) */
.more-row {
  margin: 2rem auto 0;
  width: 40px;
  height: 40px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Contenedor de Ropa */
.clothing-container {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Alinea las prendas al suelo */
}

.clothings {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  width: 100%;
  height: 100%;
  padding: 0 20px;
  /* Alinea los items del grid al inicio (top) */
  align-items: start; 
}

.clothings picture {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: -30%; 
  /* Eliminamos el top: 0px innecesario aquí */
}

.clothings img {
  width: 110%; 
  height: auto;
  position: relative; 
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
}

/* Responsivo */
@media (max-width: 768px) {
  .logo {
    font-size: 25vw;
  }
  
  .clothings {
    flex-wrap: wrap; /* En móvil se pueden acomodar en 2x2 o scroll */
  }
  
  .clothings picture {
    width: 100%;
  }
}
</style>