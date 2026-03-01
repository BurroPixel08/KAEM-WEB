<template>
  <section class="how-buy">
    <div class="container">
      <h2 class="section-title">¿CÓMO COMPRAR?</h2>
      
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-number">01</div>
          <div class="icon-box">
             <span class="icon">👕</span>
          </div>
          <h3 class="step-title">ELIGE TU PRENDA</h3>
          <p class="step-text">Explora nuestro catálogo y selecciona la prenda que quieres llevar al siguiente nivel.</p>
        </div>

        <div class="step-card">
          <div class="step-number">02</div>
          <div class="icon-box">
            <span class="icon">💬</span>
          </div>
          <h3 class="step-title">DALE A "Comprar"</h3>
          <p class="step-text">El botón te llevará directo a nuestro WhatsApp con el nombre del producto listo.</p>
        </div>

        <div class="step-card">
          <div class="step-number">03</div>
          <div class="icon-box">
            <span class="icon">📦</span>
          </div>
          <h3 class="step-title">CONCRETA Y RECIBE</h3>
          <p class="step-text">Acordamos el pago y el envío por el chat. ¡Así de fácil, sin registros complicados!</p>
        </div>
      </div>

      <div class="shipping-info">
        <p>🚀 Envíos a todo el país | 💳 Pagos vía pago móvil o Binance</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aquí no necesitamos lógica compleja, ya que la redirección 
// la manejan los botones de compra en los otros componentes.
</script>

<style scoped>
.how-buy {
  width: 100%;
  padding: 100px 20px;
  background-color: #e0e5ec; /* Color base neomórfico */
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-family: 'Cubao', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #1a1a1a;
  margin-bottom: 80px;
  letter-spacing: 2px;
  
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 50px;
}

.step-card {
  max-width: 400px;
  background-color: #e0e5ec;
  padding: 60px 30px 40px;
  border-radius: 40px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Neomorfismo Elevado */
  box-shadow: 12px 12px 24px #bebebe, 
              -12px -12px 24px #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow: 18px 18px 36px #b8b9be, 
              -18px -18px 36px #ffffff;
}

.step-number {
  position: absolute;
  top: -25px;
  right: 30px;
  font-size: 4.5rem;
  font-weight: 900;
  font-family: 'Cubao', sans-serif;
  /* Color morado de marca muy sutil */
  color: rgba(84, 22, 207, 0.07); 
  pointer-events: none;
}

.icon-box {
  width: 85px;
  height: 85px;
  margin: 0 auto 30px;
  background: #e0e5ec;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  
  /* Neomorfismo Hundido (Inset) */
  box-shadow: inset 6px 6px 12px #bebebe, 
              inset -6px -6px 12px #ffffff;
}

.step-card:hover .icon {
  transform: scale(1.1);
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 8px rgba(84, 22, 207, 0.2));
}

.step-title {
  font-family: 'Cubao', sans-serif;
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #1a1a1a;
  letter-spacing: 1px;
  font-weight: lighter;
}

.step-text {
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 500;
}

.shipping-info {
  margin-top: 80px;
  padding: 20px 40px;
  display: inline-block;
  /* Glassmorphism sutil morado */
  background: rgba(84, 22, 207, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(84, 22, 207, 0.1);
  font-weight: 700;
  color: #5416cf;
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
}

/* --- Ajustes para Móvil --- */
@media (max-width: 768px) {
  .section-title {
    margin-bottom: 60px;
  }
  
  .step-card {
    padding: 50px 25px 35px;
  }

  .step-number {
    font-size: 3.5rem;
    top: -20px;
    right: 20px;
  }
  
  .shipping-info {
    width: 100%;
    font-size: 14px;
    padding: 15px;
  }
}
</style>