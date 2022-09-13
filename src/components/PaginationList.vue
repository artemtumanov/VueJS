<template>
    <div>
        <div class="paginate__wrapper">
            <div class="paginate__prevNextBtn" @click=" onClick(cur - 1)">Prev</div>
            <div class="paginate__numbers" v-bind:class="{active: cur === i}" @click="onClick(i)" v-for="i in amount"
                :key="i">{{ i }} </div>
            <div class="paginate__prevNextBtn" @click=" onClick(cur + 1)">Next</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        length: Number,
        n: Number,
        cur: Number
    },
    methods: {
        onClick(p) {
            if (p < 1 || p > this.amount) {
                return
            }

            this.$emit('paginate', p)
        }
    },
    computed: {
        amount() {
            return Math.ceil(this.length / this.n)
        }
    }
}
</script>

<style lang="scss" scoped>
.paginate {
    &__wrapper {
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        width: 50%;
    }

    &__prevNextBtn {
        width: 50px;
        height: 30px;
        cursor: pointer;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        &:hover {
            background-color: rgba(27, 135, 74, 0.8);
            color: #fff;
            transition: all 0.4s;
        }
    }

    &__numbers {
        cursor: pointer;
        width: 18px;
        height: 28px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        &:hover {
            background-color: rgba(27, 135, 74, 0.8);
            color: #fff;
            transition: all 0.4s;
        }
    }
}

.active {
    background-color: rgba(27, 135, 74, 0.8);
    color: #fff;
}
</style>