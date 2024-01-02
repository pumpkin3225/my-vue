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
            numberA: this.numA ?? 0,
            numberB: this.numB ?? 0,
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