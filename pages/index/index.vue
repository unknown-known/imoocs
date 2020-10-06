<template>
	<view class="content">
		<navbar></navbar>
		<tab :list="tabList" @tab="tab"></tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: []
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			// 获取数据
			tab({index,data}){
				// console.log(data,index);
			},
			getLabel() {
				// TODO
				// console.log(this.$api);
				// this.$api.get_label({
				// 	name: 'get_label'
				// }).then((res) => {
				// 	// console.log(res);
				// 	const {
				// 		data
				// 	} = res;
				// 	this.tabList = data;
				// 	console.log(this.tabList);
				// })

				// uniCloud方式请求资源
				uniCloud.callFunction({
					name: "get_label"
				}).then(
					(res) => {
						const {result} = res
						this.tabList = result.data
						// console.log(this.tabList);
					}
				)
			}
		}
	}
</script>

<style lang="scss">

</style>
