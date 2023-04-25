<template>
  <div id="status" v-if="!status" :style="{'background-color': color}">
    <p>{{ statusMsg }}</p>
  </div>
  <div id="scanSuccess" v-if="status" :style="{'background-color': color}">
    <p>{{ statusMsg }}</p>
  </div>

</template>

<script>
  export default {
    name: 'statusComponent',
    data() {
      return{
        status: false,
        statusMsg: 'recognised',
        color: 'crimson'
      }
    }
  }

</script>

<style>
  #status {
    margin-top: 10%;
    border-radius: 10px;
    width: 300px;
    height: 100px;
  }
  #scanSuccess {
    margin-top: 10%;
    border-radius: 10px;
    width: 40%;
    height: 20%;
  }
  #status p {
    font-size: x-large;
    font-weight: bold;
    text-align: center;
    margin-top: 1em;
  }
</style>