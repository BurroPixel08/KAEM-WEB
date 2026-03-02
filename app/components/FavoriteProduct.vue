<template>
  <section class="favorite-section">
    <div class="favorite-card">
      
      <div class="parallax-bg"></div>

      <div class="card-content">
        <div class="image-area">
          <div class="badge">FAVORITO DE LA SEMANA</div>
          <picture class="product-img">
            <img src="/favorite.png" alt="Sudadera Destacada">
          </picture>
        </div>

        <div class="info-area">
          <div class="glass-content">
            <span class="category">JUJUTSU COLLECTION</span>
            <h2 class="title">the strongest</h2>
            <p class="description">
              Inspirada en la estética del Jujutsu High, esta prenda combina la fuerza del manga con el corte oversize perfecto
            </p>
            <div class="price-row">
              <span class="price">30.00$</span>
              <button class="buy-now" @click="buyProduct('Franela Anime 01')">¡PIDELA YA!</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
    const { buyProduct } = useCart();

    const ctx = gsap.context(() => {
      
      // 1. Animación de entrada (Aparece al bajar)
      gsap.from(".favorite-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".favorite-section",
          start: "top 50%", // Se activa un poco antes
          toggleActions: "play reverse play reverse",
        }
      });

      // 2. Solo para MÓVILES: Auto-activación del "Hover"
      ScrollTrigger.matchMedia({
        "(max-width: 850px)": function() {
          // CORREGIDO: ".favorite-card" (estaba mal escrito como favotite)
          const favCard = document.querySelector(".favorite-card");
          
          if (favCard) {
            ScrollTrigger.create({
              trigger: favCard,
              // Se activa cuando el centro de la tarjeta toca el centro de la pantalla
              start: "bottom bottom",
              toggleClass: "is-active",
              // markers: true, // Descomenta esta línea para ver las guías y ajustar
            });
          }
        }
      });

    });
  }
})
</script>

<style scoped>
.favorite-section {
  width: 100%;
  padding: 120px 20px;
  /* Fondo lavanda muy claro, para que el degradado morado de la card resalte */
  background-color: #f3effb; 
  display: flex;
  justify-content: center;
}

.favorite-card {
  width: 100%;
  max-width: 1100px;
  min-height: 520px;
  /* Color de fondo base, igual al de la sección */
  background-color: #f3effb;
  border-radius: 40px;
  position: relative; /* Clave para las capas parallax */
  overflow: hidden; /* Evita que el fondo sobresalga */
  display: flex;
  
  /* NEOMORFISMO CON TINTE MORADO */
  /* Sombra oscura lavanda + Sombra blanca limpia */
  box-shadow: 20px 20px 40px #dcd6eb, 
              -20px -20px 40px #ffffff;
              
  border: 1px solid rgba(255, 255, 255, 0.5);
}

/* --- CAPA PARALLAX --- */
.parallax-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%; /* Más alta para tener margen de movimiento */
  /* Imagen abstracta de Unsplash */
  background-image: linear-gradient(rgba(84, 22, 207, 0.4), rgba(84, 22, 207, 0.4)), /* Capa morada */
    url("/bg1.jpg"); /* Tu imagen de fondo */;
  background-attachment: fixed; /* ESTO crea el efecto parallax básico */
  background-size: cover;
  background-position: center;
  /* Sutil pero visible, para no ensuciar el diseño limpio */
  opacity: 0.7; 
  z-index: 1; /* Fondo de la card */
  pointer-events: none; /* No interfiere con clics */
}

.card-content {
  position: relative;
  z-index: 2; /* Por encima del fondo parallax */
  display: flex;
  width: 100%;
}

.image-area {
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  position: relative;
}

.badge {
  position: absolute;
  top: 35px;
  left: 35px;
  background: #5416cf;
  color: white;
  padding: 9px 18px;
  border-radius: 12px;
  font-weight: 900;
  font-size: 10px;
  letter-spacing: 1.5px;
}

