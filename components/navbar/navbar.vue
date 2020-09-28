<template>
	<view class="nav-bar">
		<view class="nav-bar-fixed">
			<!-- 导航栏占位符 -->
			<view :style="{height:navHeight+'px'}"></view>
			<view class="nav-bar-content" :style="{height:navBarHight+'px',width:windWidth+'px'}">
				<view class="nav-search">
					<view class="nav-search-icon">
						<uni-icons type="search" size="16"></uni-icons>
					</view>
					<view class="nav-search-text">Uni-app</view>
				</view>
			</view>
		</view>
		<view style="height: 45px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navHeight:20,
				navBarHight:45,
				windWidth:375
			};
		},
		created(){
			// 系统状态栏设置
			const height = uni.getSystemInfoSync().statusBarHeight;
			this.navHeight = height;
			
			// 胶囊位置获取
			const menuButtom = uni.getMenuButtonBoundingClientRect();
			// (胶囊底部高度-状态栏高度)+(胶囊高度-状态栏内的高度)=导航栏的高度
			this.navBarHight = (menuButtom.bottom - height)+(menuButtom.top - height);
			
			this.windWidth = menuButtom.left;
			console.log(windWidth)
		}
	}
</script>

<style lang="scss">
.nav-bar{
	.nav-bar-fixed{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		background-color: $mk-main-color;
		.nav-bar-content{
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			padding: 0 15px;
			// height: 45px;
			.nav-search{
				display: flex;
				align-items: center;
				width: 100%;
				height: 30px;
				padding: 0 15px;
				background-color: #FFFFFF;
				border-radius: 30px;
				.nav-search-icon{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 10px;
					height: 10px;
				}
				.nav-search-text{
					margin-left: 10px;
					font-size: 12px;
					color: #999999;
				}
			}
		}
	}
}
</style>
