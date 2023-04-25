<template>
  <div id="statusRed" v-if="!status" :style="{'background-color': color}">
    <p>{{ statusMsg }}</p>
  </div>
  <div id="statusGreen" v-if="status" :style="{'background-color': color}">
    <p>{{ statusMsg }}</p>
  </div>

</template>

<script>
  export default {
    name: 'statusComponent',
    props: ['status'],
    data() {
      return{
        //statusMsg: 'not recognised',
      }
    },
    computed: {
      color() {
        return this.status ? 
          'seagreen' : 'crimson'
      },
      statusMsg() {
        return this.status ?
          'recognised' : 'not recognised'
      }
    }
  }

</script>

<style>
  #statusRed {
    margin-top: 10%;
    border-radius: 10px;
    width: 300px;
    height: 100px;
  }
  #statusGreen {
    margin-top: 10%;
    border-radius: 10px;
    width: 300px;
    height: 100px;
  }
  #statusRed p {
    font-size: x-large;
    font-weight: bold;
    text-align: center;
    margin-top: 1em;
  }
  #statusGreen p {
    font-size: x-large;
    font-weight: bold;
    text-align: center;
    margin-top: 1em;
  }
</style>