<template>
  <h1>Barcode-Scanner</h1><br>
  <statusComponent :status="isRecognised"></statusComponent>
  <scanComponent @scan="onScan"></scanComponent>
  <RouterView />
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import statusComponent from './components/statusComponent.vue'
  import scanComponent from './components/scanComponent.vue'

  export default {
    name: 'App',
    components: { scanComponent, statusComponent },
    data() {
      return {
        isRecognised: false,
        color: 'crimson'
      }
    },
    methods: {
      onScan(num) {
        console.log('num:' + num)
        this.isRecognised = true
        this.color = 'seagreen'
      },
    }
  }
</script>

<style scoped>
  h1 {
    color: aquamarine;
  }

</style>