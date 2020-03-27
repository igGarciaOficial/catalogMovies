<template>

  <div class="border-card">
    <div class="card" @click="detailMovie()">
        <img :src="movie.Poster"/>
        <p>{{movie.Title}}</p>

        <div class="clear"></div>
    </div>
  </div>
</template>

<script>
var imgDefault = require("@/assets/img/default-popcorn-icon.png");

export default {
  props:{
    movie:{
      default: function(){return{name:'Null', classification:0.0}},
      name: {
        type: String
      }
    }
  }, // End props
  mounted(){
    if(this.$props.movie.Poster == "N/A"){
      this.$props.movie.Poster = imgDefault;
    }
  },
  methods:{
    detailMovie(){
      this.$router.replace("/description/" + this.$props.movie.imdbID);
    }
  }
}
</script>

<style scoped>
  img{
    width: auto;
    max-width: 80%;
    height: 27vh;
    margin: auto;
  }
  p{
    text-align:center;
    text-align: left;
    word-wrap:break-word;
    word-break: break-all;
    font-size: 16px;
    font-weight: bold;
    color: white;
    padding:0px 15px;
    margin: auto;
  }

  .border-card{
    height: 37vh;
    width: 25vh;
    margin: 0.15% 0.2%;
    float:left;
    background-color: #092047; /*051633;*/
    padding: 1% 0;
  }

  .clear{
    clear: both;
  }
  .card{
    margin:auto;
  }

</style>