.product-img img {
  width: 100%;
  max-width: 420px;
  /* Resplandor morado suave detrás de la prenda */
  filter: drop-shadow(0 25px 40px rgba(84, 22, 207, 0.25));
  transition: transform 0.6s ease;
}

.favorite-card:hover .product-img img,
.favorite-card.is-active .product-img img{
  transform: scale(1.05) rotate(-2deg);
}

/* Área de Información con Glassmorphism */
.info-area {
  flex: 1;
  padding: 40px;
  display: flex;
  align-items: center;
}

.glass-content {
  width: 100%;
  padding: 40px;
  /* Cristal morado sutil para resaltar sobre la textura */
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 15px 35px rgba(84, 22, 207, 0.1);
}

.category {
  color: #5416cf;
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 2px;
}

.title {
  font-family: 'Cubao', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin: 10px 0;
  color: #1a1a1a;
  line-height: 0.9;
}

.description {
  color: #333;
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 35px;
}

.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.price {
  font-size: 34px;
  font-weight: 900;
  color: #1a1a1a;
}

.buy-now {
  flex-grow: 1;
  padding: 16px;
  background: #5416cf;
  color: white;
  border: none;
  border-radius: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
}

.buy-now:hover {
  background: #000;
  transform: scale(1.05);
}

/* Responsivo */
/* ... Tus estilos de escritorio se mantienen intactos ... */

@media (max-width: 850px) {
  .favorite-card {
    flex-direction: column;
    height: 600px; /* Altura fija para que la imagen tenga espacio */
    position: relative;
  }

  .parallax-bg {
    background-attachment: fixed; /* Evita tirones en el scroll del móvil */
    height: 100%;
  }

  .card-content {
    flex-direction: column;
    height: 100%;
    position: relative;
  }

  /* La imagen ocupa todo el contenedor de fondo */
  .image-area {
    width: 100%;
    height: 100%;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .product-img img {
    width: 100%;
    max-width: 80vw;
    transition: transform 0.5s ease, filter 0.5s ease-out;
  }

  /* TRANSFORMAMOS EL INFO-AREA EN UNA CAPA SUPERPUESTA */
  .info-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    
    /* Estado oculto inicial */
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* El cristal morado que aparece */
  .glass-content {
    width: 90%;
    padding: 30px;
    background: rgba(84, 22, 207, 0.6); /* Morado con más opacidad para lectura */
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 35px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    /* Efecto de subida */
    transform: translateY(30px);
    transition: transform 0.4s ease;
  }

  /* EFECTO HOVER / TAP (En móvil se activa al tocar) */
  .favorite-card:hover .info-area,
  .favorite-card.is-active .info-area{
    opacity: 1;
    visibility: visible;
  }

  .favorite-card:hover .glass-content,
  .favorite-card.is-active .glass-content{
    transform: translateY(0);
  }

  .favorite-card:hover .product-img img,
  .glass-content.is-active .product-img img{
    transform: scale(0.9) rotate(-2deg);
    filter: blur(4px);
  }

  /* Ajustes de colores para legibilidad sobre el morado */
  .title {
    font-size: 2.2rem;
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    font-weight: lighter;
  }
  .info-area span{
    color: #ffffff;
  }

  .description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
  }

  .price {
    color: #ffffff;
  }

  .buy-now {
    background: #ffffff;
    color: #5416cf;
    font-weight: 900;
  }

  .badge {
    z-index: 5; /* Que quede por debajo del cristal al hacer hover */
  }
}

@media (max-width: 410px){
  .favorite-section {
    padding: 120px 10px;
  }

  .favorite-card {
    flex-direction: column;
    height: 550px; /* Altura fija para que la imagen tenga espacio */
    position: relative;
  }
    .image-area{
      width: 100%;
      height: 100%;
      padding: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
  }
    .description{
      margin-bottom: 10px;
  }

  .price-row{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-direction: column;
  }

}
</style>