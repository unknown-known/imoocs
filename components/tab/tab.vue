<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view class="tab-scroll-item" @click="clickTab(index,item)" :class="{active:activateIndex === index}" v-for="(item, index) in list"
				 :key="index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				activateIndex: 0
			}
		},
		methods: {
			clickTab(index, item) {
				this.activateIndex = index
				this.$emit('tab', {
					data: item,
					index: index
				})
			},

		}
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		border-bottom: 1px solid #F5F5F5;
		background-color: #FFFFFF;

		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;

			.tab-scroll-box {
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				box-sizing: border-box;
				height: 45px;

				.tab-scroll-item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333333;
					font-size: 14px;

					&.active {
						color: $mk-main-color;
					}
				}
			}

		}

		.tab-icons {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;

			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #DDDDDD;
			}
		}
	}
</style>
