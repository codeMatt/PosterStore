<template>
	<div>
		<input v-model="searchTerm" placeholder="Search for posters" class=""/>
		<button v-on:click="applySearch">Search</button>
	</div>
</template>

<style>
	.search-bar {

	}
</style>

<script>
import {store} from '@/store';

export default {
  name: 'SearchBar',
  data: function(){
    return {
    	searchTerm: ""
    };
  },
  methods: {
  	applySearch: function(){
  		this.$store.dispatch('applySearch', this.searchTerm);
  	},
  }
}
</script>