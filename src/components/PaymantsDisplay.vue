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
            <div v-for="(payment, index) in paymentsList" :key="index">
                <div class="list__wrapper">
                    <div class="list__number">{{ index + 1 }}</div>
                    <div class="list__date">{{ payment.date }}</div>
                    <div class="list__category">{{ payment.category }}</div>
                    <div class="list__value">{{ payment.value }}</div>
                </div>
                <hr>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        paymentsList: {
            type: Array,
            default: () => ([])
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    width: 100%;
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