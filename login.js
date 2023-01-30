var username;
var password;
var foundData = false;


async function login(){
	findStudent();
	findOfficer();
	findTeacher();
}

async function goto(){
	let regexStudent = new RegExp('\\d{10}');

    let regexTeacher = new RegExp('n*'+'@tu.ac.th');

    let regexOfficer = new RegExp('officer'+'n*');

    let url;
    console.log('login');
    console.log(username);

	if (foundData) {
		document.cookie = "username="+username;
		if(regexOfficer.exec(username)){

			url = 'U9'+'?username='+username;
			
		}
		else if(regexTeacher.exec(username)){
			console.log('data found2');
			url = 'U11'+'?username='+username;
		
		}
		else if(regexStudent.exec(username)){
			console.log(username);
			url = 'U2'+'?username='+username;

		}
		window.location.href= url;
	}
}

document.getElementById("login").onclick = function(){
	console.log('click');
	username = document.getElementById("UserName").value;
	password = document.getElementById("PassWord").value;

	login();
}

async function findStudent(){
	console.log('find1');
	const xHttp = new XMLHttpRequest();

	xHttp.onload = async function(){
		link = this.responseText;
		try{
			
				let user = JSON.parse(link);
				for(let i = 0 ; i<user.length ; i++){
	                if (username === user[i].username) {
	                	if (password === user[i].password) {
	                		foundData = true;
	                		goto();
	                	}
	                }
	                if (foundData) {
	                	break;
	                }
				}	
			
		}catch(error){
			alert("Error1");
		}
	}
xHttp.open("GET","/getUserStudent");
xHttp.send();
}

async function findOfficer(){
	console.log('find2');
	const xHttp = new XMLHttpRequest();

	xHttp.onload = async function(){
		link = this.responseText;
		try{
			let user = JSON.parse(link);
			for(let i = 0 ; i<user.length ; i++){
                if (username === user[i].username) {
                	if (password === user[i].password) {
                		foundData = true;
                		goto();
                	}
                }
                if (foundData) {
                	break;
                }
			}	
				

		}catch(error){
			alert("Error2");
		}
	}
xHttp.open("GET","/getUserOfficer");
xHttp.send();
}

async function findTeacher(){
	console.log('find3');
	const xHttp = new XMLHttpRequest();

	xHttp.onload = async function(){
		link = this.responseText;
		try{
			let user = JSON.parse(link);
			for(let i = 0 ; i<user.length ; i++){
                if (username === user[i].username) {
                	if (password === user[i].password) {
                		foundData = true;
                		goto();
                	}
                }
                if (foundData) {
                	break;
                }
			}	
			if (!foundData) {
				alert('The input was incorrect. Please try again.');
	        }	

		}catch(error){
			alert("Error3");
		}
	}
xHttp.open("GET","/getUserTeacher");
xHttp.send();
}