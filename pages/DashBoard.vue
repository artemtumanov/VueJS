<template>
    <div style="width: 100%">
        <div class="header">My personal costs = {{ totalCost }}</div>
        <div class="quick-payment">
            <div class="quick-payment__btn" @click="quickPayment('Food', 200)">ADD: Food - 200</div>
            <div class="quick-payment__btn" @click="quickPayment('Transport', 50)">ADD: Transport - 50</div>
            <div class="quick-payment__btn" @click="quickPayment('Entertainment', 2000)">ADD: Entertainment - 2000</div>
        </div>

        <AddPaymantForm @add-payment="addPayment" :categoryList="categoryList" :paymentsList='paymentsList'>
        </AddPaymantForm>
        <PaymantsDisplay :paymentsList='paymentsList'>
        </PaymantsDisplay>
    </div>
</template>

<script>
import PaymantsDisplay from '../src/components/PaymantsDisplay.vue';
import AddPaymantForm from '../src/components/AddPaymantForm.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    components: {
        PaymantsDisplay,
        AddPaymantForm,
    },
    computed: {
        ...mapGetters(['paymentsList', 'categoryList', 'totalCost'])
    },
    methods: {
        ...mapActions(['fetchData', 'fetchCategoryData']),
        ...mapMutations(['ADD_PAYMENT_DATA']),
        addPayment(data) {
            this.ADD_PAYMENT_DATA(data)
        },
        quickPayment(category, value) {
            this.$router.push({ path: `/add/payment/${category}?value=${value}` }).catch(err => { err });
        },
    },
    created() {
        this.fetchCategoryData();
        this.fetchData();
    }
}

</script>

<style lang="scss" scoped>
.quick-payment {
    display: flex;
    margin: 20px 0;
    justify-content: space-between;
    align-items: center;

    &__btn {
        cursor: pointer;
        width: 250px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        font-size: 15px;
        border-radius: 5px;
        transition: all 0.4s;

        &:hover {
            background-color: rgb(48, 160, 97);
            color: #fff;
        }
    }
}
</style>