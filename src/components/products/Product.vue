<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        {{ product.name }} - Rp. {{ product.price }}
      </li>
    </ul>

    <input type="text" v-model="payload" placeholder="Payload">
    <button type="submit" @click.prevent="onSales(payload)">Sale On</button>
  </div> 
</template>

<script>
  export default {
    data() {
      return {
        payload: null
      }
    },

    computed: {
      // products() {
      //   return this.$store.state.product.products
      // },

      saleProducts() {
        return this.$store.getters.saleProducts
      },
    },

    methods: {
      onSales(payload) {
        this.$store.dispatch('onSales', payload)
      }
    }
  }
</script>