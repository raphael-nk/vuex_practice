<template>
  <div class="">
    <ProductListOne></ProductListOne>
    <ProductListTwo></ProductListTwo>
  </div>
</template>
<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';
export default {
    name: "app",
    components: { ProductListOne, ProductListTwo }, 
    data() {
        return {
            
        };
    },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
