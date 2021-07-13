
const regexp = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9\.]+\.com$/

const str = 'ilya@sheremetov.com'

if(str.split(' ').length > 1){
	console.log('email is not valid')
} else {
	if(regexp.test(str)){
		console.log('email is valid')
	} else {
		console.log('email is not valid')
	}
}








