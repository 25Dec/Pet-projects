<script setup>
const props = defineProps(["iconName"]);
</script>

<template>
	<v-btn
		variant="plain"
		:ripple="false">
		<v-icon
			:icon="props.iconName"
			color="white"
			size="x-large"></v-icon>
	</v-btn>
</template>
