<template>
  <div class="TeamBox">
    <v-card v-for="box in team[0].forwardBox" :key="box.id" class="forwardBox"
      max-width="250" width="250px"
      @click="ForwardFieldF(box.id); getPlayer(box.id)"
    > <!-- When i click on the Function Forward i also pass the id of the position of the card!-->
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">Club</v-list-item-title>
          <v-list-item-subtitle>Name</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img class="ma-12" height="80"></v-img>

      <v-card-text align="center">Skill</v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
 name: "myTest",
 data(){
   return{
     team:[
       {forwardBox:[ {id:1} , {id:2}] },
     ]
   }
 },
 methods:{
   ...mapActions({
      GoalKeeperF:'getPlayersGoalKepper',
      BackFieldF:'getPlayersBackField',
      MiddleFieldF:'getPlayersMidField',
      ForwardFieldF:'getPlayersFrontField'
    }),
   getPlayer(id){
     console.log(id)
   }
  
 },
 computed:{
   ...mapGetters({
      GoalKeeperObj:'getGoalKeeper',
      BackFieldObj:'getBackField',
      MiddleFieldObj:'getMiddleField',
      ForwardFieldObj:'getForwardField'
    })
 }
}
</script>

<style lang="scss" scoped>
 .TeamBox{
   display: flex;
   justify-content: center;
   align-items: center;
   .forwardBox{
     margin-left: 5px;
   }
 }
</style>