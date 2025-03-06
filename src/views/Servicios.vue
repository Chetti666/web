<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 text-center mb-6">Nuestros Servicios</h1>
      </v-col>
    </v-row>

    <!-- Servicios Principales -->
    <v-row>
      <v-col cols="12" md="6" v-for="servicio in serviciosPrincipales" :key="servicio.id">
        <v-card height="100%">
          <v-img :src="servicio.imagen" height="250" cover></v-img>
          <v-card-title class="text-h4">{{ servicio.titulo }}</v-card-title>
          <v-card-text>
            <p class="text-body-1">{{ servicio.descripcion }}</p>
            <v-list>
              <v-list-item v-for="(caracteristica, index) in servicio.caracteristicas" 
                          :key="index"
                          :prepend-icon="caracteristica.icon">
                {{ caracteristica.texto }}
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block>
              Solicitar Información
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Áreas de Especialización -->
    <v-row class="mt-8">
      <v-col cols="12">
        <h2 class="text-h4 text-center mb-6">Áreas de Especialización</h2>
      </v-col>
      <v-col cols="12" md="4" v-for="area in areasEspecializacion" :key="area.id">
        <v-card height="100%">
          <v-card-title class="d-flex align-center">
            <v-icon size="large" :color="area.color" class="mr-2">{{ area.icon }}</v-icon>
            {{ area.titulo }}
          </v-card-title>
          <v-card-text>
            <p>{{ area.descripcion }}</p>
            <v-chip-group>
              <v-chip v-for="(tag, index) in area.tags" 
                     :key="index"
                     :color="area.color"
                     variant="outlined">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Proceso de Servicio -->
    <v-row class="mt-8">
      <v-col cols="12">
        <h2 class="text-h4 text-center mb-6">Nuestro Proceso</h2>
      </v-col>
      <v-col cols="12">
        <v-timeline align="start">
          <v-timeline-item v-for="paso in procesosServicio" 
                          :key="paso.id"
                          :dot-color="paso.color"
                          size="small">
            <template v-slot:opposite>
              <div class="text-h6">{{ paso.titulo }}</div>
            </template>
            <div class="text-body-1">{{ paso.descripcion }}</div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <!-- Formulario de Contacto -->
    <v-row class="mt-8">
      <v-col cols="12">
        <v-card color="grey-lighten-4">
          <v-card-text>
            <h3 class="text-h5 mb-4 text-center">Solicite una Cotización</h3>
            <v-form>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nombre"
                    variant="outlined"
                    density="comfortable"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Email"
                    variant="outlined"
                    density="comfortable"
                    type="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                    label="Tipo de Servicio"
                    :items="tiposServicio"
                    variant="outlined"
                    density="comfortable"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Teléfono"
                    variant="outlined"
                    density="comfortable"
                    type="tel"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="Descripción del Servicio Requerido"
                    variant="outlined"
                    density="comfortable"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-btn color="primary" size="large">
                    Enviar Solicitud
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ServiciosView',
  data: () => ({
    serviciosPrincipales: [
      {
        id: 1,
        titulo: 'Mantenimiento Industrial',
        imagen: 'https://via.placeholder.com/800x400?text=Mantenimiento+Industrial',
        descripcion: 'Servicios especializados de mantenimiento predictivo y correctivo para sistemas industriales.',
        caracteristicas: [
          { icon: 'mdi-wrench', texto: 'Diagnóstico y reparación de equipos' },
          { icon: 'mdi-chart-line', texto: 'Análisis de vibraciones' },
          { icon: 'mdi-ruler', texto: 'Alineación láser' },
          { icon: 'mdi-rotate-3d', texto: 'Balanceo dinámico' }
        ]
      },
      {
        id: 2,
        titulo: 'Capacitación Técnica',
        imagen: 'https://via.placeholder.com/800x400?text=Capacitacion+Tecnica',
        descripcion: 'Programas de capacitación especializados para optimizar el rendimiento de su equipo.',
        caracteristicas: [
          { icon: 'mdi-school', texto: 'Cursos teórico-prácticos' },
          { icon: 'mdi-account-group', texto: 'Grupos reducidos' },
          { icon: 'mdi-certificate', texto: 'Certificación oficial' },
          { icon: 'mdi-tools', texto: 'Práctica en equipos reales' }
        ]
      }
    ],
    areasEspecializacion: [
      {
        id: 1,
        titulo: 'Automatización',
        icon: 'mdi-robot-industrial',
        color: 'blue',
        descripcion: 'Implementación y mantenimiento de sistemas de control automático industrial.',
        tags: ['PLC', 'SCADA', 'HMI', 'Control de Procesos']
      },
      {
        id: 2,
        titulo: 'Sistemas de Bombeo',
        icon: 'mdi-water-pump',
        color: 'green',
        descripcion: 'Optimización y mantenimiento de sistemas de bombeo industrial.',
        tags: ['Bombas Centrífugas', 'Control de Presión', 'Eficiencia Energética']
      },
      {
        id: 3,
        titulo: 'Neumática',
        icon: 'mdi-air-filter',
        color: 'orange',
        descripcion: 'Servicios especializados en sistemas neumáticos industriales.',
        tags: ['Actuadores', 'Válvulas', 'Compresores', 'FRL']
      }
    ],
    procesosServicio: [
      {
        id: 1,
        titulo: 'Diagnóstico',
        color: 'blue',
        descripcion: 'Evaluación detallada del sistema y identificación de necesidades específicas.'
      },
      {
        id: 2,
        titulo: 'Propuesta',
        color: 'green',
        descripcion: 'Desarrollo de una solución personalizada y presupuesto detallado.'
      },
      {
        id: 3,
        titulo: 'Ejecución',
        color: 'orange',
        descripcion: 'Implementación de la solución con personal técnico especializado.'
      },
      {
        id: 4,
        titulo: 'Seguimiento',
        color: 'purple',
        descripcion: 'Monitoreo continuo y soporte post-servicio.'
      }
    ],
    tiposServicio: [
      'Mantenimiento Preventivo',
      'Mantenimiento Correctivo',
      'Capacitación',
      'Consultoría Técnica',
      'Instalación de Equipos',
      'Otro'
    ]
  })
}
</script>
