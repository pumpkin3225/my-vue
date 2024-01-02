<script>
export default {
    props: {
        numA: {
            type: Number,
        },
        numB: {
            type: Number,
        },
        calcType: {
            type: Array,
            default: ''
        },
    },
    data() {
        return {
            type: this.calcType ?? [],
            numberA:this.numA ?? 0,
            numberB:this.numB ?? 0,
        }
    },
};
</script>
<template>
    <section id="myBtn">
        {{ numberA }} {{ numberB }}
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