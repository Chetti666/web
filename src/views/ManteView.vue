<template>
  <div class="mante-view-container">
    <v-data-table :header="header" :items="items" class="elevation-1 mante-table">
      <template v-slot:header>
        <!-- Fila de Encabezados Principales -->
        <tr>
          <th colspan="5" class="text-center text-uppercase header-principal">
            Información del Equipo
          </th>
          <th colspan="4" class="text-center text-uppercase header-principal">
            Registro de Mantenimiento
          </th>
        </tr>
        <!-- Fila de Encabezados de Columnas Individuales -->
        <tr>
          <th
            v-for="columna in header"
            :key="columna.value"
            :class="['text-uppercase', 'header-individual', columna.align === 'end' ? 'text-end' : 'text-start']"
          >
            {{ columna.text }}
          </th>
        </tr>
        
      </template>
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.equipo }}</td>
          <td>{{ item.ubicacion }}</td>
          <td>{{ item.marca }}</td>
          <td>{{ item.modelo }}</td>
          <td>{{ item.serie }}</td>
          <td>{{ item.fecha }}</td>
          <td>{{ item.tipo }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.realizado }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: [
        { text: "Equipo", value: "equipo" },
        { text: "Ubicación", value: "ubicacion" },
        { text: "Marca", value: "marca" },
        { text: "Modelo", value: "modelo" },
        { text: "Serie", value: "serie" },
        { text: "Fecha", value: "fecha" },
        { text: "Tipo", value: "tipo" },
        { text: "Descripción", value: "descripcion" },
        { text: "Realizado", value: "realizado" },
      ],
      items: [
        {
          equipo: "Equipo 1",
          ubicacion: "Planta A",
          marca: "Marca X",
          modelo: "Modelo Y",
          serie: "12345",
          fecha: "2023-10-26",
          tipo: "Preventivo",
          descripcion: "Revisión general",
          realizado: "Juan Pérez",
        },
        {
          equipo: "Equipo 2",
          ubicacion: "Planta B",
          marca: "Marca Z",
          modelo: "Modelo W",
          serie: "67890",
          fecha: "2023-11-15",
          tipo: "Correctivo",
          descripcion: "Reparación de fuga",
          realizado: "María Gómez",
        },
        // Agrega más datos aquí
      ],
    };
  },
  methods: {
    logout() {
      // Handle logout logic here
      this.$router.push({ name: "LoginView" });
    },
  },
};
</script>

<style scoped>
.mante-view-container {
  width: 100%;
  height: 100%;
  display: flex; /* Para centrar la tabla */
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  padding: 15px; /* Añadir un poco de espacio alrededor */
  box-sizing: border-box; /* Asegura que el padding no aumente el tamaño */
}

.mante-table {
  width: 100%;
  max-width: 1200px; /* Ancho máximo para la tabla */
  margin-bottom: 20px; /* Margen inferior */
  overflow-x: auto;
  border-collapse: collapse; /* Combina los bordes de las celdas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra para elevación */
  font-size: 14px; /* Ajustar el tamaño de la fuente */
}

.mante-table th,
.mante-table td {
  border: 1px solid #ddd; /* Añade bordes a las celdas */
  padding: 12px; /* Ajustar el espaciado interno */
  text-align: left; /* Alinea el texto a la izquierda */
}

.header-principal {
  background-color: #007bff; /* Color corporativo primario (Azul) */
  color: #fff; /* Texto blanco para contraste */
  font-weight: bold; /* Negritas para los encabezados principales */
}

.header-individual {
  background-color: #6c757d; /* Color corporativo secundario (Gris) */
  color: #fff; /* Texto blanco para contraste */
  font-weight: bold; /* Negritas para los encabezados individuales */
}
</style>
