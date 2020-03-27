import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//Importando components
import Home from './pages/Home.vue';
import ResultsPage from './pages/ResultsSearch.vue';
import DescriptionPage from "./pages/DescriptionMoviePage.vue";
import WatchMovie from "./pages/VideoLoader.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path:'/', component:Home, name:'home'},
    {path:'/results/:movieSearch', component:ResultsPage, name:'results'},
    {path:'/description/:idMovie', component: DescriptionPage, name:"Description"},
    {path:'/watch/:id_movie', component:WatchMovie, name:'watch'}
  ]
});

export const API_URL_BASE = "http://127.0.0.1:8000/api/";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
