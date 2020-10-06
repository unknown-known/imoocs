<template>
	<view>
		<!-- 基础卡片 -->
		<view class="list-card">
			<view class="list-card-image">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>Uni-app开发框架</text>
				</view>
				<view class="list-card-content-des">
					<view class="list-card-content-des-label">
						<view class="list-card-content-des-label-item">
							前端
						</view>
					</view>
					<view class="list-card-content-des-browse">
						120人浏览
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.list-card{
	display: flex;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0 0 5px 1px rgba($color:#000000,$alpha:0.1);
	box-sizing: border-box;
	.list-card-image{
		flex-shrink: 0;
		width: 60px;
		height: 60px;
		border-radius: 5px;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.list-card-content{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 10px;
		width: 100%;
		.list-card-content-title{
			font-size: 14px;
			color: #333333;
			font-weight: 400px;
			line-height: 1.2;
			text{
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp:2;
				-webkit-box-orient: vertical;
			}
		}
		.list-card-content-des{
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			.list-card-content-des-label{
				display: flex;
				
				.list-card-content-des-label-item{
					padding: 0 5px;
					margin: 5px;
					border-radius: 15px;
					color: $mk-main-color;
					border: 1px solid $mk-main-color;
				}
				.list-card-content-des-browse{
					color: #999999;
					line-height: 1.5;
				}
			}
		}
	}
	
}
</style>
