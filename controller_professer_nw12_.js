function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let studentId = getParameterByName('studentId');

function wait() {
	window.location.href = window.location.origin + "/U12-wait";
}

function approve() {
	window.location.href = window.location.origin + "/U12-approve";
}

function cancel() {
	window.location.href = window.location.origin + "/U12-cancel";
}

function Confirm(e){
	
	var result = confirm("อนุมัติรายการคำร้องขอเพิ่ม-ถอนรายวิชาของนักศึกษาหรือไม่")
	if(result){

		const xhttp = new XMLHttpRequest();
		xhttp.onload = function(){

			let json = this.responseText;
			
			try {
				let student = JSON.parse(json);
				results = student.find(function(st) {
					return st.studentId == studentId;
				});
				
			} catch (err) {
				alert('Not Found');
			}
			
		}
		xhttp.open("GET", "/getStudent?studentId=" + studentId, true);
		xhttp.send();

		results['deanApprove'] = "approve";
		results.status = "อนุมัติโดยคณบดี";
		results['deanReason'] = document.getElementById('tchcom').value;
		var out = JSON.stringify(results);
        alert("บันทึกข้อมูลสำเร็จ");
        
        xhttp.onload = function(){}
        xhttp.open("POST", "/updateStudent");
		xhttp.send(out);

		window.location.href = window.location.origin + "/U12-wait";

		return true;
	}
	else {
		return false;
	}


}

function Cancel(e){

	var result = confirm("ไม่อนุมัติรายการคำร้องขอเพิ่ม-ถอนรายวิชาของนักศึกษาหรือไม่")
	if(result){
		const xhttp = new XMLHttpRequest();
		xhttp.onload = function(){

			let json = this.responseText;
			
			try {
				let student = JSON.parse(json);
				results = student.find(function(st) {
					return st.studentId == studentId;
				});
				
			} catch (err) {
				alert('Not Found');
			}
			
		}
		xhttp.open("GET", "/getStudent?studentId=" + studentId, true);
		xhttp.send();

		results['deanApprove'] = "notapprove";
		results.status = "ไม่อนุมัติโดยคณบดี";
		results['deanReason'] = document.getElementById('tchcom').value;
		var out = JSON.stringify(results);
        alert("บันทึกข้อมูลสำเร็จ");
        
        xhttp.onload = function(){}
        xhttp.open("POST", "/updateStudent");
		xhttp.send(out);

		window.location.href = window.location.origin + "/U12-wait";

		return true;
	}
	else {
		return false;
	}

}


function loadDoc(){
	const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){

        let json = this.responseText;
		
		try {
			let student = JSON.parse(json);
            results = student.find(function(st) {
                return st.studentId == studentId;
            });

            document.getElementById("date").innerHTML = results.date;
			document.getElementById("name").innerHTML = results.studentFirstName;
			document.getElementById("surname").innerHTML = results.studentLastName;
			document.getElementById("snumber").innerHTML = results.studentId;
			document.getElementById("year").innerHTML = results.studentYear;
			document.getElementById("field").innerHTML = results.studentField;
			document.getElementById("professor").innerHTML = results.advisor;
			document.getElementById("address").innerHTML = results.addressNumber;
			document.getElementById("moo").innerHTML = results.moo;
			document.getElementById("tumbol").innerHTML = results.tumbol;
			document.getElementById("amphur").innerHTML = results.amphur;
			document.getElementById("county").innerHTML = results.provience;
			document.getElementById("postcode").innerHTML = results.postalCode;
			document.getElementById("sphone").innerHTML = results.mobliePhone;
			document.getElementById("hphone").innerHTML = results.phone;
			if(results.addSubjectList) {
				let add = "";
				for(let x in results.addSubjectList) {
					add += results.addSubjectList[x].subjectCode + " ";
					add += results.addSubjectList[x].subjectName + "     ";
                    add += results.addSubjectList[x].subjectSection + "     ";
                    add += results.addSubjectList[x].subjectDate + "     ";
                    add += results.addSubjectList[x].subjectCredit + "     ";
                    add += results.addSubjectList[x].subjectTeacher + "     ";
                    add += results.addSubjectList[x].subjectTeacherCheck + "     ";
				}
				document.getElementById("add_subject").innerHTML = add;
			}
			if(results.dropSubjectList) {
				let drop = "";
				for(let x in results.dropSubjectList) {
					drop += results.dropSubjectList[x].subjectCode + " ";
					drop += results.dropSubjectList[x].subjectName + "      ";
                    drop += results.dropSubjectList[x].subjectSection + "      ";
                    drop += results.dropSubjectList[x].subjectDate + "      ";
                    drop += results.dropSubjectList[x].subjectCredit + "      ";
                    drop += results.dropSubjectList[x].subjectTeacher + "      ";
                    drop += results.dropSubjectList[x].subjectTeacherCheck + "      ";
				}
				document.getElementById("reject_subject").innerHTML = drop;
			}
			if(results.reason) {
				document.getElementById("reason").innerHTML = results.cause;
			}
			if(results.deanReason) {
				document.getElementById("tchcom").innerHTML = results.deanReason;
			}
			
			let x = document.getElementById("mybutton");
			let wait_bt = document.getElementById("wait");
			let approve_bt = document.getElementById("approve");
			let cancel_bt = document.getElementById("cancel");
			let deanReason_box = document.getElementById("tchcom");

			if(JSON.stringify(results).match(/deanApprove/)) {
				if(JSON.stringify(results).match(/"deanApprove":"approve"/)) {
					approve_bt.classList.toggle("button-select");
				} else {
					cancel_bt.classList.toggle("button-select");
				}
				deanReason_box.disabled = true;
				x.style.display = "none";
			} else {
				deanReason_box.disabled = false;
				wait_bt.classList.toggle("button-select");
				x.style.display = "block";
			}

			
		} catch (err) {
			alert('Not Found');
		}
		
    }
    xhttp.open("GET", "/getStudent?studentId=" + studentId, true);
    xhttp.send();
	
}