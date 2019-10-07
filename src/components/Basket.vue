<template>
	<div class='basket-container'>
		<span>Basket:</span>

		<div v-if="$store.state.basket.length > 0" v-for="item in $store.state.basket" :key="item.title" class="basket-items">

			<div>Poster: {{item.title}}</div>
			<div>Price: ${{item.price}}.00</div>

		</div>

		<div v-if="$store.state.basket.length == 0" class="basket-placeholder">
			<span>Nothing add to the basket yet.</span>
		</div>

		<div class="basket-footer">
			<span>Total: ${{ $store.state.totalBasketPrice }}.00</span>
		</div>
	</div>
</template>

<style>
	.basket-items {
		padding: 15px 0px;
	}

	.basket-container {
		padding-left: 10px;
		position:relative;
	}

	.basket-placeholder {
		padding-top: 10px;
		min-height: 50px;
	}

	.basket-footer {
		margin-top: 10px;
		position: absolute; 
        bottom: 0;
	}
</style>

<script>
import {store} from '@/store';

export default {
  name: 'Basket',
  data: function(){
    return {
		totalCost: 0
    };
  },
  computed: {
  	basketTotalCost: function(){
  		if(this.$store.state.basket.length > 0){
  			this.$store.state.basket.foreach( function(item, index){
  				this.totalCost += item.price;
  			});
  		}
  	}
  },
  mounted: function(){
  	this.totalCost = 0;
  },
  methods: {
  }
}
</script>