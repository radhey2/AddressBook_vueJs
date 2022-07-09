<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.jpeg"
          transition="scale-transition"
          width="40"
        />
  <h1>ADDRESSBOOK</h1>
          </div> 
          <router-link to="/Login">
          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
          </router-link>
    </v-app-bar>
  </template>

   <script>

export default {
    name: "header",
           
};
  </script>