<script setup>
import { myData } from "../../data/data";

const products = ref(myData);
</script>

<template>
	<div id="product-list">
		<SingleProduct
			v-for="product in products"
			:key="product"
			:product="product" />
	</div>
</template>

<style lang="scss" scoped>
#product-list {
	width: 80%;
	height: max-content;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 25px;
}
</style>
