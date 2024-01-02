<script>
import Mybutton from '@/components/CusButton/Mybutton.vue'
import CalcButton from '@/components/CusButton/CalcButton.vue';
export default {
    components:{
        Mybutton,
        CalcButton,
    },
    data() {
        return {
            numA: 0,
            numB: 0,
            result: 0,
            calcType: ['+', '-', '*', '/'],
        }
    },
    methods: {
        clac(input) {
            if (this.numA.toString().trim() === '' || this.numB.toString().trim() === '') return;
            switch (input) {
                case ('+'):
                    this.result = this.numA + this.numB;
                    break;
                case ('-'):
                    this.result = this.numA - this.numB;
                    break;
                case ('x'):
                    this.result = this.numA * this.numB;
                    break;
                case ('/'):
                    this.result = this.numA / this.numB;
                    break;
                default:
                    break;
            }
        }
    },
}
</script>

<template>
    <h1>Hello world!</h1>
    <label>A <input type="number" v-model="numA"></label>
    <label>B <input type="number" v-model="numB"></label>
    <CalcButton :calc-type="calcType"/>
    <p>-----------------------------------------</p>
    <p>-----------------------------------------</p>
    <Mybutton @click=" clac('+')">+</Mybutton>
    <Mybutton>-</Mybutton>
    <Mybutton>x</Mybutton>
    <Mybutton>/</Mybutton>
    <div>{{ result }}</div>
</template>
<style scoped>
h1 {
    @apply text-3xl font-bold underline;
}
label input {
    @apply bg-[grey] border-double;
}
</style>