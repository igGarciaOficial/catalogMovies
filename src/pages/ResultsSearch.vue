<template>
  <div>

    <header id="cabecalho">
      <SearchBar id="barraPesquisa" :valueSearch = "this.$route.params.movieSearch"  v-on:tosearch="analiseSearch"/>
      <div class="divider"></div>
    </header>

    <h2> {{ findedMovies.length}} resultados encontrado(s).</h2>

    <div id="results-card">
        <CardMovieSearch v-for="(movie, index) in findedMovies" :key="index" :movie="movie"/>
    </div>

  </div>
</template>

<script>

import SearchBar from '../components/SearchBar.vue';
import CardMovieSearch from '../components/CardMovieSearch.vue';
const axios = require('axios');
import {API_URL_BASE} from "../main.js";

export default {
  created(){
    this.analiseSearch();
  },

  components:{
    SearchBar,
    CardMovieSearch
  },

  data(){
    return{
      findedMovies: []
    }
  },
  methods:{
    gettingDataOnDatabase(movieName){

      axios.get(API_URL_BASE + "results/" + movieName)
      .then( result => {
        if(result.data.Error == "Movie not found!"){
          this.findedMovies = [];
        }else{
          this.findedMovies = result.data.Search;
        }
      }).catch( err => {
        console.log(err)
      })


    },// End dataOnDatabase
    analiseSearch(){
      let nameMovie = this.$route.params.movieSearch;
      if (nameMovie!==""){
          this.gettingDataOnDatabase(nameMovie);
      }
    }
  }

}

</script>

<style scoped>

  h1{
    color: white;
  }

  .divider{
    height: 50px;
  }

  .clear{
    clear:both;
  }

  #results-card{
    width: 100%;
    display: inline-block;
  }

</style>
