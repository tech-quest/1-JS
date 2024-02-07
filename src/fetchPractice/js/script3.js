fetch("../js/test.json")

.then(response => {
	return response.json();
})


.then(date => {
	console.log(date);
})

.catch(e=> {
	return response.json();
})
