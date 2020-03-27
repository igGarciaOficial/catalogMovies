<template>
  <div>

    <header>
      Catalog Movies
    </header>

    <main>

      <iframe :src="srcMovie"></iframe>

      <div style="height:10vh;"></div>

      <div>
        <h1>Nome do filme</h1>
      </div>

    </main>

    <footer>
      Version: 1.0
    </footer>
  </div>

</template>

<script>
  import {API_URL_BASE} from "../main.js";
  const axios = require('axios');

  export default {
    data(){
      return{
        srcMovie: '',
        id_movie: ''
      }
    }, //End data
    props:{
      movie:{
        type: Object,
        default: function(){ return {} }
      }
    },
    created(){
      this.$data.id_movie = this.$route.params.id_movie;
      this.get_link_stream();
    }, // End mounted

    methods: {
      get_link_stream(){
        axios.get(API_URL_BASE + "watch_movie/" + this.$data.id_movie)
        .then( result => {
          this.$data.srcMovie = result.data.link;
        })
        .catch( err => {
          console.log('ERRO' , err);
        })
      }
    },// End methods
  }

</script>

<style scoped>

  iframe{
    margin: auto;
    height: 60vh;
    width: 90%;
  }
  main{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

</style>
