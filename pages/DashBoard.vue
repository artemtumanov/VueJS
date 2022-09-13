<template>
    <div style="width: 100%">
        <div class="header">My personal costs = {{ totalCost }}</div>
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
        }
    },
    created() {
        this.fetchCategoryData();
        this.fetchData();
    }
}

</script>

<style lang="scss" scoped>

</style>