<template>
<dev>
  <hello-world />
  <form></form>
</dev>
  

</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import form from '../components/form.vue'

  export default {
    name: 'Home',
    

    components: {
      HelloWorld,
      form
    },
  }
</script>
