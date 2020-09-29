<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view class="tab-scroll-item" v-for="item in 20">{{item}} 项目</view>
			</view>
			<uni-icons type="gear" size="16" color="#333" class="tab-scroll-icon"></uni-icons>
		</scroll-view>
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
	.tab {
		display: flex;

		// overflow: hidden;
		.tab-scroll {
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid #ccc;

			.tab-scroll-box {
				display: flex;
				justify-content: center;
				align-items: center;

				.tab-scroll-item {
					flex-shrink: 0;
					padding: 0 10px;
				}
			}

			.tab-scroll-icon {
				flex: 1;

				&::after {
					
				}
			}
		}
	}
</style>
