<script setup></script>

<template>
	<v-app>
		<Header />
		<slot />
		<Footer />
	</v-app>
</template>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
	width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
	box-shadow: inset 0 0 5px grey;
	border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: red;
	border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #b30000;
}

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

html {
	scroll-behavior: smooth;
}
</style>
