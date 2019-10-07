import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	posters: [
  		{
  			title: "first poster",
  			imageUrl: "https://via.placeholder.com/150/FFFF00",
  			price: 5
  		},
  		{
  			title: "nice poster",
  			imageUrl: "https://via.placeholder.com/150/0000FF",
  			price: 3
  		},  		
  		{
  			title: "something to see",
  			imageUrl: "https://via.placeholder.com/150/FF0000",
  			price: 9
  		},  		
  		{
  			title: "amazing",
  			imageUrl: "https://via.placeholder.com/150/FF33CC",
  			price: 5
  		},  		
  		{
  			title: "rock band",
  			imageUrl: "https://via.placeholder.com/150/00FFFF",
  			price: 5
  		},  		
  		{
  			title: "mad max",
  			imageUrl: "https://via.placeholder.com/150/66FF66",
  			price: 5
  		},
  	],
  	searchResults:[],
  	basket: [],
  	totalBasketPrice: 0
  },
  mutations: {
  	updateSearchTerm(state, payload){

  		this.state.searchResults = this.state.posters.filter( function(poster){
  			return poster.title.indexOf(payload) > -1;
  		});
  	},
  	addItem(state, payload){
  		this.state.basket.push(payload);
  		this.state.totalBasketPrice+= payload.price;
  	}
  },
  getters: {
  	getSearchResults(){
  		return this.state.searchResults;
  	}
  },
  actions: {
  	applySearch(context, payload){
  		context.commit('updateSearchTerm', payload);
  	},
  	addItemToBasket(context, payload){
  		context.commit('addItem', payload);
  	}
  }
})
