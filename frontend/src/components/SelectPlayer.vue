<template>
  <div>
    <div id="SelectPlayerBox">
      <v-card
        max-width="310"
        class="mx-auto SelectPlayerCard"  v-for="Player in SelectedInfo[1]" :key="Player.FirstName"
        @click="SelectThisPlayer(Player, SelectedInfo[2])"
       > <!-- One Clicked the Selected player we creat a function that is going to pass player to the Position-->
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
import {mapGetters, mapActions} from 'vuex'
export default {
  name:"selectPlayer",
  props:{
    SelectedInfo:{
      type:Array
    }
  },
  data(){
    return{
      team:[
       {frontField:[ {id:1} , {id:2}] },
     ]
    }
  },
  computed:{
    ...mapGetters({
      GoalKeeperObj:'getGoalKeeper',
      BackFieldObj:'getBackField',
      MiddleFieldObj:'getMiddleField',
      ForwardFieldObj:'getForwardField'
    })
  },
  methods:{
    ...mapActions({
      GoalKeeperF:'getPlayersGoalKepper',
      BackFieldF:'getPlayersBackField',
      MiddleFieldF:'getPlayersMidField',
      ForwardFieldF:'getPlayersFrontField'
    }),
    SelectThisPlayer(playerInfo, id){//you can also do all this function inside vuex
      this.$emit('InfoSelectedPlayer', [playerInfo, id])
      if(playerInfo[0] = "frontField"){ // check the Field of the players 
      // this.$store.state.team
       this.team[0].frontField.forEach(element => {  //
         if(element.id == id){ //check if the id of the field of players match the id sended to the random box array
           element.player = playerInfo
           console.log(this.team)
           console.log(`Gratz you have added a player to the ID ${element.id}`)
          // this.$store.commit('configureTeam', playerInfo)
         }else{
           console.log(this.team)
           console.log("notTrue")
         }
       }); 
      }
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
    // position: absolute;
    z-index: 1;
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