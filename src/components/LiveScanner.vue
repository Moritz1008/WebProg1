<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded()"></StreamBarcodeReader>
  <div>
    <span style="color: black" id="Rec">Recognised</span>
  </div>
  <div>
    <p>{{ StoreElement.EAN }}</p>
  </div>
  <div>
    <p>{{ StoreElement.Name }}</p>
  </div>
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

    let StoreShow = useEANstore().getStoreShow
    let StoreEAN = useEANstore().getStoreEAN
    let StoreElement = useEANstore().compareEAN()

    return { path, StoreShow, StoreEAN, StoreElement }
  },
  methods: {
    onDecode(text) {
      console.log(text);
      if (text == undefined){
        console.log("ist Scheiße")
      }
      useEANstore().setCurrEAN(text)
      useEANstore().setShow(1)
      this.StoreElement = useEANstore().compareEAN()
      this.StoreElement = JSON.parse(JSON.stringify(this.StoreElement));
      console.log(this.StoreElement)
      this.changeColor()
    },
    onLoaded() {
      console.log("geladen")
    },
    changeColor() {
      if (this.StoreElement!=0){
        document.getElementById('Rec').style.color = "green";
      } else {
        document.getElementById('Rec').style.color = "red";
      }
    }
  }
}
</script>

<style scoped>

template{
  margin: 10%;
}

</style>