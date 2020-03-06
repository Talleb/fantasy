<template>
  <v-card>
    <!-- <button @click="getPlayers">Check players</button> -->
    <v-card-title>
      Player Information
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        playersInfo:null,
        search: '',
        headers: [
          { text: 'Number', value: 'Number' },
          {
            text: ' Players Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Age', value: 'Age' },
          { text: 'Team', value: 'Team' },
          { text: 'Nationality', value: 'Nationality' },
          { text: 'Position', value: 'Position' },
          { text: 'Skills', value: 'Skills' }
        ],
        desserts: [],
      }
    },
    async created(){ 
        let data = await fetch('http://localhost:3000/Jugadores')
        let players = await data.json()
        this.playersInfo = players //Getting info of all players
        console.log(this.playersInfo)
        this.playersInfo.forEach(player => {
          let playerInformation = {
            name: `${player.FirstName} ${player.LastName == undefined ? "" : player.LastName}`,
            Age: player.Age,
            Nationality: player.Nationality,
            Number: player.Number,
            Position: player.Position,
            Skills:player.Skills,
            Team:player.Team
          }
          this.desserts.push(playerInformation)
          // console.log(player)
        });
    }
  }
</script>

<style lang="scss" scoped>

</style>