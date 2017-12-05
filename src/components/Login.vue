<template>
  <div>
    <v-card>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" v-model="loginData.Username"></v-text-field>
          <v-text-field label="Password" v-model="loginData.Password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click.native="login()" color="blue">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      loginData: {
        Username: undefined,
        Password: undefined
      }
    }
  },
  methods: {
    login () {
      console.log(this.loginData)
      axios.post('http://localhost:8080/login', this.loginData)
        .then(response => {
          console.log(response)
        }).catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
