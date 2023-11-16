<script setup></script>

<template>
	<div id="header">
		<div id="app-bar">
			<h1 id="title">
				<a href="/"> Tiệm cát Vừng Mè </a>
			</h1>
			<div id="search-bar">
				<v-text-field
					placeholder="Tìm sản phẩm, thương hiệu"
					hide-details="auto"
					variant="solo"
					rounded
					append-inner-icon="mdi-magnify"
					@click:append-inner="() => {}">
				</v-text-field>
			</div>
			<div id="action-icons">
				<NuxtLink to="/cart">
					<IconButton
						id="cart"
						iconName="mdi-cart-outline" />
				</NuxtLink>
				<NuxtLink to="/account">
					<IconButton
						id="account"
						iconName="mdi-account-outline" />
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#header {
	width: 100vw;
	height: 5.313rem;
	background-color: $secondary-color;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
}

#app-bar {
	width: 80%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;

	#title {
		display: flex;
		align-items: center;

		a {
			text-decoration: none;
			color: $primary-color;
		}
	}

	#search-bar,
	#action-icons {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
