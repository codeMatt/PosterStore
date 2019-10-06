import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	posters: [
  		{
  			title: "firstPoster",
  			image: "https://via.placeholder.com/150/FFFF00?Text=firstPoster",
  			price: 5
  		},
  		{
  			title: "nicePoster",
  			image: "https://via.placeholder.com/150/FFFF00?Text=nicePoster",
  			price: 3
  		},  		
  		{
  			title: "somethingToSee",
  			image: "https://via.placeholder.com/150/FF0000?Text=somethingToSee",
  			price: 5
  		},  		
  		{
  			title: "",
  			image: "",
  			price: 5
  		},  		
  		{
  			title: "",
  			image: "",
  			price: 5
  		},  		
  		{
  			title: "",
  			image: "",
  			price: 5
  		},
  	],
  	basket: [],
  	test: "Test"
  },
  mutations: {
  	search(searchTerm){

  	},

  },
  actions: {

  }
})
