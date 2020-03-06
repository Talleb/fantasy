<template>
  <div class="home">
    <v-app id="inspire">
      <v-card>
        <v-card-title>
          Highscore Table
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="highScoreTable" :search="search"></v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<style scoped>
.home {
  width: 80%;
  min-height: 100%;
  margin: 0 auto;
}
.bg-logo {
  height: 400px;
}
.bg-teams {
  width: 80%;
}
.images {
  text-align: center;
  width: 100%;
}

.btn {
  padding: 10px;
  background-color: #f3f3f3;
  color: black;
}
.table {
  width: 100%;
}
.table th {
  width: 33%;
}
.table td {
  text-align: center;
}
.table tr:nth-child(odd) {
  background-color: #f5f5f5;
}
</style>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          value: "Name"
        },
        { text: "Team Name", value: "TeamName" },
        { text: "Total Points", value: "TotalPoints" }
      ],
      highScoreTable: []
    };
  },
  created() {
    fetch("http://localhost:3000/highscore")
      .then(response => response.json())
      .then(result => {
        result.forEach(score => {
          const scoreTable = {
            Name: score.User,
            TeamName: score.Team,
            TotalPoints: score.Total
          };
          this.highScoreTable.push(scoreTable);
        });
      });
  }
};
</script>
