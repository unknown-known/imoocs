const get_label = (data) => {
return new Promise((reslove, reject)=>{
	uniCloud.callFunction({
		// name:"get_label",
		data
	}).then((res)=>{
		if(res.result.code===200){
			// .then
			reslove(res.result)
		}else{
			// .catch
			reject(res.result)
		}
	}).catch((err)=>{
		reject(err)
	})
})
}
export default{
	get_label
}
