<template>
  <div id="scanContainer" :style="{'background-color': color}">
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded" style="margin: 10px"></StreamBarcodeReader>
  </div>  
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
    name: 'scanComponent',
    components: { StreamBarcodeReader },
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
        this.$emit('scan', num)
      },
      onLoaded() {
        console.log('loaded')
      }
    }
  }
</script>

<style>
  #scanContainer {
    border-radius: 5px;
    max-width: 80%;
  }
</style>