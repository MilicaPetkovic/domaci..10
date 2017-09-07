
function sum(z) {
	var n = 1;

	for( var i = 1; i <= z; i++) {
		n *= i;
	}
	return(n);
}

console.log(sum(7));