<template>
    <div>
        <div class="wrapper">
            <div class="display">
                <div class="display__wrap">
                    <input class="display__input" v-model="operand1">
                    <input class="display__input" v-model="operand2">
                </div>
                <div class="display__result">{{ result }}</div>
            </div>
            <div class="keyboard">
                <button class="keyboard__btn" @click="sum">+</button>
                <button class="keyboard__btn" @click="sub">-</button>
                <button class="keyboard__btn" @click="mult">*</button>
                <button class="keyboard__btn" @click="div">/</button>
                <button class="keyboard__btn" @click="expon">**</button>
                <button class="keyboard__btn" @click="intDiv">%</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-calculator',
    data: () => ({
        operand1: 0,
        operand2: 0,
        result: 0
    }),
    methods: {
        sum() {
            this.result = this.operand1 + this.operand2;
        },
        sub() {
            this.result = this.operand1 - this.operand2;
        },
        mult() {
            this.result = this.operand1 * this.operand2;
        },
        div() {
            this.result = this.operand1 / this.operand2;
        },
        expon() {
            this.result = this.operand1 ** this.operand2;
        },
        intDiv() {
            this.result = this.operand1 % this.operand2;
        },
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

.wrapper {
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 500px;
    height: 500px;
    border: 2px solid black;
}

.display {
    width: 90%;

    &__wrap {
        display: flex;
        justify-content: space-around;
    }

    &__input {
        height: 40px;
        border: 1px solid black;
        padding: 5px 15px;
        font-size: 20px;
        width: 150px;
        border-radius: 10px;
    }

    &__result {
        margin: 20px auto 0;
        height: 40px;
        border: 1px solid black;
        padding: 5px 15px;
        font-size: 20px;
        border-radius: 10px;
    }
}

.keyboard {
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    &__btn {
        width: 50px;
        height: 50px;
        font-size: 30px;
        background: linear-gradient(to bottom, #fff 0, #e6e6e6 100%);
        border-color: #c0c0c0 #7491a5 #7491a5 #c0c0c0;
        border-image: none;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        color: #414f5b;
        font-weight: bold;
    }
}
</style>