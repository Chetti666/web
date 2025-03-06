<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 text-center mb-6">Contáctenos</h1>
      </v-col>
    </v-row>

    <v-row>
      <!-- Formulario de Contacto -->
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title class="text-h5 mb-4">Envíenos un mensaje</v-card-title>
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Nombre"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Apellido"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  type="email"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Teléfono"
                  type="tel"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  label="Asunto"
                  :items="asuntos"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-help-circle"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Mensaje"
                  variant="outlined"
                  density="comfortable"
                  rows="4"
                  prepend-inner-icon="mdi-message-text"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn color="primary" block size="large">
                  Enviar Mensaje
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>

      <!-- Información de Contacto -->
      <v-col cols="12" md="6">
        <v-card class="pa-4" height="100%">
          <v-card-title class="text-h5 mb-4">Información de Contacto</v-card-title>
          
          <v-list>
            <v-list-item
              v-for="(info, index) in contactInfo"
              :key="index"
              :prepend-icon="info.icon"
            >
              <v-list-item-title class="font-weight-bold">{{ info.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ info.content }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-card-title class="text-h6 mt-6">Horario de Atención</v-card-title>
          <v-list>
            <v-list-item
              v-for="(horario, index) in horarios"
              :key="index"
              :prepend-icon="horario.icon"
            >
              <v-list-item-title>{{ horario.dias }}</v-list-item-title>
              <v-list-item-subtitle>{{ horario.horas }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-card-title class="text-h6 mt-6">Síguenos en Redes Sociales</v-card-title>
          <v-card-text>
            <v-btn
              v-for="red in redesSociales"
              :key="red.nombre"
              :icon="red.icon"
              :color="red.color"
              class="ma-2"
              variant="text"
              :href="red.link"
              target="_blank"
            ></v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Mapa o Ubicación -->
    <v-row class="mt-8">
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5 mb-4">Nuestra Ubicación</v-card-title>
          <div class="mapa-container">
            <!-- Aquí iría el componente de mapa, por ejemplo Google Maps -->
            <v-img
              src="/images/mapa.jpg"
              height="400"
              cover
            ></v-img>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactoView',
  data: () => ({
    asuntos: [
      'Consulta General',
      'Soporte Técnico',
      'Cotización',
      'Capacitación',
      'Servicio de Mantenimiento',
      'Otro'
    ],
    contactInfo: [
      {
        icon: 'mdi-map-marker',
        title: 'Dirección',
        content: 'Av. Principal 1234, Ciudad Industrial'
      },
      {
        icon: 'mdi-phone',
        title: 'Teléfono',
        content: '+56 2 1234 5678'
      },
      {
        icon: 'mdi-email',
        title: 'Email',
        content: 'contacto@empresa.cl'
      },
      {
        icon: 'mdi-whatsapp',
        title: 'WhatsApp',
        content: '+56 9 8765 4321'
      }
    ],
    horarios: [
      {
        icon: 'mdi-calendar-clock',
        dias: 'Lunes a Viernes',
        horas: '08:30 - 18:00'
      },
      {
        icon: 'mdi-calendar-clock',
        dias: 'Sábado',
        horas: '09:00 - 13:00'
      }
    ],
    redesSociales: [
      {
        nombre: 'Facebook',
        icon: 'mdi-facebook',
        color: 'blue',
        link: 'https://facebook.com/'
      },
      {
        nombre: 'LinkedIn',
        icon: 'mdi-linkedin',
        color: 'blue-darken-2',
        link: 'https://linkedin.com/'
      },
      {
        nombre: 'Twitter',
        icon: 'mdi-twitter',
        color: 'light-blue',
        link: 'https://twitter.com/'
      },
      {
        nombre: 'Instagram',
        icon: 'mdi-instagram',
        color: 'purple',
        link: 'https://instagram.com/'
      }
    ]
  })
}
</script>

<style scoped>
.mapa-container {
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
}
</style>
