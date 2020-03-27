<template>
    <div id="searchBar" >
        <div>
            <input @keyup.enter="search_on_serve()" type="text" v-model="intencition_movie" placeholder="Informe o nome do filme aqui!">
            <i id="icone" class="fa fa-search w3-xlarge " @click="search_on_serve"></i>
        </div>

    </div>
</template>

<script>
export default {
    mounted(){
      this.$data.intencition_movie = (this.$props.valueSearch !== "")?this.$props.valueSearch:"";
    },
    data(){
        return{
            intencition_movie: ''
        }
    }, // End of methods
    props:{
      valueSearch:{
        type:String,
        default: ''
      }
    }, //End props
    methods:{
        search_on_serve(){
            
            if (this.$data.intencition_movie.trim() == ''){
                return '';
            }
            
            this.$router.push({path:'/results/'+this.$data.intencition_movie});
            this.$emit('tosearch')
        }//End search_on_serve
    },//End methods

}
</script>

<style scoped>
#searchBar{
    margin:auto;
}

#icone{
    position: relative;
    display: inline-block;
    margin-left: 1%;
    border-color: rgb(218, 162, 58);
    cursor:pointer;
}

input[type="text"]{
    border:none;
    border-bottom: 2px solid black;
    border-color: rgb(218, 162, 58);
    color:#fff;/*#D1C2AE; rgba(218, 162, 58, 0.85);*/
    width: 45%;
    margin:auto;
    margin-top: 2%;
    font-size: 32px;
    font-weight: bold;
    flex:1;
    padding-left: 10px;
    background: transparent;
}

</style>
