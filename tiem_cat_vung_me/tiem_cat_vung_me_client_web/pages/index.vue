<script setup>
onMounted(() => {
	document.title = "Tiệm cát Vừng Mè";
});
</script>

<template>
	<div id="home">
		<Slider />
		<h4 id="title">Gợi ý hôm nay</h4>
		<ProductList />
	</div>
</template>

<style lang="scss" scoped>
#home {
	width: 100%;
	height: 100%;
	margin-top: 5.313rem;
	background-color: $primary-color;
	display: flex;
	flex-direction: column;
	align-items: center;

	#title {
		width: 80%;
		height: max-content;
		border-bottom: 4px solid $secondary-color;
		text-align: center;
		color: $secondary-color;
		background-color: $white-color;
		margin: 16px 0;
		padding: 16px 0;
		text-transform: uppercase;
	}
}
</style>
