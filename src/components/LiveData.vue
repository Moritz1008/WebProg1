<template>
  <div>
    <span style="color: red" id="Rec">Recognised</span>
  </div>
  <div>
    <p>{{ EAN }}</p>
  </div>
</template>

<script>
import {useEANstore} from "../stores/EANs";

export default {
  name: "LiveData",

  data () {
    return {
      EAN: 0
    }
  },
  setup() {
    const path = useEANstore()

    let StoreElement = path.compareEAN()
    let StoreEAN = path.getStoreEAN

    return { path, StoreElement, StoreEAN }
  },
  mounted: {
    changeColor() {
      if (this.StoreElement!=0){
        document.getElementById('Rec').style.color = "green";
      } else {
        console.log("is gagge")
        document.getElementById('Rec').style.color = "red";
      }
    }
  }
}
</script>

<style scoped>

</style>