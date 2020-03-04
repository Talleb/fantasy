<template>
  <div class="home">
    <div class="images">
      <img src="img/PremierLeague.png" class="bg-logo" />
      <img src="img/teams.png" class="bg-teams" />
    </div>

    <h1>Information</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat quam
      quod? Vitae tempore eius sapiente quaerat reiciendis aperiam voluptates
      libero ipsa voluptatum iste deserunt ea, nobis rerum iure eos! Modi non
      consectetur ut eius nostrum itaque ducimus ex atque cum magnam cumque
      dicta facere, delectus debitis. Animi error aperiam, dolore deleniti fugit
      dolorem accusantium debitis delectus voluptatem laborum ducimus! Dicta
      tempore eos aliquam aut ex beatae totam a! Quaerat culpa explicabo
      expedita odit exercitationem illo cumque et odio? Aspernatur, animi
      repellat. Maxime aspernatur sunt excepturi adipisci autem reprehenderit
      voluptates! Corrupti, temporibus dolores, perferendis aliquid delectus
      nobis dolore ea quibusdam pariatur illo quam nihil neque quas ipsum dicta.
      Nemo expedita ipsum tempora dicta? Delectus iure repellat cupiditate ipsum
      recusandae rerum. Exercitationem numquam aspernatur, ipsa perspiciatis
      obcaecati sint voluptas, non, nostrum quas nisi harum voluptatibus
      accusamus. Commodi, nulla quam? Impedit ab beatae soluta illum autem eos
      reiciendis repudiandae iure adipisci labore!
    </p>
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
    <div class="draften">
      <h3>Till draften</h3>
      <p>Vill du starta draften? Klicka nedan.</p>
      <button @click="$router.push('/Draft')" class="btn">
        starta draften
      </button>
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
    setTimeout(() => {
      fetch("http://localhost:3000/highscore")
        .then(response => response.json())
        .then(result => {
          this.highscore = result;
          console.log(result);
        });
    }, 1000);
  },
  computed: {
    sortedPoints() {
      return this.highscore.sort((a, b) => b.Total - a.Total);
    }
  }
};
</script>
