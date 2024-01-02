<script>
export default {

}
</script>
<template>
   <div class="btn">
        <button type="button"><slot/></button>     
    </div>
</template>
<style>
.btn button{
    @apply border-[black] border-[1px] px-[15px] py-[10px];
} 
</style>