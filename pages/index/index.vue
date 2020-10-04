<template>
	<view class="content">
		<navbar></navbar>
		<tab :list="tabList"></tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[]
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel() {
				uniCloud.callFunction({
					name: "get_label"
				}).then(
					(res) => {
						const {result} = res
						this.tabList = result.data
						console.log(this.tabList);
					}
				)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
