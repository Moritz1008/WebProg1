<template>
  <p>hallo</p>
  <StreamBarcodeReader @decode="onDecode()" @loaded="onLoaded()"></StreamBarcodeReader>
  <h2>{{Text}}</h2>
</template>

<script>

import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  name: "LiveScanner",

  components: {
    StreamBarcodeReader
  },

  data() {
    return{
      Text: "noch nichts"
    }
  },

  methods: {
    onDecode(text) {
      this.Text = text
    },
    onLoaded() {
      console.log("Ich mag Kekse und keine Mediendesigner!!!!!!!")
    }
  }
}
</script>

<style scoped>

</style>