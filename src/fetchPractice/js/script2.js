fetch("../js/test.json")

.then(response => {
	return response.json();
})


.then(data => {
	console.log(date);
})

.catch(_=> {
	return response.json();
})
