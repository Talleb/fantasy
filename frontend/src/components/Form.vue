<template>
    <div id="form">
  <v-app id="inspire">
    <form       
    action="http://localhost:3000/submit-user" 
      method="post">
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
          <v-text-field
        v-model="points"
        label="Points"
        required
      ></v-text-field>
      
      <!-- <p
        class="totalpoints"
        label="Point"
        required
      >TOTALPOINTS:{{totalpoints}}</p> -->
      <v-btn class="mr-4" @click="submit({userName, teamName, points})">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-app>
</div>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength} from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    
  validations: {
    userName: { required, maxLength: maxLength(20) },
    teamName: { required, maxLength: maxLength(20) },
  },

  data: () => ({
    userName: '',
    teamName: '',
    points: '',
  }),

  computed: {
    userNameErrors () {
      const errors = []
      if (!this.$v.userName.$dirty) return errors
      !this.$v.userName.maxLength && errors.push('User Name must be at most 20 characters long')
      !this.$v.userName.required && errors.push('User is required.')
      return errors
    },
    teamNameErrors () {
      const errors = []
      if (!this.$v.teamName.$dirty) return errors
      !this.$v.teamName.maxLength && errors.push('Team Name must be at most 20 characters long')
      !this.$v.teamName.required && errors.push('Team Name is required.')
      return errors
    },
  },

  // @click="postanrop(username, teamname etc.)"
// postAnrop(data) {
//   fetchsafioamgp
//   body: JSON.stringify(data),
// Submit 
// }
  methods: {
    submit (userName, teamName, points) {
      fetch("http://localhost:3000/submit-user", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userName,teamName, points),
})
.then((response) => response.json())
.then((data2) => {
  console.log('Success:', data2);
})
.catch((error) => {
  console.error('Error:', error);
});
      console.log(userName)
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.userName = ''
      this.teamName = ''
      },
    },
  }
</script>