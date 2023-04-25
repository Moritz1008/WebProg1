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
    display: table;
  }
  #statusGreen {
    margin-top: 10%;
    border-radius: 10px;
    width: 300px;
    height: 100px;
    display:table;
  }
  #statusRed p {
    font-size: x-large;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
  }
  #statusGreen p {
    font-size: x-large;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
  }
</style>