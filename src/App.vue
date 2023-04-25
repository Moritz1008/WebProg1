<template>
  <h1>Barcode Scanner</h1>
  <LiveScanner></LiveScanner>
</template>

<script>
import LiveScanner from './components/LiveScanner.vue'

export default {
  name: 'App',
  components: { LiveScanner },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
