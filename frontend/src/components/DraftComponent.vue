<template >
  <v-app id="DraftComponent">
      <section v-for="(position,index) in formation" :Key="position"> <h1>{{index}}</h1><v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                        <template  v-for="player in position">
                      <v-card
                      v-if="(player.ID !== undefined)"
                        :key="player"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item>
                          <v-list-item-avatar color="grey"></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">{{player.Team}}</v-list-item-title>
                            <v-list-item-subtitle>{{player.FirstName+ " "+player.LastName}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" :src="`https://restcountries.eu/data/${player.alpha3Code}.svg`" height="80"></v-img>

                        <v-card-text align="center">{{player.Skills}}</v-card-text>
                      </v-card>
                      <div class="mx-auto" v-else :key="player">
                      <v-btn justify="center" color="green">Add player to position</v-btn></div>
                      </template>        </v-row>
                  </v-col>
                </v-row>
              </v-container></section>
  </v-app>
</template>

<script>
// import SelectPlayer from '../components/SelectPlayer'
// import Modal from '../components/Modal'

export default {
  name: "DraftComponent",
  components: {
    //   SelectPlayer,
    //   Modal
  },
  data() {
    return {
      formation: {Goalkeeper: [{
      ID: 3,
      Number: 1,
      Picture: 'https://www.fifaindex.Midfielderm/static/FIFA20/images/players/5/190456.webp',
      Team: 'Liverpool',
      Nationality: 'Brazil',
      alpha3Code: 'bra',
      Skills: 90,
      FirstName: 'Alisson',
      LastName: null,
      Position: 'Goalkeeper',
      Age: 27
    }],
    Defenders: [{
      ID: 94,
      Number: 6,
      Picture: 'Dejan Lovren FIFA 20',
      Team: 'Liverpool',
      Nationality: 'Croatia',
      alpha3Code: 'hrv',
      Skills: 80,
      FirstName: 'Dejan',
      LastName: 'Lovren',
      Position: 'Defender',
      Age: 30
    },{
      ID: 59,
      Number: 23,
      Picture: 'David Luiz FIFA 20',
      Team: 'Arsenal',
      Nationality: 'Brazil',
      alpha3Code: 'bra',
      Skills: 82,
      FirstName: 'David',
      LastName: 'Luiz',
      Position: 'Defender',
      Age: 32
    },{
    },{
    }],
    Midfielders: [{
      ID: 99,
      Number: 11,
      Picture: 'Erik Lamela FIFA 20',
      Team: 'Tottenham',
      Nationality: 'Argentina',
      alpha3Code: 'arg',
      Skills: 80,
      FirstName: 'Erik',
      LastName: 'Lamela',
      Position: 'Midfielder',
      Age: 27
    },
      {ID: 100,
      Number: 17,
      Picture: 'Moussa Sissoko FIFA 20',
      Team: 'Tottenham',
      Nationality: 'France',
      alpha3Code: 'fra',
      Skills: 80,
      FirstName: 'Moussa',
      LastName: 'Sissoko',
      Position: 'Midfielder',
      Age: 30},{
      ID: 95,
      Number: 15,
      Picture: 'Alex Oxlade-ChaDefendererlain FIFA 20',
      Team: 'Liverpool',
      Nationality: 'United Kingdom of Great Britain and Northern Ireland',
      alpha3Code: 'gbr',
      Skills: 80,
      FirstName: 'Alex',
      LastName: 'Oxlade-ChaDefendererlain',
      Position: 'Midfielder',
      Age: 26
    },{
      ID: 92,
      Number: 4,
      Picture: 'Luka Milivojević FIFA 20',
      Team: 'Crystal Palace',
      Nationality: 'Serbia',
      alpha3Code: 'srb',
      Skills: 81,
      FirstName: 'Luka',
      LastName: 'Milivojević',
      Position: 'Midfielder',
      Age: 28
    }],
    Forwards: [{
      ID: 8,
      Number: 10,
      Picture: 'Harry Kane FIFA 20',
      Team: 'Tottenham',
      Nationality: 'United Kingdom of Great Britain and Northern Ireland',
      alpha3Code: 'gbr',
      Skills: 89,
      FirstName: 'Harry',
      LastName: 'Kane',
      Position: 'Forward',
      Age: 26
    },{
  
    }]
  }
}
}
}
</script>