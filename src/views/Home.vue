<template>
  <div>
    <!-- Hero Carousel Section -->
    <v-carousel
      cycle
      :height="$vuetify.display.mobile ? '70vh' : '90vh'"
      max-height="800"
      hide-delimiter-background
      show-arrows="hover"
      interval="5000"
    >
      <v-carousel-item
        v-for="(slide, i) in heroSlides"
        :key="i"
        :src="slide.image"
        :srcset="`${slide.image}?w=800 800w, ${slide.image}?w=1200 1200w, ${slide.image}?w=1600 1600w`"
        sizes="(max-width: 600px) 800px, (max-width: 960px) 1200px, 1600px"
        contain
        class="carousel-image"
      >
        <div class="carousel-content fill-height d-flex align-center">
          <v-container>
            <v-row justify="center">
              <v-col cols="12" md="8" class="text-center">
                <h1 class="text-h2 font-weight-bold mb-4 text-white">
                  {{ slide.title }}
                </h1>
                <p class="text-h5 mb-8 text-white">
                  {{ slide.subtitle }}
                </p>
                <v-btn
                  color="primary"
                  size="x-large"
                  :to="slide.primaryButton.link"
                  class="mr-4"
                >
                  {{ slide.primaryButton.text }}
                </v-btn>
                <v-btn
                  variant="outlined"
                  size="x-large"
                  color="white"
                  :to="slide.secondaryButton.link"
                >
                  {{ slide.secondaryButton.text }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-carousel-item>
    </v-carousel>

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

    <!-- Productos Destacados -->
    <v-container class="py-12 grey-lighten-4">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3">Productos Destacados</h2>
        </v-col>
        
        <!-- FRL Syntesi -->
        <v-col cols="12" md="4">
          <v-card min-height="560" class="d-flex flex-column">
            <v-card-media height="200">
              <v-img
                :src="require('@/assets/images/grcontrol/productos/01-FRL-SYNTESI.webp')"
                alt="FRL Syntesi"
              ></v-img>
            </v-card-media>
          <v-card-title>FRL Syntesi</v-card-title>
          <v-card-text flex-grow-1>
          Unidad de mantenimiento FRL para sistemas neumáticos de alta eficiencia.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="text" to="/productos">
              Ver Más
            </v-btn>
          </v-card-actions>
          </v-card>
        </v-col>


        <!-- Actuador -->
        <v-col cols="12" md="4">
          <v-card min-height="560" class="d-flex flex-column">
            <v-card-media height="200">
            <v-img
              :src="require('@/assets/images/grcontrol/productos/01-ACTUADOR-DOBLE-EFECTO-TIPO-ISO-SERIE-3.webp')"
              alt="Actuador"
            ></v-img>
            </v-card-media>
            <v-card-title>Actuador Serie 3</v-card-title>
            <v-card-text flex-grow-1>
              Actuador neumático de doble efecto con certificación ISO.
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                variant="text"
                to="/productos"
              >
                Ver Más
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Válvula -->
        <v-col cols="12" md="4">
          <v-card min-height="560" class="d-flex flex-column">
            <v-card-media height="200">
            <v-img
              :src="require('@/assets/images/grcontrol/productos/VALVULA-MANUAL-DE-PALANCA-SERIE-70.webp')"
              alt="Válvula"
            ></v-img>
            </v-card-media>
            <v-card-title>Válvula Serie 70</v-card-title>
            <v-card-text flex-grow-1>
              Válvula manual de palanca para control preciso de flujo.
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                variant="text"
                to="/productos"
              >
                Ver Más
              </v-btn>
            </v-card-actions>
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
  data: () => ({
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
        image: require('@/assets/images/grcontrol/hero/slide2.webp'),
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
    ]
  })
}
</script>

<style scoped>

.service-card {
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
}

.v-carousel {
  box-shadow: none;
}

.v-carousel .v-window__container {
  border-radius: 0;
}

.carousel-image {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.carousel-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85) sepia(0.2) saturate(1.1) contrast(1.05);
  will-change: transform, filter;
  transition: transform 0.5s ease-out, filter 0.5s ease;
}

.v-carousel-item {
  transition: opacity 0.8s ease;
}

.v-carousel-item--active {
  opacity: 1;
}

.v-carousel-item--prev,
.v-carousel-item--next {
  opacity: 0.2;
}

.carousel-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
  z-index: 1;
  pointer-events: none;
}

.carousel-content {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 4rem);
  max-width: 1400px;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1px);
}

.carousel-content h1 {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  font-weight: 700;
}

.carousel-content p {
  font-size: 1.75rem;
  line-height: 1.5;
  margin-bottom: 3rem;
  max-width: 800px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  font-weight: 500;
}

.carousel-content .v-btn {
  margin: 0.75rem;
  min-width: 220px;
  font-weight: 700;
  letter-spacing: 0.75px;
  font-size: 1.1rem;
  padding: 1.25rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.carousel-content .v-btn--outlined {
  border-width: 2px;
}

.carousel-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.carousel-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.carousel-content .v-btn {
  min-width: 160px;
  font-size: 0.9rem;
}

@media (min-width: 960px) {
  .carousel-content h1 {
    font-size: 2.8rem;
  }
  
  .carousel-content p {
    font-size: 1.4rem;
  }
  
  .carousel-content .v-btn {
    min-width: 180px;
    font-size: 1rem;
  }
}

.v-carousel {
  max-width: 1200px;
  margin: 0 auto;
}

.v-carousel__controls {
  z-index: 4;
}

.v-carousel:hover .carousel-image img {
  transform: scale(1.05);
}

@media (max-width: 960px) {
  .carousel-image::before,
  .carousel-image::after {
    width: 15%;
    min-width: 50px;
  }
}

@media (min-width: 1920px) {
  .carousel-image img {
    object-fit: cover;
  }
  
  .carousel-image::before,
  .carousel-image::after {
    width: 25%;
  }
}
</style>
