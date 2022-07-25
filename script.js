document.querySelector('button').addEventListener('click', click);

function click(){
	let login = document.querySelector('.login').value;
	let password = document.querySelector('.password').value;

	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			response(this.responseText);
		}
	}
	xhttp.open('GET','https://stpnxx.github.io/ajax/index.php');
	xhttp.send();
	function response(data){
		console.log(data);
	}
}
