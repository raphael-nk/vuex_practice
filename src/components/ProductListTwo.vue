<template>
    <div class="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in saleProduct" :key="product"> 
                <span class="name"> {{ product.name }} </span>
                <span class="price"> ${{ product.price }} </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        }, 
        saleProduct() {
            return this.$store.getters.saleProduct
        }
    }
}
</script>