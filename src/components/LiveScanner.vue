<template>
  <StreamBarcodeReader @decode="onDecode()" @loaded="onLoaded()"></StreamBarcodeReader>
  <h2>{{Text}}</h2>
  <h3>So viel wurde schon gescannt: {{Counter}}</h3>
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
      Text: 0,
      Counter: 0,
    }
  },

  methods: {
    onDecode(text) {
      console.log(text);
      this.Text = text;
      this.Counter++;
    },
    onLoaded() {
      console.log("Ich mag Kekse und keine Mediendesigner!!!!!!!")
    }
  }
}
</script>

<style scoped>

</style>