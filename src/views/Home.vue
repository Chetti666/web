<template>
  <div>
    <!-- Hero Carousel Section -->
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows="hover"
      interval="5000"
    >
      <v-carousel-item
        v-for="(slide, i) in heroSlides"
        :key="i"
        :src="slide.image"
        cover
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
          <v-card class="mx-auto" max-width="400">
            <v-img
              src="/images/grcontrol/productos/01-FRL-SYNTESI.png"
              height="200"
              cover
            ></v-img>
            <v-card-title>FRL Syntesi</v-card-title>
            <v-card-text>
              Unidad de mantenimiento FRL para sistemas neumáticos de alta eficiencia.
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

        <!-- Actuador -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img
              src="/images/grcontrol/productos/01-ACTUADOR-DOBLE-EFECTO-TIPO-ISO-SERIE-3.png"
              height="200"
              cover
            ></v-img>
            <v-card-title>Actuador Serie 3</v-card-title>
            <v-card-text>
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
          <v-card class="mx-auto" max-width="400">
            <v-img
              src="/images/grcontrol/productos/VALVULA-MANUAL-DE-PALANCA-SERIE-70.png"
              height="200"
              cover
            ></v-img>
            <v-card-title>Válvula Serie 70</v-card-title>
            <v-card-text>
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
.carousel-content {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

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

.v-carousel-item img {
  filter: brightness(0.7);
}
</style>
