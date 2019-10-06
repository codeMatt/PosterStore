<template>
	<div>
		<span>SEARCHRESULTS</span>
		<div v-for="poster in $store.state.posters">
			
			{{poster.title}}!!
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import {store} from '@/store';

export default {
  name: 'SearchResults',

  props: {
    
  }
}
</script>