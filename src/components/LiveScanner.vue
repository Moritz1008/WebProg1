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
      Text: "",
      Counter: 0,
    }
  },

  methods: {
    onDecode(text) {
      console.log(text);
      if (text == undefined){
        this.Text="ist leider undefined mal wieder";
      }else {
        this.Text = text;
      }
      this.Counter++;
    },
    onLoaded() {
      console.log("Ich mag Kekse und keine Mediendesigner!!!!!!!")
    },
    /*onDecode(a, b, c) {
      console.log(a, b, c);
      this.text = a;
      if (this.id) clearTimeout(this.id);
      this.id = setTimeout(() => {
        if (this.text === a) {
          this.text = "";
        }
      }, 5000);
    },*/
  }
}
</script>

<style scoped>

</style>