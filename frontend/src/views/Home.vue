<template>
  <div class="home">
    <p 
    v-for="player in players"  
    :key="player"> 
    {{player.FirstName}}</p>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  data() {
    return{
    players: []
    }
  },
  created() {
    setTimeout(() => {
      fetch("http://localhost:3000/")
        .then(response => response.json())
        .then(result => {
          this.players = result;
          console.log(result);
        });
    }, 1000);
  }
};
</script>