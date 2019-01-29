import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.config.productionTip = false

//custom directives

// This custom directive will change blog ttile randomly
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    let color = Math.random().toString().slice(2,8);
    //console.log('color',color);
    el.style.color = "#"+color;
  }
});

// This custom directive will change theme size of the blog
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }else if(binding.value =='narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});


// Filters
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})

Vue.filter('snippet',function(value){
  return value.slice(0,100)+"...";
})


new Vue({
  render: h => h(App),
}).$mount('#app')
