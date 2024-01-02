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
        numBtn: {
            type: Array,
            default: ''
        },
    },
    emit:['finalMath'],
    emit:['eNum'],
    data() {
        return {
            type: this.calcType ?? [],
            numberA: this.numA ?? 0,
            numberB: this.numB ?? 0,
            numBtn:this.numBtn ?? [], 
            num:[],     
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
             this.$emit('finalMath',this.result);
        },
        addArr(str){
           num = num.push('str');
           this.$emit('eNum',num)
        }
    },
};
</script>
<template>
    <section id="myBtn">
        {{ num }}
        <div class=" flex gap-3">
            <button v-for="item in type" :key="item.id" class="btn" type="button" @click="clac(item)">{{ item }}</button>
        </div>
        <br>
        <div class="grid gap-4 grid-cols-3" >
            <button v-for="item in numBtn" :key="item.id" class="btn" type="button" @click="addArr(item)">{{ item }}</button>
        </div>
    </section>
</template>
<style scoped>
#myBtn {
    .btn {
        @apply border-[black] border-[1px] px-[15px] py-[10px];
    }
}
</style>