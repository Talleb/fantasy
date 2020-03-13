<template>
  <div>
    <v-app id="inspire">
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="1000">
          <template v-slot:activator="{on}">
            <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
          </template>
          <v-card>
            <div class="ListofPlayerSelected">
              <ul>
                <li>Player One</li>
              </ul>
            </div>
            <v-card-actions @click="getPlayers(chosenPosition)">
              <v-btn color="green">Add player to position</v-btn>
            </v-card-actions>
            <div id="SelectPlayerBox">
              <v-card
                max-width="310"
                class="mx-auto SelectPlayerCard"
                v-for="Player in teamPlayers"
                :key="Player.FirstName"
              >
                <v-list-item>
                  <v-list-item-avatar color="grey"></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline TitleFont">{{
                      Player.Team
                    }}</v-list-item-title>
                    <v-list-item-subtitle
                      >{{ Player.FirstName }}
                      {{ Player.LastName }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-img class="ma-12" height="80"></v-img>

                <v-card-text align="center">{{ Player.Skills }}</v-card-text>
              </v-card>
            </div>
          </v-card>
        </v-dialog>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "selectPlayer",
  data() {
    return {
      dialog: this.$store.state.modal,
      teamPlayers: this.$store.state.players,
      chosenPosition: "Goalkeepers"
    };
  },
  methods: {
    async getPlayers(chosenPosition) {
      // this is going to be in the parent Component and each field position is going to have a unique fetch
      let getData = await fetch(`http://localhost:3000/${chosenPosition}`);
      let data = await getData.json();
      for (let i = 0; i < 4; i++) {
        let RP = Math.floor(Math.random() * 71);
        this.$store.state.players.push(data[RP]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#SelectPlayerBox {
  display: flex;
  margin: 10px auto;
  width: 950px;
  height: 320px;
  border: 3px solid black;
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
