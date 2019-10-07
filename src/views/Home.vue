<template>
  	<div>
		<h1>VUEJS POSTER STORE</h1>

		<div class="search-bar panel">
			<SearchBar></SearchBar>
		</div>

		<div>
			<div class="search-results panel">
				<SearchResults></SearchResults>
			</div>
			
			<div class="basket panel">
				<Basket></Basket>
			</div>			
		</div>
	</div>
</template>

<style>
	.search-bar {
		width:100%;

	}
	
	.search-results {
		width:65%;
		display:inline-block;
		min-height: 450px;
		float: left;
	}

	.basket {
		width:35%;
		display:inline-block;
		min-height: 450px;
		float: left;
	}

	.panel {
		padding: 15px 0px;
		background-color: rgba(0,0,0,0.15);
	}
</style>

<script>
import SearchBar from "@/components/SearchBar.vue";
import SearchResults from "@/components/SearchResults.vue";
import Basket from "@/components/Basket.vue";

export default {
  name: 'home',
  components: {
    SearchBar,
    SearchResults,
    Basket
  }
}
</script>
