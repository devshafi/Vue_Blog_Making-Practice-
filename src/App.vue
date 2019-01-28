<template>
  <div>
    <add-blog></add-blog>
    
  </div>
</template>

<script>

// importing components
import AddBlog from './components/AddBlog.vue';

export default {

  components:{
    'add-blog': AddBlog
  },
  data(){
    return{

    }
  },
  methods:{

  }
  
}


</script>

<style scoped>

body{
  margin:0;
  font-family: 'Nunito Semibold'
}

</style>
