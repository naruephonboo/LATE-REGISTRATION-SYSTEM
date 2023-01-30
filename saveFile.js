function saveFile(){
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function(){
		let msg = this.reponseText;
		alert(msg);
	}
	xhttp.open("POST", "/saveStudent");
	xhttp.send(out);
}

function sentFile(){
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function(){
		let msg = this.reponseText;
		alert(msg);
	}
	xhttp.open("POST", "/sentStudent");
	xhttp.send(out);
}