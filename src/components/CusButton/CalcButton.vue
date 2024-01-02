<script>
export default {
  props:{
    calcType:{
      type:Array,
      default:''
    },
  },
  data() {
    return {
      type: this.calcType ?? [],
    }
  },
};
</script>
<template>
     <section id="myBtn">
    <button v-for="item in type" :key="item.id" class="btn" type="button">
      {{ item }}
    </button>
  </section>
</template>
<style scoped>
#myBtn {
  .btn {
    @apply border-[black] border-[1px] px-[15px] py-[10px];
  }
}
</style>