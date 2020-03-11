<template>
  <div>
    <div class="ListofPlayerSelected">
      <ul>
        <li>Player One</li>
      </ul>
    </div>
    <v-card-actions @click="getPlayers(index)">
      <v-btn color="green">Add player to position</v-btn>
    </v-card-actions>
    <div id="SelectPlayerBox">
      <v-card
        max-width="310"
        class="mx-auto SelectPlayerCard"  v-for="Player in backField" :key="Player.FirstName"
      >
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline TitleFont">{{Player.Team}}</v-list-item-title>
            <v-list-item-subtitle>{{Player.FirstName}} {{Player.LastName}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img class="ma-12"  height="80"></v-img>

        <v-card-text align="center">{{Player.Skills}}</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name:"selectPlayer",
  data(){
    return{
      GoalKepper:[], //Players Positions, this is going to send as a PROP to the SelectPlayer Component
      backField:[], //This is going to pass to the children component
      midField:[],
      frontField:[]
    }
  },
  methods:{
    async getPlayers(index)(){ // this is going to be in the parent Component and each field position is going to have a unique fetch
      let getData = await fetch('http://localhost:3000/Goalkeeper')
      let data = await getData.json()
      console.log(data)
      for(let i = 0; i < 4; i++){
        let RP = Math.floor(Math.random() * 71);
        this.GoalKepper.push(data[RP]);
      }  
      console.log(this.GoalKepper)
    },
    async getPlayers(index){ // this is going to be in the parent Component and each field position is going to have a unique fetch
      let getData = await fetch(`'http://localhost:3000/${index}'`)
      let data = await getData.json()
      console.log(data)
      for(let i = 0; i < 4; i++){
        let RP = Math.floor(Math.random() * 71);
        this.backField.push(data[RP]);
      }  
      console.log(this.backField)
    },
    async getPlayersMidField(){ // this is going to be in the parent Component and each field position is going to have a unique fetch
      let getData = await fetch('http://localhost:3000/MidField')
      let data = await getData.json()
      console.log(data)
      for(let i = 0; i < 4; i++){
        let RP = Math.floor(Math.random() * 71);
        this.midField.push(data[RP]);
      }  
      console.log(this.midField)
    },
    async getPlayersFrontField(){ // this is going to be in the parent Component and each field position is going to have a unique fetch
      let getData = await fetch('http://localhost:3000/FrontField')
      let data = await getData.json()
      console.log(data)
      for(let i = 0; i < 4; i++){
        let RP = Math.floor(Math.random() * 71);
        this.frontField.push(data[RP]);
      }  
      console.log(this.frontField)
    }
  }
}
</script>

<style lang="scss" scoped>
  #SelectPlayerBox{
    display:flex;
    margin: 10px auto;
    width: 950px;
    height:320px;
    border:3px solid black;
    .SelectPlayerCard{
      height: 300px;
      margin-top: 8px;
      width: 220px;
    }
    .TitleFont{
      font-size: 1rem !important;
    }
  }

</style>