<script setup>
const { product } = defineProps(["product"]);

const getImageUrl = () => {
	return new URL(`/assets/images/${product.image}`, import.meta.url);
};
</script>

<template>
	<NuxtLink :to="`/products/${product.id}`">
		<v-card id="single-product">
			<v-img
				id="image"
				:height="250"
				:src="getImageUrl().href">
			</v-img>
			<p id="title">
				{{ product.title }}
			</p>
			<div id="price-and-sold-amount">
				<span id="price">{{
					product.price.toLocaleString("vi-VN", {
						style: "currency",
						currency: "VND",
					})
				}}</span>
				<span id="sold-amount">Đã bán {{ product.sold }}</span>
			</div>
		</v-card>
	</NuxtLink>
</template>

<style lang="scss" scoped>
a {
	text-decoration: none;
}
#single-product {
	background-color: $white-color;
	transition: 0.25s;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}

	#title {
		font-size: 14px;
		padding: 0 16px;
	}

	#price-and-sold-amount {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px;

		#price {
			color: $secondary-color;
			font-size: 18px;
		}

		#sold-amount {
			color: $hint-text-color;
			font-size: 12px;
		}
	}
}
</style>
