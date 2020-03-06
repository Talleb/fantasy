<template>
    <div id="form">
  <v-app id="inspire">
    <form>
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
      <p
        class="totalpoints"
        label="Point"
        required
      >TOTALPOINTS:{{totalpoints}}</p>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
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

  methods: {
    submit () {
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