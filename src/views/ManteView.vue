<template>
  <div class="mante-view-container">
    <v-data-table :headers="headers" :items="items" class="elevation-1 mante-table">
      <template v-slot:header="{ props }">
        <tr>
          <th
            v-for="header in props.header"
            :key="header.value"
            :class="['text-uppercase', header.align === 'end' ? 'text-end' : 'text-start']"
          >
            {{ header.text }}
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
  { text: "Realizado", value: "realizado" }
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
}
.mante-table {
  width: 100%;
  height: 100%;
  overflow-x: auto;
}
</style>
