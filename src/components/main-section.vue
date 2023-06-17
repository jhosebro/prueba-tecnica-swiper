<template>
  <div class="container-fluid bg-body-tertiary">
    <nav class="navbar bg-body-tertiary">
      <div class="container dashboard-section">
        <p class="nav-bar brand">Dashboard/</p>
      </div>
    </nav>
    <section class="main-section">
      <div class="row">
        <div class="col-md-6">
          <div class="image-container">
            <img class="img-fluid best-selling" src="../assets/bestSelling.png" alt="Best Selling" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="image-container">
            <img class="img-fluid sales-comparison" src="../assets/barChart.png" alt="Sales Comparison" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="image-container">
            <img class="img-fluid features" src="../assets/featured01.png" alt="Features" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="swiper-container">
            <Swiper class="swiper-container" :modules="modules" :space-between="20" :loop="true"
              :pagination="{ clickable: true }"
              :autoplay="{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }">
              <Swiper-slide class="swiper-container" v-for="text in swiperTextBase" :key="text.description">
                <img :src="text.img" alt="Image" class="img-fluid" />
              </Swiper-slide>
              <div class="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
html,
body {
  background-color: #24292E;
  margin: 0;
  padding: 0;
  height: 100%;
}

.container-fluid {
  background-color: #24292E;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.dashboard-section {
  background-color: #2D3339;
  padding: 15px;
  color: #13B497;
}

.main-section {
  background-color: #24292E;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.image-container {
  margin-bottom: 20px;
}

.best-selling,
.sales-comparison,
.features {
  width: 100%;
  height: auto;
}
</style>




<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper'

// Importa los estilos de Swiper que necesites
import 'swiper/swiper.css';
import 'swiper/css/pagination'

import { ref } from 'vue';

export default {
  components: { Swiper, SwiperSlide },
  name: 'MainSection',
  setup() {
    const swiperTextBase = ref([
      {
        author: 'John Doe',
        description: 1,
        img: 'https://picsum.photos/1920/1080?random=1'
      },
      {
        author: 'Juan',
        description: 2,
        img: 'https://picsum.photos/1920/1080?random=2'
      },
      {
        author: 'Sebastian',
        description: 3,
        img: 'https://picsum.photos/1920/1080?random=3'
      }
    ]);
    return { modules: [Pagination, Autoplay], swiperTextBase };
  }
};
</script>
