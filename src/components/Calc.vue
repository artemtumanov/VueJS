<template>
    <div>
        <div class="wrapper">
            <div class="wrapper__calc">
                <div class="error" v-if="error"> {{  error  }} </div>
                <div class="display">
                    <div class="display__wrap">
                        <input class="display__input" v-model="operand1" placeholder="0">
                        <input class="display__input" v-model="operand2" placeholder="0">
                    </div>
                    <div class="display__result">{{  result  }}</div>
                </div>
                <div class="keyboard">
                    <button class="keyboard__btn" v-for="operation of operations" @click="calculate(operation)"
                        :key="operation">
                        {{  operation  }}
                    </button>
                </div>
                <!-- <div class="logs"> {{  logs  }} </div> -->
            </div>
            <div class="wrapper__checkbox">
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">Отобразить экранную клавиатуру {{  showKeyboard()  }}</label>
            </div>
            <div class="wrapper__keyboard" v-bind:class="{ active: isActive }">
                <div class="wrapper__numbers">
                    <button v-on:click="input(num)" class="keyboard__btn" v-for="num of numbers" :key="num"> {{  num  }}
                    </button>
                    <button @click="delOperand" class="keyboard__btn delete"> {{  del  }} </button>
                    <button @click="resetNum" class="keyboard__btn reset"> {{  reset  }} </button>
                </div>
                <div class="wrapper__radio">
                    <input type="radio" id="op1" value="Операнд1" v-model="picked">
                    <label for="op1">Операнд1</label>
                    <input type="radio" id="op2" value="Операнд2" v-model="picked">
                    <label for="op2">Операнд2</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'my-calculator',
    data: () => ({
        operand1: '',
        operand2: '',
        result: 0,
        error: '',
        operations: ['+', '-', '/', '*', '**', 'Int'],
        logs: {},
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        picked: 'Операнд1',
        checked: false,
        isActive: false,
        del: 'Del',
        reset: 'Reset'
    }),
    methods: {
        input(char) {
            this.picked === 'Операнд1' ? this.operand1 += char : this.operand2 += char
        },
        delOperand() {
            if (this.picked === 'Операнд1') {
                this.operand1 = this.operand1.substring(0, this.operand1.length - 1)
            } else if (this.picked === 'Операнд2') {
                this.operand2 = this.operand2.substring(0, this.operand2.length - 1)
            }
        },
        showKeyboard() {
            this.checked === true ? this.isActive = true : this.isActive = false
        },
        resetNum() {
            this.operand1 = '';
            this.operand2 = '';
            this.result = 0;
        },
        calculate(operation) {
            this.error = "";
            switch (operation) {
                case '+': this.sum(); break
                case '-': this.sub(); break
                case '*': this.mult(); break
                case '/': this.div(); break
                case '**': this.expon(); break
                case 'Int': this.intDiv(); break
            }

            const { operand1, operand2, result } = this
            console.log(Date.now())
            this.$set(this.logs, Date.now(), `${operand1} ${operation} ${operand2} = ${result}`)
        },
        sum() {
            const { operand1, operand2 } = this
            this.result = +operand1 + +operand2;
        },
        sub() {
            const { operand1, operand2 } = this
            this.result = operand1 - operand2;
        },
        mult() {
            const { operand1, operand2 } = this
            this.result = operand1 * operand2;
        },
        div() {
            const { operand1, operand2 } = this
            this.result = operand1 / operand2;

            if (operand2 === 0) {
                this.error = "На ноль делить нельзя"
            }
        },
        expon() {
            const { operand1, operand2 } = this
            this.result = operand1 ** operand2;
        },
        intDiv() {
            const { operand1, operand2 } = this
            this.result = Math.floor(operand1 / operand2);
        },
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

.wrapper {
    &__keyboard {
        display: none;
        margin: 0 auto;
    }

    &__calc {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 500px;
        min-height: 200px;
        border: 2px solid black;
    }

    &__checkbox {
        margin-top: 20px;
        text-align: center;
        font-size: 20px;
    }

    &__numbers {
        display: flex;
        justify-content: space-between;
        width: 299px;
        flex-wrap: wrap;
        margin: 0 auto;
        margin-top: 20px;
    }

    &__radio {
        text-align: center;
        margin-top: 20px;
        font-size: 20px;
    }
}

.display {
    width: 91%;

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
        line-height: 25px;
    }
}

.keyboard {
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    &__btn {
        margin-top: 10px;
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


.active {
    display: block;
}

.error {
    font-size: 20px;
}

.delete {
    font-size: 15px;
    margin-top: 10px;
}

.reset {
    flex-grow: 0.94;
    font-size: 15px;
    margin-top: 10px;
}
</style>