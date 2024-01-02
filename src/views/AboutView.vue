<script>
import CalcButton from '@/components/CusButton/CalcButton.vue'
export default {
  components:{
    CalcButton
  },
  data(){
    return{
      name:['rlan','lulu','yufan','rgin'],
    }
  }
}
</script>
<template>
  <div class="about"><h1>This is an about page</h1></div>
  <div><CalcButton :calc-type="name" /></div>
</template>
<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 10vh;
    display: flex;
    align-items: center;
  }
}
</style>
