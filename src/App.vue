<template>
  <h1>Barcode-Scanner</h1><br>
  <statusComponent :status="isRecognised"></statusComponent>
  <div :style="{'background-color': color}">
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded" style="margin: 10px"></StreamBarcodeReader>
  </div>  
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
        isRecognised: false,
        color: 'crimson'
      }
    },
    methods: {
      onDecode(num) {
        console.log('num:' + num)
        this.isRecognised = true
        this.color = 'seagreen'
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