<template>
    <div class="add">
        <div class="add__button" @click="showForm">ADD NEW COST</div>
        <div class="add__inputs" v-show="isShow">
            <div class="add__inputs-wrapper">
                <input class="add__input" placeholder="Payment date" v-model="date" />
                <select class="add__input" v-model="category">
                    <option v-for="category of categoryList" :key="category">
                        {{ category }}
                    </option>
                </select>
                <input class="add__input" placeholder="Payment amount" v-model="value" />
            </div>

            <button class="add__input-btn" @click="addPayment">ADD</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            category: '',
            date: '',
            id: '',
            isShow: false
        }
    },
    props: {
        categoryList: {
            type: Array,
            default: () => []
        },
        paymentsList: {
            type: Array,
            default: () => ([])
        }
    },
    methods: {
        addPayment() {
            let { value, category, date } = this;

            let data = {
                value,
                category,
                date: date || this.currentDate,
                id: this.paymentsList.length + 1
            }

            this.$emit('add-payment', data);
        },
        showForm() {
            if (this.isShow === false) {
                this.isShow = true
            } else {
                this.isShow = false
            }
        }
    },
    computed: {
        currentDate() {
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();

            return `${day}.${month}.${year}`
        }
    },

}
</script>

<style lang="scss" scoped>
.add {
    width: 100%;

    &__button {
        margin: 0 auto;
        width: 200px;
        height: 40px;
        background-color: rgb(27, 135, 74);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        margin-bottom: 20px;

        &::after {
            content: '+';
            width: 15px;
            height: 22px;
            position: absolute;
            right: 10px;
            font-size: 20px;
        }
    }

    &__inputs-wrapper {
        display: flex;
        justify-content: space-around;
    }

    &__input {
        height: 40px;
        padding: 0 10px;
        font-size: 15px;
    }

    &__input-btn {
        margin: 20px auto;
        display: block;
        width: 200px;
        height: 40px;
        background-color: rgb(27, 135, 74);
        color: #fff;
        border: none;
        top: 60px;
        left: 200px;
        cursor: pointer;
        font-size: 20px;
        border-radius: 5px;

        &::after {
            content: '+';
            width: 15px;
            height: 22px;
            position: absolute;
            right: 45%;
            font-size: 20px;
        }
    }
}
</style>