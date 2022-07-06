<template>
<div>
  <hello-world />
  <form></form>
</div>
  

</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import form from '../components/form.vue'
  import loginform from '@/components/loginform.vue'

  export default {
    name: 'Home',
    

    components: {
      HelloWorld,
      form,
      loginform
    },
  }
</script>
