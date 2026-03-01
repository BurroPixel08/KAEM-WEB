<template>
  <section class="best-selling">
    <h2 class="title">Lo más vendido</h2>
    <div class="cards-container">
      <div class="card">
        <picture class="img-container">
          <img src="/oversize.png" alt="Oversize Tee">
        </picture>
        <div class="glass-textBox">
          <p class="text head">Oversize Tee</p>
          <span>Urban Collection</span>
          <p class="text price">30.00$</p>
        </div>
      </div>

      <div class="card">
        <picture class="img-container">
          <img src="/pullover.png" alt="Premium Pullover">
        </picture>
        <div class="glass-textBox">
          <p class="text head">Premium Pullover</p>
          <span>Essentials</span>
          <p class="text price">38.00$</p>
        </div>
      </div>

      <div class="card">
        <picture class="img-container">
          <img src="/hoodie.png" alt="Classic Hoodie">
        </picture>
        <div class="glass-textBox">
          <p class="text head">Classic Hoodie</p>
          <span>Streetwear</span>
          <p class="text price">40.00$</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.best-selling {
  width: 100%;
  height: auto;
  background-color: #e0e5ec;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 90px 20px;
}

.best-selling .title{
  font-size: 3rem;
  font-family: "Cubao";
  font-weight: lighter;
  margin-bottom: 35px;
  color: #222222;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  justify-items: center;
}

/* Estructura Neomórfica de la Tarjeta */
.card {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 420px;
  background-color: #e0e5ec;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-out;
  overflow: hidden; /* Importante para que el cristal no se salga de las esquinas redondeadas */
  cursor: pointer;
  
  /* Sombra Neomórfica */
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), 
              -9px -9px 16px rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.img-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.img-container img {
  max-width: 85%;
  height: auto;
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
}

/* Capa de Texto con Glassmorphism (Corregida para el efecto de aparición) */
.glass-textBox {
  position: absolute;
  /* En lugar de inset: 0, lo centramos y le damos un tamaño inicial nulo o pequeño */
  top: 50%;
  left: 50%;
  width: 0%;
  height: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  padding: 0px;
  border-radius: 30px; /* Mismo radio que la tarjeta */
  
  /* Efecto Cristal (inicialmente sin desenfoque y transparente para que no se note) */
  background: rgba(255, 255, 255, 0.0); 
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  
  /* Estado inicial oculto */
  opacity: 0;
  transition: all 0.5s ease-in-out;
  z-index: 5;
  transform: translate(-50%, -50%); /* Lo mantiene centrado */
}

/* Ocultar el texto inicialmente para que no se vea el desborde al crecer */
.glass-textBox * {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.glass-textBox .text {
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
}

.glass-textBox .head {
  font-family: 'Cubao', sans-serif;
  font-weight: lighter;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 1px;
}

.glass-textBox .price {
  font-size: 26px;
  font-weight: 900;
  color: #ffffff; /* Blanco puro para que no se pierda */
  background: rgba(255, 255, 255, 0.15); /* Fondo sutil para el precio */
  padding: 5px 15px;
  border-radius: 10px;
  margin-top: 5px;
}

.glass-textBox span {
  font-size: 12px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

/* HOVER EFFECTS */

/* La tarjeta se presiona ligeramente */
.card:hover {
  transform: scale(0.98);
  box-shadow: inset 4px 4px 8px rgba(163, 177, 198, 0.5), 
              inset -4px -4px 8px rgba(255, 255, 255, 0.7);
}

/* La imagen hace un pequeño zoom */
.card:hover .img-container {
  transform: scale(1.1);
}

/* El cristal se expande, se teñe de morado y se empaña, y el texto aparece */
.card:hover .glass-textBox {
  opacity: 1;
  width: 100%;
  height: 100%;
  padding: 20px;
  /* CAMBIO CLAVE: Un fondo morado translúcido (#5416cf) */
  background: rgba(84, 22, 207, 0.2); 
  backdrop-filter: blur(12px); /* Aquí se aplica el empañado */
  -webkit-backdrop-filter: blur(12px);
}

/* Mostrar el texto al hacer hover */
.card:hover .glass-textBox * {
  opacity: 1;
}

@media (max-width: 768px) {
  .card {
    max-width: 290px;
    height: 380px;
  }
}
</style>