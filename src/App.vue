<template>
  <h1>Barcode-Scanner</h1><br>
  <statusComponent></statusComponent>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
  <RouterView />
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import { StreamBarcodeReader } from "vue-barcode-reader";
  import statusComponent from './components/statusComponent.vue'

  export default {
    name: 'App',
    components: { StreamBarcodeReader, statusComponent },
    data() {
      return {
        //data here
        isRecognised: true
      }
    },
    methods: {
      //methods here
      onDecode(num) {
        console.log('num:' + num)
      },
      onLoaded() {
        console.log('loaded')
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: aquamarine;
  }

</style>