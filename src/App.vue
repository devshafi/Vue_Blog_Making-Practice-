<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <show-blog></show-blog>
    
  </div>
</template>

<script>

// importing components
import AddBlog from './components/AddBlog.vue';
import ShowBlog from './components/ShowBlog.vue';

export default {

  components:{
    'add-blog': AddBlog,
    'show-blog': ShowBlog
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
