<template>
  <v-container>
    
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    ></v-data-table>

    </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Column 1', value: 'column1' },
        { text: 'Column 2', value: 'column2' },
        { text: 'Column 3', value: 'column3' },
      ],
      items: [
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
        { column1: 'Data 4', column2: 'Data 5', column3: 'Data 6' },
      ],
    };
  },
  methods: {
    logout() {
      // Handle logout logic here
      this.$router.push({ name: 'LoginView' });
    },
  },
};
</script>

<style scoped>
/* Add any specific styles for the ManteView here */
</style>
