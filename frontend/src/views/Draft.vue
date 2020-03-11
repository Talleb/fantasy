<template>
  <div class="draft" v-if="is_data_fetched">
<<<<<<< HEAD
=======
    <selectPlayer :SelectedInfo="SelectedInfo" class="SPbox (☞ﾟ∀ﾟ)☞" @InfoSelectedPlayer="acceptingPinfo($event)"/>
    <myTest class="myTest ( ͡° ͜ʖ ͡°)"></myTest>
>>>>>>> 389354abc6df837b9dcf99442c0b7a640d599a3c
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <section class="Forwards">
              Forward {{pickedPlayers[0].id !== undefined }}
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                      <template  v-for="(position,index) in formation[3]">
                      <v-card
                      v-if="(pickedPlayers[index+9].id !== undefined)"
                        :key="position"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item>
                          <v-list-item-avatar color="grey"></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">Club</v-list-item-title>
                            <v-list-item-subtitle>{{pickedPlayers[index+9].name}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" :src="country[0].flag" height="80"></v-img>

                        <v-card-text align="center">Skill</v-card-text>
                      </v-card>
                      <v-btn v-else :key="position" justify="center" color="green">Add player to position</v-btn>
                      </template>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row justify="center">
                      <v-col cols="4" md="2"></v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </section>
            <section class="Midfielders">
              Midfielders
              <v-container fixed>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                     <template  v-for="(position,index) in formation[2]">
                      <v-card
                      v-if="(pickedPlayers[index+5].id !== undefined)"
                        :key="position"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item>
                          <v-list-item-avatar color="grey"></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">Club</v-list-item-title>
                            <v-list-item-subtitle>{{pickedPlayers[index+5].name}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" :src="country[0].flag" height="80"></v-img>

                        <v-card-text align="center">Skill</v-card-text>
                      </v-card>
                      <v-btn v-else :key="position" justify="center" color="green">Add player to position</v-btn>
                      </template>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row justify="center">
                      <v-col cols="12" md="2"></v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </section>
            <section class="Defenders">
              Defenders
              <v-container fixed>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                      <template  v-for="(position,index) in formation[1]">
                      <v-card
                      v-if="(pickedPlayers[index+1].id !== undefined)"
                        :key="position"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item>
                          <v-list-item-avatar color="grey"></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">Club</v-list-item-title>
                            <v-list-item-subtitle>{{pickedPlayers[index+1].name}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" :src="country[0].flag" height="80"></v-img>

                        <v-card-text align="center">Skill</v-card-text>
                      </v-card>
                      <v-btn v-else :key="position" justify="center" color="green">Add player to position</v-btn>
                      </template>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row justify="center">
                      <v-col cols="6" md="2"></v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </section>
            <section class="Goalkeeper">
              Goalkeeper
              <v-container fixed>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                     <template  v-for="(position,index) in formation[0]">
                      <v-card
                      v-if="(pickedPlayers[index].id !== undefined)"
                        :key="position"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item>
                          <v-list-item-avatar color="grey"></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">Club</v-list-item-title>
                            <v-list-item-subtitle>{{pickedPlayers[index].name}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" :src="country[0].flag" height="80"></v-img>

                        <v-card-text align="center">Skill</v-card-text>
                      </v-card>
                      <v-btn v-else :key="position" justify="center" color="green">Add player to position</v-btn>
                      </template>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row justify="center">
                      <v-col cols="12" md="2"></v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </section>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Form/>
    {{$store.state.formation.Goalkeeper}}
  </div>
</template>

<script>
import selectPlayer from '../components/SelectPlayer'
import myTest from '../components/testasd'
import Form from '../components/Form'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "draft",
  created() {
    fetch(
      `https://restcountries.eu/rest/v2/name/${this.nationality}?fields=name;flag;alpha3Code`
    )
      .then(response => response.json())
      .then(result => {
        this.country = result;
        this.is_data_fetched = true;
        console.log(result[0].flag);
      });
  },
  methods: {
    countTotal() {},
    acceptingPinfo(e){ //accepting info from Selected player
      console.log(e) //all the info inside the SelectThisPlayer is going to be here
      // Also all the info from testasd.vue is going to be inside this component
    }
  },
  computed:{
    ...mapGetters({
      SelectedInfo:'getSelected'
    })
  },
  components: {
    selectPlayer,
    Form,
    myTest
  },
  data() {
    return {
      active: false,
      country: [],
      nationality: "ireland",
      teamtotal: [],
      pickedPlayers: [{name: "gk", id: 5},{name: "def1"},{name: "def2"},{name: "def3", id: 5},{name: "def4"},
      {name: "mid1", id: 2},{name: "mid2", id: 3},{name: "mid3", id: 3},{name: "mid4"},{name: "fw1", id:3},{name: "fw2", id:3}],
      formation: [1, 4, 4, 2],
      is_data_fetched: false
    };
  }
};
</script>

<style lang="scss" scoped>
  .SPbox{
    display: block;
  }
</style>