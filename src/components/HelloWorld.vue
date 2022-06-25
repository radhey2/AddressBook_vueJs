<template>
     <body>
    <router-link to="/form"><v-btn
        class="ma-2"
        color="primary"
        dark
      >
        <v-icon justify="space-around">mdi-account-plus</v-icon>Add User</v-btn>
      </router-link> 


     <v-tabs>
    <v-tab>Full Name</v-tab>
    <v-tab>Address</v-tab>
    <v-tab>city</v-tab>
    <v-tab>State</v-tab>
    <v-tab>Zip Code</v-tab>
    <v-tab>Phone</v-tab>
    <v-tab>Action</v-tab>
  </v-tabs>


  </body>
  

</template>


<script>
  export default {
    name: 'HelloWorld',
  }
   
</script>


<style>
body {
  margin: 0;
  height: 100%;
}

.header {
  padding: 10px 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
}
.header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.logo-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
}

.addressBook-text {
  text-align: left;
  font: normal normal bold 22px/25px Montserrat;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
  color: #098df8;
  margin-left: 10px;
}

.addressBook-book {
  color: #3d4e5d;
}

* {
  box-sizing: border-box;
}
</style>