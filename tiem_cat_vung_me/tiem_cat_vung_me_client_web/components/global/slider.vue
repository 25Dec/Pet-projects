<script setup>
import Banner1 from "../../assets/images/banner1.gif";
import Banner2 from "../../assets/images/banner2.gif";
</script>

<template>
	<v-carousel
		id="slider"
		cycle
		hide-delimiter-background
		color="rgba(248, 86, 123, 255)"
		:show-arrows="false">
		<v-carousel-item :src="Banner1"></v-carousel-item>
		<v-carousel-item :src="Banner2"></v-carousel-item>
	</v-carousel>
</template>

<style lang="scss" scoped>
#slider {
	width: 100%;
	background-color: $white-color;
}
</style>
