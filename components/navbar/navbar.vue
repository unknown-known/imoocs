<template>
	<view class="nav-bar">
		<view class="nav-bar-fixed">
			<!-- 导航栏占位符 -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<view class="nav-bar-content" :style="{height:navBarHight+'px',width:windowWidth+'px'}">
				<view class="nav-search">
					<view class="nav-search-icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="nav-search-text">Uni-app</view>
				</view>
			</view>
		</view>
		<view :style="{height: navBarHight+statusBarHeight +'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				navBarHight:45,
				windowWidth:375
			};
		},
		created(){
			// 系统状态栏设置
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight;
			this.windWidth = info.windowWidth;
			
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			
			// 胶囊位置获取
			const menuButtom = uni.getMenuButtonBoundingClientRect();
			// (胶囊底部高度-状态栏高度)+(胶囊高度-状态栏内的高度)=导航栏的高度
			this.navBarHight = (menuButtom.bottom - info.statusBarHeight)+(menuButtom.top - info.statusBarHeight);
				
			this.windowWidth = menuButtom.left;
			// console.log(windWidth)
			
			// #endif
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
					// display: flex;
					// justify-content: center;
					// align-items: center;
					// width: 10px;
					// height: 10px;
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
