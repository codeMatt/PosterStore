<template>
	<div class="results-container">
		<span>Poster Results:</span>
		<div v-show="posterResults.length>0" v-for="poster in posterResults" class="results-panel">
			<div>
				<div class="results-image"> <img v-bind:src="poster.imageUrl" height="100" alt="poster demo"> </div>

				<div class="result-details">
					<p>Title: {{poster.title}}</p>
					<p>Price: ${{poster.price}}.00</p>
				</div>

				<div> <button v-on:click="addToBasket(poster)">Add To Cart</button> </div>
			</div>
		</div>
		<div v-show="posterResults.length==0" class="results-panel results-footer">
			<span>No results</span>
		</div>
	</div>
</template>

<style>
	.results-panel {
		padding: 5px;
	}

	.results-image, r.esult-details {
		float:left;
		padding-right: 5px;
	}

	.results-container {
		text-align: left;
		padding-left: 10px;
	}

	.results-footer {
		clear:both;
	}

</style>

<script>
import {store} from '@/store';

export default {
  name: 'SearchResults',

  computed: {
  	posterResults: function(){
  		return this.$store.state.searchResults;
  	}
  },
  methods: {
  	addToBasket: function(poster){
  		poster.count=1;
		this.$store.dispatch('addItemToBasket', poster);
  	}
  }
}
</script>