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
	xhttp.open('GET','file:///C:/Users/Павел/Desktop/Работа/Урочные%20разработки/web/2022/JS/JS%202.0/урок%2013%20set/index.php');
	xhttp.send();
	function response(data){
		console.log(data);
	}
}