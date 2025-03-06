<template>
  <v-container class="productos-container">
    <!-- Encabezado -->
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 font-weight-bold mb-3">Nuestros Productos</h1>
        <p class="text-subtitle-1 text-grey-darken-1 mb-8 mx-auto" style="max-width: 600px;">
          Soluciones de automatización industrial de alta calidad diseñadas para maximizar la eficiencia y confiabilidad de su proceso
        </p>
      </v-col>
    </v-row>

    <!-- Filtros -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card flat class="px-4 py-2 rounded-lg" color="grey-lighten-4">
          <v-row align="center" no-gutters>
            <v-col cols="12" lg="5" md="4" class="pa-2">
              <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                placeholder="Buscar productos"
                variant="outlined"
                density="compact"
                hide-details
                bg-color="white"
                class="rounded-lg"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="4" md="4" class="pa-2">
              <v-select
                v-model="selectedCategory"
                :items="categories"
                placeholder="Todas las categorías"
                variant="outlined"
                density="compact"
                hide-details
                bg-color="white"
                class="rounded-lg"
              ></v-select>
            </v-col>
            <v-col cols="12" lg="3" md="4" class="pa-2">
              <v-btn-toggle
                v-model="viewType"
                divided
                class="w-100 rounded-lg"
                density="compact"
                color="primary"
              >
                <v-btn 
                  value="grid" 
                  prepend-icon="mdi-view-grid" 
                  class="flex-grow-1"
                  height="40"
                >
                  <span class="text-body-2">Cuadrícula</span>
                </v-btn>
                <v-btn 
                  value="list" 
                  prepend-icon="mdi-view-list" 
                  class="flex-grow-1"
                  height="40"
                >
                  <span class="text-body-2">Lista</span>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Lista de Productos -->
    <v-row>
      <v-col 
        v-for="product in filteredProducts" 
        :key="product.id"
        :cols="viewType === 'grid' ? 12 : 12"
        :sm="viewType === 'grid' ? 6 : 12"
        :md="viewType === 'grid' ? 4 : 12"
        class="pb-6"
      >
        <v-card
          :class="[
            'product-card',
            viewType === 'list' ? 'd-flex flex-row align-center' : '',
            'rounded-xl'
          ]"
          height="100%"
          elevation="2"
          :hover="true"
        >
          <v-img
            :src="product.image"
            :height="viewType === 'grid' ? '250' : '180'"
            :width="viewType === 'list' ? '200' : '100%'"
            cover
            class="bg-grey-lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
            <div class="image-overlay">
              <v-btn
                icon="mdi-magnify"
                size="large"
                color="white"
                variant="text"
                @click="showProductDetails(product)"
              ></v-btn>
            </div>
          </v-img>

          <div :class="[
            viewType === 'list' ? 'flex-grow-1 pa-6' : 'pa-4',
            'product-content'
          ]">
            <v-chip
              v-if="product.category"
              size="small"
              color="primary"
              variant="flat"
              class="mb-2"
            >
              {{ product.category }}
            </v-chip>

            <v-card-title class="text-primary px-0 text-h5 font-weight-bold">
              {{ product.name }}
            </v-card-title>

            <v-card-text class="px-0 pt-3">
              <p class="mb-4 text-body-1">{{ product.description }}</p>
              <v-chip-group v-if="product.features" class="mb-4">
                <v-chip
                  v-for="(feature, index) in product.features"
                  :key="index"
                  size="small"
                  variant="outlined"
                  class="mr-2"
                >
                  {{ feature }}
                </v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions class="px-0 pt-2">
              <v-btn
                color="primary"
                variant="flat"
                class="text-none px-6"
                @click="showProductDetails(product)"
              >
                Ver Detalles
              </v-btn>
              <v-btn
                color="primary"
                variant="text"
                class="text-none"
                prepend-icon="mdi-download"
                @click="downloadDatasheet(product)"
              >
                Ficha Técnica
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Diálogo de Detalles del Producto -->
    <v-dialog v-model="dialog" max-width="900" class="product-dialog">
      <v-card v-if="selectedProduct" class="rounded-xl">
        <v-img
          :src="selectedProduct.image"
          height="400"
          cover
          class="bg-grey-lighten-2"
        >
          <div class="fill-height" style="background: rgba(0,0,0,0.3)">
            <v-container class="fill-height">
              <v-row align="end">
                <v-col>
                  <h2 class="text-h3 text-white font-weight-bold mb-2">
                    {{ selectedProduct.name }}
                  </h2>
                  <v-chip
                    color="primary"
                    size="large"
                    variant="flat"
                  >
                    {{ selectedProduct.category }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-img>
        
        <v-container class="pa-8">
          <v-row>
            <v-col cols="12" md="8">
              <p class="text-body-1 mb-6">{{ selectedProduct.description }}</p>
              
              <h3 class="text-h5 font-weight-bold mb-4">Características</h3>
              <v-chip-group class="mb-6">
                <v-chip
                  v-for="(feature, index) in selectedProduct.features"
                  :key="index"
                  color="primary"
                  variant="outlined"
                  size="large"
                >
                  {{ feature }}
                </v-chip>
              </v-chip-group>

              <h3 class="text-h5 font-weight-bold mb-4">Especificaciones Técnicas</h3>
              <v-list class="rounded-lg" bg-color="grey-lighten-4">
                <v-list-item
                  v-for="(spec, key) in selectedProduct.specifications"
                  :key="key"
                  :title="key"
                  :subtitle="spec"
                  class="py-3"
                ></v-list-item>
              </v-list>
            </v-col>

            <v-col cols="12" md="4">
              <v-card class="rounded-lg pa-6" color="grey-lighten-4">
                <h4 class="text-h6 font-weight-bold mb-4">Documentación</h4>
                <v-btn
                  block
                  color="primary"
                  variant="flat"
                  size="large"
                  prepend-icon="mdi-download"
                  class="mb-4"
                  @click="downloadDatasheet(selectedProduct)"
                >
                  Descargar Ficha Técnica
                </v-btn>
                <v-btn
                  block
                  color="primary"
                  variant="outlined"
                  size="large"
                  prepend-icon="mdi-email"
                  to="/contacto"
                >
                  Solicitar Cotización
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>

    <!-- Sección de Consulta -->
    <v-row class="mt-16 mb-8">
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="primary" class="rounded-xl overflow-hidden">
          <v-container class="pa-12">
            <v-row align="center">
              <v-col cols="12" md="8" class="text-center text-md-left">
                <h2 class="text-h3 text-white font-weight-bold mb-4">¿Necesita más información?</h2>
                <p class="text-white text-h6 font-weight-regular mb-0">
                  Nuestro equipo técnico está disponible para asesorarlo en la selección del producto adecuado para su aplicación.
                </p>
              </v-col>
              <v-col cols="12" md="4" class="text-center">
                <v-btn
                  color="white"
                  size="x-large"
                  prepend-icon="mdi-email"
                  to="/contacto"
                  class="px-8 text-primary"
                  variant="flat"
                >
                  Contáctenos
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductosView',
  data: () => ({
    search: '',
    selectedCategory: 'Todos',
    viewType: 'grid',
    dialog: false,
    selectedProduct: null,
    categories: ['Todos', 'Actuadores', 'Conectores', 'Válvulas', 'Control', 'FRL'],
    products: [
      {
        id: 1,
        name: 'Actuador Doble Efecto ISO Serie 3',
        category: 'Actuadores',
        image: 'https://chetti666.github.io/web/images/grcontrol/productos/01-ACTUADOR-DOBLE-EFECTO-TIPO-ISO-SERIE-3.png',
        description: 'Actuador neumático de doble efecto, diseñado según normas ISO para máxima compatibilidad y rendimiento.',
        features: ['Doble Efecto', 'Norma ISO', 'Alta Durabilidad'],
        specifications: {
          'Material': 'Aluminio anodizado',
          'Presión de trabajo': '1-10 bar',
          'Temperatura': '-20°C a +80°C',
          'Conexiones': 'G1/4"'
        }
      },
      {
        id: 2,
        name: 'Conector Tipo L Tecnopolímero',
        category: 'Conectores',
        image: 'https://chetti666.github.io/web/images/grcontrol/productos/01-CONECTOR-TIPO-L-TECNOPOLIMERO.png',
        description: 'Conector en ángulo L fabricado en tecnopolímero de alta resistencia, ideal para conexiones neumáticas.',
        features: ['Alta Resistencia', 'Fácil Instalación', 'Ligero'],
        specifications: {
          'Material': 'Tecnopolímero',
          'Presión máxima': '10 bar',
          'Temperatura': '-20°C a +60°C',
          'Conexión': 'Push-in'
        }
      },
      {
        id: 3,
        name: 'FRL Syntesi',
        category: 'FRL',
        image: 'https://chetti666.github.io/web/images/grcontrol/productos/01-FRL-SYNTESI.png',
        description: 'Unidad de mantenimiento FRL (Filtro, Regulador, Lubricador) serie Syntesi para sistemas neumáticos.',
        features: ['Filtración Eficiente', 'Regulación Precisa', 'Lubricación Controlada'],
        specifications: {
          'Filtración': '5μm',
          'Presión entrada': '1-12 bar',
          'Capacidad vaso': '150cc',
          'Drenaje': 'Semiautomático'
        }
      },
      {
        id: 4,
        name: 'Válvula Manual de Palanca Serie 70',
        category: 'Válvulas',
        image: 'https://chetti666.github.io/web/images/grcontrol/productos/VALVULA-MANUAL-DE-PALANCA-SERIE-70.png',
        description: 'Válvula de control manual con palanca, Serie 70, para control preciso de flujo en sistemas neumáticos.',
        features: ['Control Manual', 'Alta Precisión', 'Diseño Robusto'],
        specifications: {
          'Tipo': '5/2 vías',
          'Accionamiento': 'Palanca manual',
          'Presión': '2-10 bar',
          'Material cuerpo': 'Aluminio'
        }
      },
      {
        id: 5,
        name: 'Emporia CP',
        category: 'Control',
        image: 'https://chetti666.github.io/web/images/grcontrol/productos/EmporiaCP.webp',
        description: 'Sistema de control y monitoreo avanzado para aplicaciones industriales.',
        features: ['Control Avanzado', 'Monitoreo en Tiempo Real', 'Interfaz Intuitiva'],
        specifications: {
          'Procesador': 'ARM Cortex',
          'Memoria': '512MB RAM',
          'Conectividad': 'Ethernet/RS485',
          'Protección': 'IP65'
        }
      }
    ]
  }),
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(this.search.toLowerCase()) ||
                            product.description.toLowerCase().includes(this.search.toLowerCase());
        const matchesCategory = this.selectedCategory === 'Todos' || product.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });
    }
  },
  methods: {
    showProductDetails(product) {
      this.selectedProduct = product;
      this.dialog = true;
    },
    downloadDatasheet(product) {
      // Implementar la descarga de la ficha técnica
      console.log(`Descargando ficha técnica de ${product.name}`);
    }
  }
}
</script>

<style scoped>
.productos-container {
  max-width: 1400px;
}

.product-card {
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
}

.product-card .v-img {
  transition: transform 0.3s;
}

.product-card:hover .v-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.product-card:hover .image-overlay {
  opacity: 1;
}

.v-card-text {
  display: flex;
  flex-direction: column;
  -webkit-line-clamp: 3;
  -moz-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em;
}

.v-btn-toggle {
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.v-btn-toggle .v-btn {
  flex: 1;
}

.product-dialog .v-card {
  overflow: hidden;
}

@media (max-width: 600px) {
  .productos-container {
    padding: 16px;
  }
}
</style>
