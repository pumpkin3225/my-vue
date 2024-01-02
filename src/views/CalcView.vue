<script>
import Mybutton from '@/components/CusButton/Mybutton.vue'
import CalcButton from '@/components/CusButton/CalcButton.vue';
export default {
    components: {
        Mybutton,
        CalcButton,
    },
    data() {
        return {
            numA: 0,
            numB: 0,
            result: 0,
            calcType: ['+', '-', '*', '/'],
            numberBtn:['0','1','2','3','4','5','6','7','8','9'],
            numVaule:'',

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
        },
        print(res) {
            this.result = res;
        },
        getNum(res){
            this.numVaule = res;
        },
    },
}
</script>

<template>
    <h1 class="hover:text-[red] " >Hello world!</h1>
    <br>
    <label class="text-[24px]">A : <input @e-num="getNum" type="number" v-model="numA" class="border-black border-[1.5px] px-1" ></label>
    <br><br>
    <label class="text-[24px]">B : <input  @e-num="getNum" type="number" v-model="numB" class="border-black border-[1.5px]  px-1" ></label>
    <br><br>
    <CalcButton :calc-type="calcType" :num-A="numA" :num-B="numB" :num-btn="numberBtn" @final-math="print" />
    <br><hr class="border-black"><br>
    <div class="flex gap-3">
        <Mybutton @click=" clac('+')">+</Mybutton>
        <Mybutton @click=" clac('-')">-</Mybutton>
        <Mybutton @click=" clac('x')">x</Mybutton>
        <Mybutton @click=" clac('/')">/</Mybutton>
    </div>
    <br>
    <div class="text-[32px]">{{ result }}</div>
</template>
<style scoped>
h1 {
    @apply text-3xl font-bold underline;
}

label input {
    @apply bg-[grey] border-double;
}
</style>