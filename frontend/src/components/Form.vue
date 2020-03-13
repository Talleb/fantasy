<template>
  <div id="form">
    <v-app id="inspire">
      <form action="http://localhost:3000/submit-user" method="post">
        <v-text-field
          v-model="userName"
          :error-messages="userNameErrors"
          :counter="20"
          label="User Name"
          required
          @input="$v.userName.$touch()"
          @blur="$v.userName.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="teamName"
          :error-messages="teamNameErrors"
          :counter="20"
          label="Team Name"
          required
          @input="$v.teamName.$touch()"
          @blur="$v.teamName.$touch()"
        ></v-text-field>
        <p required>{{points}}</p>
        <router-link to="/highscore">
          <v-btn
            class="mr-4"
            color="primary"
            :disabled="isDisabled"
            :class="{ disabled: isDisabled }"
            @click="submit({userName, teamName, points})"
          >submit</v-btn>
        </router-link>
      </form>
    </v-app>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    userName: { required, maxLength: maxLength(20) },
    teamName: { required, maxLength: maxLength(20) },
    points: { required }
  },

  data() {
    return {
      userName: "",
      teamName: "",
      teamtotal: null
    };
  },
  computed: {
    isDisabled() {
      if (this.userName.length > 3 && this.teamName.length > 3) {
        return false;
      } else {
        return true;
      }
    },
    userNameErrors() {
      const errors = [];
      if (!this.$v.userName.$dirty) return errors;
      !this.$v.userName.maxLength &&
        errors.push("User Name must be at most 20 characters long");
      !this.$v.userName.required && errors.push("User is required.");
      return errors;
    },
    teamNameErrors() {
      const errors = [];
      if (!this.$v.teamName.$dirty) return errors;
      !this.$v.teamName.maxLength &&
        errors.push("Team Name must be at most 20 characters long");
      !this.$v.teamName.required && errors.push("Team Name is required.");
      return errors;
    },
    points() {
      const teamtotal = [
        ...this.$store.state.formation.Goalkeepers,
        ...this.$store.state.formation.Defenders,
        ...this.$store.state.formation.Midfielders,
        ...this.$store.state.formation.Forwards
      ]
        .filter(player => player.Skills !== undefined)
        .reduce((acc, curr) => {
          return acc + curr.Skills;
        }, 0);
      return teamtotal;
    }
  },
  methods: {
    submit(userName, teamName, points) {
      fetch("http://localhost:3000/submit-user", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userName, teamName, points)
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
        })
        .catch(error => {
          console.error("Error:", error);
        });

      this.$v.$touch();
    }
  }
};
// this.$store.state.formation.flat(infinity) = this.test
// v-if="this.test.ID !== null"
</script>