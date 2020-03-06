<template>
  <div class="home">
    <div class="grid">
      <h1>Highscore</h1>
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
      highscore: []
    };
  },
  created() {
    fetch("http://localhost:3000/highscore")
      .then(response => response.json())
      .then(result => {
        this.highscore = result;
        console.log(result);
      });
  },
  computed: {
    sortedPoints() {
      const a = this.highscore.slice();
      a.sort((a, b) => b.Total - a.Total);
      return a;
    }
  }
};
</script>
