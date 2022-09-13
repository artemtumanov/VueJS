<template>
    <div style="width:100%">
        <div class="list">
            <div class="list__wrapper">
                <div class="list__number"><b>#</b></div>
                <div class="list__date"><b>Date</b></div>
                <div class="list__category"><b>Category</b></div>
                <div class="list__value"><b>Value</b></div>
            </div>
            <hr>
            <div v-for="payment in currentElements" :key="payment.id">
                <div class="list__wrapper">
                    <div class="list__number">{{ payment.id }}</div>
                    <div class="list__date">{{ payment.date }}</div>
                    <div class="list__category">{{ payment.category }}</div>
                    <div class="list__value">{{ payment.value }}</div>
                </div>
                <hr>
            </div>
        </div>
        <PaginationList :length="paymentsList.length" :n="n" :cur="page" @paginate="onPaginate">
        </PaginationList>
    </div>

</template>

<script>
import PaginationList from './PaginationList.vue';
export default {
    components: { PaginationList },
    data() {
        return {
            page: 1,
            n: 5
        }
    },
    methods: {
        onPaginate(p) {
            this.page = p
        }
    },
    props: {
        paymentsList: {
            type: Array,
            default: () => ([])
        }
    },
    computed: {
        currentElements() {
            const { n, page } = this
            return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n)
        }
    },

}
</script>

<style lang="scss" scoped>
.list {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;

    &__wrapper {
        display: flex;
        justify-content: space-around;
        width: 100%;
        font-size: 20px;
        margin-bottom: 10px;
    }

    &__number,
    &__date,
    &__category,
    &__value {
        width: 25%;
        padding-left: 60px;
    }

    hr {
        margin-bottom: 10px;
    }
}
</style>