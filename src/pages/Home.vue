<template>
    <div id="contentHome">
        <h1> O que tu desejas assistir hoje? </h1>
        <search-bar/>
        
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';

export default {
    components:{
        SearchBar
    },
    mounted(){
        let altura = window.innerHeight;
        document.getElementById('contentHome').style.marginTop = altura * 0.37 + "px";
    }
}
</script>

<style>

h1{
    font-size: 46px;
    font-weight: bolder;
}

</style>
