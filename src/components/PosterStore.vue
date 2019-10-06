<template>
	
	<div>
		<h1>VUEJS POSTER STORE</h1>

		<div>
			<SearchBar></SearchBar>
		</div>

		<div>
			<SearchResults></SearchResults>
		</div>

		<div>
			<basket></basket>
		</div>
	</div>

</template>


<script>

import SearchBar from "@/components/SearchBar.vue";
import SearchResults from "@/components/SearchResults.vue";
import basket from "@/components/basket.vue";

export default {
  name: 'PosterStore',
  components: {
    SearchBar,
    SearchResults,
    basket
  },
  props: {
    
  }
}

</script>