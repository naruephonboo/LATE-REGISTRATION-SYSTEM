function fn1(){
	var table = document.getElementById("student");
	var text=table.rows[1].cells[3].innerHTML;
	if(text==""){

	var table = document.getElementById("student");
	table.rows[1].cells[3].innerHTML="อยู่ระหว่างการตรวจสอบโดยอาจารย์";
	}else if (text=="อยู่ระหว่างการตรวจสอบโดยอาจารย์")
	{
		var table = document.getElementById("student");
	table.rows[1].cells[3].innerHTML="อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่";
	}else if (text=="อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่")
	{
		var table = document.getElementById("student");
	table.rows[1].cells[3].innerHTML="อยู่ระหว่างการตรวจสอบโดยคณบดี";
	}else{
		var txt;
		var r = confirm("Approve!");
		if (r == true) {
		txt = "อนุมัติ!";
		} else {
		txt = "ไม่อนุมัติ";
		}
		table.rows[1].cells[3].innerHTML=txt;
	}
	//	alert('fn1 1');
}
function fn2(){
	var table = document.getElementById("student");
	table.rows[1].cells[3].innerHTML="อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่";
}
function fn3(){
	var table = document.getElementById("student");
	table.rows[1].cells[3].innerHTML="อยู่ระหว่างการตรวจสอบโดยคณบดี";
}
function fn4(){
	var table = document.getElementById("student");
	table.rows[1].cells[3].innerHTML='<select name=\"dStatus\" id=\"dStatus\"><option value=\"yes\">อนุมัติ</option>  <option value=\"no\">ไม่อนุมัติ</option></select>';
}
function fn5(){
	var table = document.getElementById("student");
	table.rows[1].cells[3].innerHTML='<select name=\"dStatus\" id=\"dStatus\"><option value=\"yes\">อนุมัติ</option>  <option value=\"no\">ไม่อนุมัติ</option></select>';
}
function AddRowFunction() {
var table = document.getElementById("student");
var desc = document.getElementById("desc");
var requestdate = document.getElementById("requestdate");
var dR = document.getElementById("dRequest");
var dS = document.getElementById("dStatus");

var ps = document.getElementById("ps");
var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
const d = new Date();
cell1.innerHTML = requestdate.value;
cell2.innerHTML ='<select name=\"dRequest\" id=\"case\"> <option value=\"case1\">คำร้อง1</option>  <option value=\"case2\">คำร้อง2</option></select>'
cell3.innerHTML = desc.value;
cell4.innerHTML = '';
cell5.innerHTML = ps.value;
cell6.innerHTML='<input type="button" value="นักเรียน" onclick="fn1(this)" class="button"/><input type="button" value="อาจารย์" onclick="fn1(this)" class="button"/><input type="button" value="เจ้าหน้าที่" onclick="fn1(this)" class="button"/><input type="button" value="อนุมัติ" onclick="fn1(this)" class="button"/><input type="button" value="ไม่อนุมัติ" onclick="fn1(this)" class="button"/>';
}
function AddRowFunction2() {
var table = document.getElementById("student");
var desc = document.getElementById("desc");
var requestdate = document.getElementById("requestdate");
var dR = document.getElementById("dRequest");
var dS = document.getElementById("dStatus");

var ps = document.getElementById("ps");
var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
const d = new Date();
cell1.innerHTML = requestdate.value;
cell2.innerHTML ='<select name=\"dRequest\" id=\"case\"> <option value=\"case1\">คำร้อง1</option>  <option value=\"case2\">คำร้อง2</option></select>'
cell3.innerHTML = desc.value;
cell4.innerHTML = 'อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่';
cell5.innerHTML = ps.value;
cell6.innerHTML='<input type="button" value="ChangeStatus" onclick="fn1(this)" class="button"/>';
}
function AddRowFunction3() {
var table = document.getElementById("student");
var desc = document.getElementById("desc");
var requestdate = document.getElementById("requestdate");
var dR = document.getElementById("dRequest");
var dS = document.getElementById("dStatus");

var ps = document.getElementById("ps");
var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
const d = new Date();
cell1.innerHTML = requestdate.value;
cell2.innerHTML ='<select name=\"dRequest\" id=\"case\"> <option value=\"case1\">คำร้อง1</option>  <option value=\"case2\">คำร้อง2</option></select>'
cell3.innerHTML = desc.value;
cell4.innerHTML = 'อยู่ระหว่างการตรวจสอบโดยคณบดี';
cell5.innerHTML = ps.value;
cell6.innerHTML='<input type="button" value="ChangeStatus" onclick="fn1(this)" class="button"/>';
}
function AddRowFunction4() {
var table = document.getElementById("student");
var desc = document.getElementById("desc");
var requestdate = document.getElementById("requestdate");
var dR = document.getElementById("dRequest");
var dS = document.getElementById("dStatus");

var ps = document.getElementById("ps");
var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
const d = new Date();
cell1.innerHTML = requestdate.value;
cell2.innerHTML ='<select name=\"dRequest\" id=\"case\"> <option value=\"case1\">คำร้อง1</option>  <option value=\"case2\">คำร้อง2</option></select>'
cell3.innerHTML = desc.value;
cell4.innerHTML = '<select name=\"dStatus\" id=\"dStatus\"><option value=\"s4\">อนุมัติ</option>  <option value=\"s5\">ไม่อนุมัติ</option></select>';
cell5.innerHTML = ps.value;
cell6.innerHTML='<input type="button" value="ChangeStatus" onclick="fn1(this)" class="button"/>';
   
}