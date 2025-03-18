<template>
  <div>
    <!-- Hero Carousel Section -->
    <v-carousel
    cycle
    :height="$vuetify.display.mobile ? '60vh' : '90vh'"
    hide-delimiter-background
    show-arrows="hover"
    interval="5000"
    :transition="'fade'"
  >
    <v-carousel-item
      v-for="(slide, i) in heroSlides"
      :key="i"
      :src="slide.image"
      class="carousel-image"
    >
      <div class="carousel-content fill-height d-flex align-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="text-h3 font-weight-bold mb-4 text-shadow fade-in-up">
                {{ slide.title }}
              </h1>
              <p class="text-h6 mb-8 text-shadow fade-in-up delay-1">
                {{ slide.subtitle }}
              </p>
              <v-btn
                color="primary"
                size="large"
                :to="slide.primaryButton.link"
                class="mr-4 pulse-button"
              >
                {{ slide.primaryButton.text }}
              </v-btn>
              <v-btn
                variant="outlined"
                size="large"
                color="secondary"
                :to="slide.secondaryButton.link"
                class="outline-hover-secondary carousel-btn"
              >
                {{ slide.secondaryButton.text }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-carousel-item>
  </v-carousel>

    <!-- Productos Destacados -->
    <v-container class="py-12 grey-lighten-4">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h2 class="text-h3 font-weight-bold">Productos Destacados</h2>
      </v-col>
      <v-col
        v-for="(product, index) in featuredProducts"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card class="d-flex flex-column product-card" elevation="3">
          <v-img :src="product.image" :alt="product.title" height="200px"></v-img>
          <v-card-title class="text-h5 font-weight-bold">{{ product.title }}</v-card-title>
          <v-card-text class="flex-grow-1">{{ product.description }}</v-card-text>
          <v-card-actions>
            <v-btn :color="product.buttonColor" variant="elevated" :to="product.link" class="text-white font-weight-bold product-btn">
              {{ product.buttonText }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

<!-- Servicios Principales -->
<v-container class="py-12">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3">Nuestros Servicios</h2>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="service-card" flat>
            <v-card-text class="text-center">
              <v-icon size="64" color="primary" class="mb-4">mdi-wrench</v-icon>
              <h3 class="text-h5 mb-4">Mantenimiento</h3>
              <p>Servicio técnico especializado para equipos neumáticos e hidráulicos</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="service-card" flat>
            <v-card-text class="text-center">
              <v-icon size="64" color="primary" class="mb-4">mdi-school</v-icon>
              <h3 class="text-h5 mb-4">Capacitación</h3>
              <p>Programas de formación en automatización y control industrial</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="service-card" flat>
            <v-card-text class="text-center">
              <v-icon size="64" color="primary" class="mb-4">mdi-cog</v-icon>
              <h3 class="text-h5 mb-4">Automatización</h3>
              <p>Diseño e implementación de sistemas de control automático</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Sección CTA -->
    <v-container class="py-12">
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 mb-6">¿Necesita una solución personalizada?</h2>
          <p class="text-h6 mb-8">
            Nuestro equipo de expertos está listo para ayudarle con sus requerimientos específicos
          </p>
          <v-btn
            color="primary"
            size="x-large"
            to="/contacto"
            prepend-icon="mdi-email"
          >
            Contáctenos Ahora
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      heroSlides: [
        {
          image: require('@/assets/images/grcontrol/hero/slide1.webp'),
          title: 'Expertos en Automatización Industrial',
          subtitle: 'Soluciones en neumática, bombas y variadores de frecuencia',
          primaryButton: {
            text: 'Ver Productos',
            link: '/productos'
          },
          secondaryButton: {
            text: 'Contáctenos',
            link: '/contacto'
          }
        },
        {
          image: require('@/assets/images/grcontrol/hero/slide2a.webp'),
          title: 'Servicios de Mantenimiento',
          subtitle: 'Mantenimiento preventivo y correctivo para sus equipos',
          primaryButton: {
            text: 'Nuestros Servicios',
            link: '/servicios'
          },
          secondaryButton: {
            text: 'Solicitar Visita',
            link: '/contacto'
          }
        },
        {
          image: require('@/assets/images/grcontrol/hero/slide3.webp'),
          title: 'Capacitación Especializada',
          subtitle: 'Programas de formación para su equipo técnico',
          primaryButton: {
            text: 'Ver Programas',
            link: '/servicios'
          },
          secondaryButton: {
            text: 'Más Información',
            link: '/contacto'
          }
        }
      ],
      featuredProducts: [
        {
          title: 'FRL Syntesi',
          description: 'Unidad de mantenimiento FRL para sistemas neumáticos de alta eficiencia.',
          image: require('@/assets/images/grcontrol/productos/01-FRL-SYNTESI.webp'),
          buttonText: 'Ver Más',
          buttonColor: 'primary',
          link: '/productos'
        },
        {
          title: 'Actuador Serie 3',
          description: 'Actuador neumático de doble efecto con certificación ISO.',
          image: require('@/assets/images/grcontrol/productos/01-ACTUADOR-DOBLE-EFECTO-TIPO-ISO-SERIE-3.webp'),
          buttonText: 'Ver Más',
          buttonColor: 'primary',
          link: '/productos'
        },
        {
          title: 'Válvula Serie 70',
          description: 'Válvula manual de palanca para control preciso de flujo.',
          image: require('@/assets/images/grcontrol/productos/VALVULA-MANUAL-DE-PALANCA-SERIE-70.webp'),
          buttonText: 'Ver Más',
          buttonColor: 'primary',
          link: '/productos'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Animaciones del texto */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;
}

.fade-in-up.delay-1 {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efecto de botón dinámico */
.pulse-button {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.outline-hover-secondary {
  background-color: #000000be;
  color: #ffffff;
  border-color: #000000;
  transition: 0.3s ease;
}

.outline-hover-secondary:hover {
  background-color: #4a90e2;
  color: #ffffff;
  border-color: #4a90e2;
}

/* Sombra para mejorar legibilidad del texto */
.text-shadow {
  color: #ffffff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
}

/* Estilos del carrusel */
.carousel-image {
  width: 100%;
  height: 60vh;
  max-height: 700px;
  object-fit: cover;
  margin: 0 auto;
  transition: transform 0.6s ease-in-out;
}

@media (min-width: 1440px) {
  .carousel-image {
    height: 80vh;
  }
}
@media (max-width: 600px) {
  .carousel-content {
    margin-top: 0;
  }
}
.carousel-btn {
  transition: transform 0.3s ease;
  line-height: 1.5rem;
  padding: 8px 16px;
  min-width: 150px;
  height: 45px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover {
  transform: scale(1.05);
}


.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.v-card-title {
  color: #333;
  text-align: center;
  margin-top: 10px;
}

.v-card-text {
  color: #555;
  text-align: center;
  font-size: 1rem;
  padding: 0 16px;
}

.product-btn {
  transition: background-color 0.3s ease;
}

.product-btn:hover {
  background-color: #4a90e2 !important;
  color: #fff !important;
}
</style>