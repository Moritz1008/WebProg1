<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded()"></StreamBarcodeReader>
  <div>
    <span style="color: red" id="Rec">Recognised</span> {{Text}}
  </div>
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
      recognised: false,
    }
  },

  methods: {
    onDecode(text) {
      console.log(text);
      if (text == undefined){
        this.Text="ist leider undefined mal wieder";
      }else {
        this.Text = text;
        document.getElementById('Rec').style.color = "green";
      }
      this.Counter++;
    },
    onLoaded() {
      console.log("Ich mag Kekse und keine Mediendesigner!!!!!!!")
    },
    ChangeColor() {

    }
  }
}
</script>

<style scoped>

template{
  margin: 10%;
}

</style>