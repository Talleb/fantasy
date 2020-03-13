<template>
  <v-app id="DraftComponent">
      <section v-for="(position,index) in formation" :Key="position"> <h1 class="ma-12" align="center">{{index}}</h1><v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                        <template  v-for="(player, i) in position">
                      <v-card
                      v-if="(player.ID !== null)"
                        :key="player"
                        color="green lighten-5"
                        :elevation="8"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item :elavation="12">
                          <v-list-item-avatar tile ><v-img  contain class="ma-12" :src="`https://restcountries.eu/data/${player.alpha3Code}.svg`" height="80"></v-img></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">{{player.Team}}</v-list-item-title>
                            <v-list-item-subtitle>{{player.FirstName+ " "+player.LastName}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" contain :src="player.Crest" height="120"></v-img>

                        <v-card-text align="center">{{player.Skills}}</v-card-text>
                      </v-card>
                      <div class="mx-auto" v-else :key="player"> <v-dialog v-model="dialog[index]" persistent max-width="1000">
          <template v-slot:activator="{on}">
            <v-btn color="green darken-4" dark @click="getPlayers(index, i)" v-on="on">Add player to position</v-btn>
          </template>
          <v-card>
            <div class="ListofPlayerSelected">
                <p class="ma-5" align="center">Select your player</p>
            </div>
            <div id="SelectPlayerBox">
              <v-card
                max-width="310"
                class="mx-auto SelectPlayerCard"
                v-for="(Player, y) in teamPlayersCopy"
                 color="green lighten-5"
                :elevation="8"
                :key="Player.FirstName"              
                @click="chosePlayer(teamPlayersCopy, y, i)"
              >
                <v-list-item>
                  <v-list-item-avatar tile><v-img contain class="ma-12" :src="`https://restcountries.eu/data/${Player.alpha3Code}.svg`" height="80"></v-img></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline TitleFont">{{
                      Player.Team
                    }}</v-list-item-title>
                    <v-list-item-subtitle
                      >
                      {{ Player.FirstName }}
                      {{ Player.LastName }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-img class="ma-8" contain :src="Player.Crest" height="80"></v-img>

                <v-card-text align="center">{{ Player.Skills }}</v-card-text>
              </v-card>
            </div>
          </v-card>
        </v-dialog>
        </div>
                      </template>        </v-row>
                  </v-col>
                </v-row>
              </v-container></section>  
  </v-app>
</template>

<script>
export default {

  name: "DraftComponent",
  components: {
  },
    data() {
    return {
      dialog: this.$store.state.modal,
      teamPlayers: this.$store.state.players,
      indexPosition: null,
      chosenPosition: null,
      formation: this.$store.state.formation,
      teamPlayersCopy: null,
      selectedPlayer: null
    };
  },
  methods: {
    async getPlayers(index, i) {
        this.selectedPlayer = []
        this.teamPlayersCopy = this.teamPlayers.slice()
        this.indexPosition = i
        this.chosenPosition = index
      // this is going to be in the parent Component and each field position is going to have a unique fetch
      let getData = await fetch(`http://localhost:3000/${this.chosenPosition}`);
      let data = await getData.json();
      for (let i = 0; i < 4; i++) {
        let RP = Math.floor(Math.random() * 71);
        this.teamPlayersCopy.push(data[RP]);
      }
      console.log(this.$store.state.formation)
    },
chosePlayer(teamPlayersCopy, y, i){
this.selectedPlayer.splice([this.indexPosition], 1, teamPlayersCopy[y])
this.$store.state.formation[this.chosenPosition].splice([this.indexPosition], 1, teamPlayersCopy[y])
this.dialog[i] = false
      },
  }
};
</script>

<style lang="scss" scoped>
#SelectPlayerBox {
  display: flex;
  margin: 10px auto;
  width: 950px;
  height: 320px;
//   border: 3px solid black;
  .SelectPlayerCard {
    height: 300px;
    margin-top: 8px;
    width: 220px;
  }
  .TitleFont {
    font-size: 1rem !important;
  }
}
</style>