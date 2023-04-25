<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";


  export default {
    components: { StreamBarcodeReader },
    props: ['delay'],
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
</style>