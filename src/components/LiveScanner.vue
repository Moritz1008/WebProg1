<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded()"></StreamBarcodeReader>
  <LiveData />
</template>

<script>

import { StreamBarcodeReader } from "vue-barcode-reader";
import LiveData from "./LiveData.vue";
import {useEANstore} from "../stores/EANs";

export default {
  name: "LiveScanner",

  components: {
    LiveData,
    StreamBarcodeReader,
  },
  data() {
    return{

    }
  },
  setup() {
    const path = useEANstore()

    return { path }
  },
  methods: {
    onDecode(text) {
      console.log(text);
      if (text == undefined){
        console.log("ist Scheiße")
      }
      useEANstore().setCurrEAN(text)
    },
    onLoaded() {
      console.log("geladen")
    },
  }
}
</script>

<style scoped>

template{
  margin: 10%;
}

</style>