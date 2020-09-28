<template>
	<view class="nav-bar">
		<view class="nav-bar-fixed">
			<view class="nav-search">
				<view class="nav-search-icon"></view>
				<view class="nav-search-text">Uni-app</view>
			</view>
		</view>
		<view style="height: 45px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		created(){
			const info = uni.getSystemInfoSync()
			console.log(info)
		}
	}
</script>

<style lang="scss">
.nav-bar{
	.nav-bar-fixed{
		position: fixed;
		display: flex;
		top: 0;
		left: 0;
		z-index: 99;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		padding: 0 15px;
		width: 100%;
		height: 45px;
		background-color: $mk-main-color;
		.nav-search{
			display: flex;
			align-items: center;
			width: 100%;
			height: 30px;
			padding: 0 15px;
			background-color: #FFFFFF;
			border-radius: 30px;
			.nav-search-icon{
				width: 10px;
				height: 10px;
				border: 1px solid #ccc;
			}
			.nav-search-text{
				margin-left: 10px;
				font-size: 12px;
				color: #999999;
			}
		}
	}
}
</style>
