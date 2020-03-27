<template>
  <section v-if="idMovie===null">
    <h1>{{msg}}</h1>
  </section>
  <section  v-else>
    <div class="areaBack" @click="voltar">
      <i class="fa fa-arrow-left"></i>
    </div>


    <div class="presentationContainer">
        <div id="containerImg">
          <div id="imgPoster">
            <img :src="movie.Poster" alt="Imagem do filme">
          </div>

          <div id="watchMovieButton" @click="watchCommand()">Assistir</div>


        </div>

        <div id="infoMovie">
          <h1>{{movie.Title}}</h1>

          <div>
            <i class="w3-xlarge fa fa-star"></i>
            <span>{{movie.imdbRating}}</span>
          </div>

          <div>
            <p>
              <span style="color: white;">Gêneros:</span> {{movie.Genre}}
            </p>
          </div>
          <div>
            <h2>Sinopse</h2>
            <p>
              {{movie.Plot}}
            </p>
          </div>

        </div>
    </div>



  </section>

</template>

<script>
const axios = require('axios');
import {API_URL_BASE} from "../main.js";

export default {

  created(){

    if(this.$route.params.idMovie !== null){
      this.$data.idMovie = this.$route.params.idMovie;

      axios.get(API_URL_BASE + "info-movie/" + this.$data.idMovie)
      .then( result => {
        this.$data.movie = result.data;
      })
      .catch( err => {
        console.log("Não foi possível encontrar o filme no servidor", err);
      })
    }
  },
  data(){
    return{
      idMovie:'',
      msg: "Filme não identificado.",
      movie:{}
    }
  },
  methods:{
    voltar(){
      this.$router.go(-1);
    },
    watchCommand(){
      this.$router.replace("/watch/" + this.$data.idMovie);
    }, // End watchCommand function
  }
}
</script>

<style scoped>
  .presentationContainer{
    display: flex;
    margin-top: 12vh;
  }
  #containerImg{
    width: 33%;
  }
  #imgPoster{
    border:1px solid white;
    width: 90%;
    margin: auto;
  }
  img{
    width: 100%;
  }
  h1, h2{
    color: white;
  }
  h2{
    font-size: 36px;
  }
  span{
    font-size: 24px;
    font-weight: bolder;
  }
  i{
    margin-right: 1%;
  }
  p{
    font-size: 24px;
  }
  #infoMovie{
    padding: 0 3%;
    width: 67%;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5)
  }
  .fa-arrow-left{
    font-size: 55px;
    color: white;
    position: absolute;
    left: 15.5%;
    top: 1%;
    cursor: pointer;
  }

  .areaBack{
    background-color: rgba(0, 0, 0, 0.9);
    width: 8vh;
    height: 8vh;
    border-radius: 50%;
  }

  #watchMovieButton{
    width: 90%;
    /*height: 35px;*/
    box-sizing: border-box;
    margin: auto;
    margin-top: 3%;
    background-color: rgb(219, 40, 16);
    color: white;

    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
