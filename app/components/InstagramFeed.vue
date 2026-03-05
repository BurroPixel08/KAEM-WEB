<template>
  <section class="instagram-section">
    <div class="container">
      <h2 class="section-title">NUESTRO ESTILO EN INSTAGRAM</h2>
      
      <div class="insta-grid">
        <div v-for="(post, index) in instagramPosts" :key="index" class="insta-item">
          <a :href="post.link" target="_blank" rel="noopener noreferrer">
            <NuxtImg 
              :src="post.image" 
              :alt="'Instagram post ' + index"
              quality="80"
              width="400"
              height="400"
              format="webp"
              loading="lazy"
            />
            
            <div class="overlay">
              <div class="glass-icon">
                <Icon name="ri:instagram-fill" size="24" class="insta-icon" />
              </div>
              <p class="view-text">VER EN IG</p>
            </div>
          </a>
        </div>
      </div>

      <div class="follow-cta">
        <a href="https://www.instagram.com/kaem_ve/" target="_blank" class="btn-follow">
          SÍGUENOS @KAEM_VE
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aquí solo cambias las fotos y los links de los últimos posts (Sigue igual)
const instagramPosts = [
  { 
    image: '/posts/post1.webp', // Sube tus fotos 4:5 a la carpeta public
    link: 'https://www.instagram.com/p/DVMt2FGEb6F/?img_index=1' 
  },
  { 
    image: '/posts/post2.webp', 
    link: 'https://www.instagram.com/p/DVHknAsEWUw/?img_index=1' 
  },
  { 
    image: '/posts/post3.webp', 
    link: 'https://www.instagram.com/p/DU_0N-oEcjA/?img_index=1' 
  },
  { 
    image: '/posts/post4.webp', 
    link: 'https://www.instagram.com/p/DU9PqLekftI/?img_index=1' 
  }
]
</script>

<style scoped>
.instagram-section {
  padding: 80px 20px;
  background-color: #e0e5ec; /* Fondo neomórfico base */
  text-align: center;
}

.container {
  max-width: 1200px; /* Un poco más ancho para dar aire a los retratos */
  margin: 0 auto;
}

.section-title {
  font-family: 'Cubao', sans-serif;
  font-size: clamp(1.8rem, 5vw, 3rem);
  color: #1a1a1a;
  margin-bottom: 60px;
  letter-spacing: 2px;
}

/* Grilla de Instagram */
.insta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsivo automático */
  gap: 30px; /* Más espacio entre fotos */
  margin-bottom: 60px;
}

.insta-item {
  position: relative;
  border-radius: 35px;
  overflow: hidden;
  
  /* --- CAMBIO CLAVE AQUÍ: Formato 4:5 (Vertical) --- */
  aspect-ratio: 4 / 5; 
  
  /* Neomorfismo Elevado */
  box-shadow: 10px 10px 20px #bebebe, 
              -10px -10px 20px #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #e0e5ec;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.insta-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que la imagen cubra todo el espacio vertical */
  transition: transform 0.5s ease;
}

/* Overlay Glassmorphism Morado (Sigue igual) */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(84, 22, 207, 0.35); /* Tu morado de marca */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.4s ease;
  color: white;
  font-weight: 800;
}

.insta-item:hover .overlay {
  opacity: 1;
}

.insta-item:hover img {
  transform: scale(1.08); /* Efecto de zoom suave */
}

.glass-icon {
  background: rgba(255, 255, 255, 0.2);
  width: 60px;
  height: 60px;
  padding: 18px;
  border-radius: 50%;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.insta-logo {
  font-size: 24px;
}

.view-text {
  font-size: 13px;
  letter-spacing: 1px;
}

/* Botón Follow (Sigue igual) */
.follow-cta {
  margin-top: 50px;
}

.btn-follow {
  display: inline-block;
  padding: 15px 40px;
  background: #5416cf;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-family: 'Cubao', sans-serif;
  font-weight: lighter;
  letter-spacing: 1px;
  box-shadow: 0 10px 20px rgba(84, 22, 207, 0.3);
  transition: all 0.3s ease;
}

.btn-follow:hover {
  background: #000;
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* --- Ajustes para Móvil --- */
@media (max-width: 600px) {
  .insta-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en celular */
    gap: 15px; /* Menos espacio entre fotos */
  }
  
  .insta-item {
    border-radius: 20px;
  }
}
</style>