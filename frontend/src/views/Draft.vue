<template>
  <div class="draft" v-if="is_data_fetched">
    <selectPlayer></selectPlayer>
    <v-container fixed>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <section class="Forwards">
              Forward
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                      <v-card
                        v-for="position in formation[3]"
                        :key="position"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item>
                          <v-list-item-avatar color="grey"></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">Club</v-list-item-title>
                            <v-list-item-subtitle>FirstName LastName</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" :src="country[0].flag" height="80"></v-img>

                        <v-card-text align="center">Skill</v-card-text>

                        <v-card-actions>
                          <v-btn justify="center" color="green">Add player to position</v-btn>
                        </v-card-actions>
                      </v-card>
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

            <section class="Midfielders">
              Midfielders
              <v-container fixed>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                      <v-card
                        v-for="position in formation[2]"
                        :key="position"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item>
                          <v-list-item-avatar color="grey"></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">Club</v-list-item-title>
                            <v-list-item-subtitle>FirstName LastName</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" :src="country[0].flag" height="80"></v-img>

                        <v-card-text align="center">Skill</v-card-text>

                        <v-card-actions>
                          <v-btn color="green">Add player to position</v-btn>
                        </v-card-actions>
                      </v-card>
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
            <section class="Defenders">
              Defenders
              <v-container fixed>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                      <v-card
                        v-for="position in formation[1]"
                        :key="position"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item>
                          <v-list-item-avatar color="grey"></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">Club</v-list-item-title>
                            <v-list-item-subtitle>FirstName LastName</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" :src="country[0].flag" height="80"></v-img>

                        <v-card-text align="center">Skill</v-card-text>

                        <v-card-actions>
                          <v-btn color="green">Add player to position</v-btn>
                        </v-card-actions>
                      </v-card>
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
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <v-row align="center" justify="center">
                      <v-card
                        v-for="position in formation[0]"
                        :key="position"
                        max-width="250"
                        class="mx-auto"
                      >
                        <v-list-item>
                          <v-list-item-avatar color="grey"></v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="headline">Club</v-list-item-title>
                            <v-list-item-subtitle>FirstName LastName</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-img class="ma-12" :src="country[0].flag" height="80"></v-img>

                        <v-card-text align="center">Skill</v-card-text>

                        <v-card-actions>
                          <v-btn color="green">Add player to position</v-btn>
                        </v-card-actions>
                      </v-card>
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
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import selectPlayer from '../components/SelectPlayer'
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
    countTotal() {}
  },
  components: {
    selectPlayer
  },
  data() {
    return {
      country: [],
      nationality: "sweden",
      teamtotal: [],
      pickedPlayers: [],
      formation: [1, 4, 4, 2],
      is_data_fetched: false
    };
  }
};
</script>