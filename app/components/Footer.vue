<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h2 class="logo-text">KAEM</h2>
        <p class="brand-quote">Tu visión, Tu estilo.</p>
        <div class="social-links">
          <a href="https://instagram.com/kaem_ve" target="_blank" rel="noopener" class="social-icon ig">
            <Icon name="ri:instagram-fill" size="24" />
          </a>
          <a href="https://tiktok.com/@kaem_ve" target="_blank" rel="noopener" class="social-icon ttk">
            <Icon name="ri:tiktok-fill" size="22" />
          </a>
          <a href="https://wa.me/584120000000" target="_blank" rel="noopener" class="social-icon ws">
            <Icon name="ic:baseline-whatsapp" size="24" />
          </a>
        </div>
      </div>

      <div class="footer-nav">
        <h4>EXPLORA</h4>
        <ul>
          <li><NuxtLink to="/">Inicio</NuxtLink></li>
          <li><NuxtLink to="/catalogo">Catálogo</NuxtLink></li>
          <li><NuxtLink to="/personalizar">Personalizar</NuxtLink></li>
          <li><NuxtLink to="/nosotros">Nosotros</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-support">
        <h4>SOPORTE</h4>
        <ul>
          <li><a @click.prevent="openSizeGuide('normal')">Tallas Franelas</a></li>
          <li><a @click.prevent="openSizeGuide('oversize')">Tallas Oversize</a></li>
          <li><a @click.prevent="openSizeGuide('boxyfit')">Tallas Boxy Fit</a></li>
          <li><a @click.prevent="openSizeGuide('hoodies')">Tallas Hoodies</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} KAEM_VE - Todos los derechos reservados.</p>
      <div class="payment-methods">
        <span class="method">Pago Móvil</span>
        <span class="method">Transferencia</span>
        <span class="method">Binance</span>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isModalOpen" class="modal-overlay" @click.self="isModalOpen = false">
          <div class="modal-content">
            <button class="close-btn" @click="isModalOpen = false">&times;</button>
            
            <h3 class="modal-title">{{ activeGuide.title }}</h3>
            
            <div class="modal-body">
              <table class="size-table">
                <thead>
                  <tr>
                    <th>Talla</th>
                    <th>Ancho</th>
                    <th>Largo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in activeGuide.sizes" :key="item.talla">
                    <td>{{ item.talla }}</td>
                    <td>{{ item.ancho }}</td>
                    <td>{{ item.largo }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p class="modal-note">* Medidas en centímetros tomadas sobre superficie plana.</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const activeGuide = ref({})

// Datos de todas las guías de KAEM
const sizeData = {
  normal: {
    title: 'GUÍA TALLAS CLASICAS',
    sizes: [
      { talla: 'S', ancho: '48cm', largo: '68cm' },
      { talla: 'M', ancho: '51cm', largo: '71cm' },
      { talla: 'L', ancho: '54cm', largo: '74cm' }
    ]
  },
  oversize: {
    title: 'GUÍA TALLAS OVERSIZE',
    sizes: [
      { talla: 'S', ancho: '55cm', largo: '72cm' },
      { talla: 'M', ancho: '58cm', largo: '75cm' },
      { talla: 'L', ancho: '61cm', largo: '78cm' }
    ]
  },
  boxyfit: {
    title: 'GUÍA TALLAS BOXY FIT',
    sizes: [
      { talla: 'S', ancho: '58cm', largo: '66cm' },
      { talla: 'M', ancho: '61cm', largo: '69cm' },
      { talla: 'L', ancho: '64cm', largo: '72cm' }
    ]
  },
  hoodies: {
    title: 'GUÍA TALLAS HOODIES',
    sizes: [
      { talla: 'S', ancho: '58cm', largo: '70cm' },
      { talla: 'M', ancho: '62cm', largo: '73cm' },
      { talla: 'L', ancho: '65cm', largo: '76cm' }
    ]
  }
}

const openSizeGuide = (type) => {
  activeGuide.value = sizeData[type]
  isModalOpen.value = true
}
</script>

<style scoped>
/* --- CONFIGURACIÓN CUBAO LIGHTER --- */
.logo-text, h4, .modal-title, th{
  font-family: 'Cubao', sans-serif !important;
  font-weight: lighter !important;
  letter-spacing: 1px;
}

.main-footer {
  background-color: #e0e5ec;
  padding: 80px 20px 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;
}

.logo-text { font-size: 2.5rem; color: #1a1a1a; margin-bottom: 15px; }
.brand-quote { color: #666; font-size: 14px; margin-bottom: 25px; }

.social-links { display: flex; gap: 15px; }
.social-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e5ec;
  border-radius: 12px;
  color: #5416cf;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
  transition: all 0.3s ease;
  text-decoration: none;
}
.social-icon:hover { color: white; transform: translateY(-5px); }
.ig:hover { background: #df1e9f; }
.ttk:hover { background: #202020; }
.ws:hover { background: #1d8d2c; }

h4 { font-size: 1.1rem; color: #1a1a1a; margin-bottom: 25px; }
ul { list-style: none; padding: 0; }
ul li { margin-bottom: 12px; }
ul li a {
  text-decoration: none;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
}
ul li a:hover { color: #5416cf; padding-left: 5px; }

/* --- MODAL LIMPIO --- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #e0e5ec;
  padding: 40px;
  border-radius: 30px;
  width: 92%;
  max-width: 450px;
  position: relative;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.modal-title { color: #5416cf; margin-bottom: 30px; text-align: center; font-size: 1.4rem; }

.size-table { width: 100%; border-collapse: collapse; }
.size-table th {
  padding: 12px;
  font-size: 0.8rem;
  border-bottom: 2px solid #5416cf;
  text-align: left;
  color: #1a1a1a;
}
.size-table td {
  padding: 15px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 32px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
}

.modal-note { 
    margin-top: 25px; 
    font-size: .80rem; 
    color: #333;
    font-weight: bold;
    text-align: center; 
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  font-size: 12px;
}
.payment-methods { display: flex; gap: 20px; }
.method { font-weight: 800; color: #aaa; text-transform: uppercase; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 850px) {
  .footer-container { grid-template-columns: 1fr; text-align: center; }
  .social-links { justify-content: center; }
  .footer-bottom { flex-direction: column; gap: 20px; }
}
</style>