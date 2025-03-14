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
                <h1 class="text-h2 font-weight-bold mb-4 text-shadow fade-in-up">
                  {{ slide.title }}
                </h1>
                <p class="text-h5 mb-8 text-shadow fade-in-up delay-1">
                  {{ slide.subtitle }}
                </p>
                <v-btn
                  color="primary"
                  size="x-large"
                  :to="slide.primaryButton.link"
                  class="mr-4 pulse-button"
                >
                  {{ slide.primaryButton.text }}
                </v-btn>
                <v-btn
                  variant="outlined"
                  size="x-large"
                  color="secondary"
                  :to="slide.secondaryButton.link"
                  class="outline-hover-secondary"
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
/* Animaciones del texto */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 2s forwards;
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
  background-color: #000000;
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

/* Estilos de las imágenes del carrusel ajustado a 1280px */
.carousel-image {
  position: relative;
  overflow: hidden;
  width: 1280px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
}

.v-carousel__controls .v-btn {
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  transition: background-color 0.3s ease;
}

.v-carousel__controls .v-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.v-carousel__controls {
  z-index: 4;
}
</style>