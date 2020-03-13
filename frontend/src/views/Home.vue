<template>
  <div class="home">
    <div class="images">
      <img src="img/PremierLeague.png" class="bg-logo" />
      <img src="img/teams.png" class="bg-teams" />
    </div>
<section class="ma-12">
    <h1>Information</h1>
    <p>
      Discover the origins and history of the top tier of English football 
The 2018/19 season was the 27th of the Premier League after its formation in 1992. 
After numerous discussions with football authorities, players and television broadcasters, the First Division clubs resigned from the Football League in May 1992 and the Premier League was formed, with the inaugural campaign starting on Saturday 15 August of that year.
Below, each of the 26 seasons has been charted with the story of how the titles were won and the players who starred.
From 2011/12's incredible finale, to Arsenal's "Invincibles", as well as Manchester United's record 13 triumphs, find out more about the rich history of the Premier League.
    </p>
     </section>
    <div class="grid">
      <section class="ma-12">
        <h1>Highscore top 5</h1>
      <table class="table">
        <thead>
          <tr>
            <th>User</th>
            <th>Team Name</th>
            <th>Total points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="score in sortedPoints" :key="score">
            <td>{{ score.User }}</td>
            <td>{{ score.Team }}</td>
            <td>{{ score.Total }}</td>
          </tr>
        </tbody>
      </table>
        <v-btn color="green darken-4" dark @click="$router.push('/Highscore')">Highscore</v-btn>
             </section>
    </div>
    <div>
    <div class="draften">
      <section class="ma-12">
      <h3>Till draften</h3>
      <p>Vill du starta draften? Klicka nedan.</p>
        <v-btn color="green darken-4" dark @click="$router.push('/Draft')">starta draften</v-btn>
        </section>
      </div>
    </div>
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
  padding: 7px;
}
.table td {
  text-align: center;
  padding: 7px;
}
.table tr:nth-child(odd) {
  background-color: #f5f5f5;
}
</style>

<script>
export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      highscore: []
    };
  },
  created() {
    fetch("http://localhost:3000/highscore")
      .then(response => response.json())
      .then(result => {
        this.highscore = result;
      });
  },
  computed: {
    sortedPoints() {
      const a = this.highscore.slice();
      a.sort((a, b) => b.Total - a.Total);
      return a.slice(0, 5);
    }
  }
};
</script>
