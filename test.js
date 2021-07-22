function sleep(duration){
	const start = new Date().getTime()
	let end = new Date().getTime()

	while(end < start + duration){
		console.log(end)
		end = new Date().getTime()
	}
	console.log('finish')
}



sleep(3000)
