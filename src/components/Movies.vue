<template>
  <div>
    <v-card>
      <v-form>
        <v-text-field label="Title" required v-model="movie.Title"></v-text-field>
        <v-text-field label="Year" required v-model="movie.Year"></v-text-field>
        <v-text-field label="Type" required v-model="movie.Type"></v-text-field>
        <v-text-field label="Poster" required v-model="movie.Poster"></v-text-field>
        <v-btn>Save</v-btn>
      </v-form>
    </v-card>

    <div class="list-movies">
      <v-card v-for="movie in movies" v-bind:key="movie.ID">
        <v-card-media :src="movie.Poster"></v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{movie.Title}}</h3>
            <div>{{ movie.Year }} | {{ movie.Type }}</div>
          </div>
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Movies',
  data () {
    return {
      movie: {},
      movies: []
    }
  },
  methods: {
    saveMovie () {
      axios.post('http://localhost:8080/movie', this.movie)
      .then(response => {
        this.movie = {}
        this.loadMovies()
      }).catch(err => {
        console.error(err)
      })
    },
    loadMovies () {
      axios.get('http://localhost:8080/movie')
      .then(movies => {
        this.movies = movies
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>