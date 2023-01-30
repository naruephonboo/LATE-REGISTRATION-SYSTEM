function fn1(row) {
    var table = document.getElementById("student");
    var text = table.rows[row].cells[2].innerHTML;
    if (text == "") {

        var table = document.getElementById("student");
        table.rows[row].cells[2].innerHTML = "อยู่ระหว่างการตรวจสอบโดยอาจารย์";
    } else if (text == "อยู่ระหว่างการตรวจสอบโดยอาจารย์") {
        var table = document.getElementById("student");
        table.rows[row].cells[2].innerHTML = "อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่";
    } else if (text == "อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่") {
        var table = document.getElementById("student");
        table.rows[row].cells[2].innerHTML = "อยู่ระหว่างการตรวจสอบโดยคณบดี";
    } else {
        var txt;
        var r = confirm("Approve!");
        if (r == true) {
            txt = "อนุมัติ";
        } else {
            txt = "ไม่อนุมัติ";
        }
        table.rows[row].cells[2].innerHTML = txt;
    }
    //	alert('fn1 1');
}

function fn2() {
    var table = document.getElementById("student");
    table.rows[1].cells[3].innerHTML = "อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่";
}

function fn3() {
    var table = document.getElementById("student");
    table.rows[1].cells[3].innerHTML = "อยู่ระหว่างการตรวจสอบโดยคณบดี";
}

function fn4() {
    var table = document.getElementById("student");
    table.rows[1].cells[3].innerHTML = '<select name=\"dStatus\" id=\"dStatus\"><option value=\"yes\">อนุมัติ</option>  <option value=\"no\">ไม่อนุมัติ</option></select>';
}

function fn5() {
    var table = document.getElementById("student");
    table.rows[1].cells[3].innerHTML = '<select name=\"dStatus\" id=\"dStatus\"><option value=\"yes\">อนุมัติ</option>  <option value=\"no\">ไม่อนุมัติ</option></select>';
}

function AddRowFunction(jsondate, nisit, cause, status, remark) {
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


    const d = new Date();
    cell1.innerHTML = jsondate;
    cell2.innerHTML = cause;
    cell3.innerHTML = status;
    cell4.innerHTML = '-';

}



function init() {

    loadJSON(function(response) {
        // Parse JSON string into object
        //const urlParams = new URLSearchParams(window.location.href);
        //const stuid = urlParams.get('stuid');

        var actual_JSON = JSON.parse(response);
        //alert(actual_JSON[0].date);
        //alert(stuid);
        /*
    var actual_JSON = JSON.parse(response).filter(function (entry) {
    return entry.studentId === '2222222222';
	});
	*/

        actual_JSON.forEach(function(k, index) {
            let item = actual_JSON[index];
            console.log(item);
            AddRowFunction(item.date, '(' + item.studentId + ')' + item.studentFirstName + ' ' + item.studentLastName, item.cause, item.status);
        });


        // const myJSON = JSON.stringify(actual_JSON);

        // alert(actual_JSON[0].date);
    });
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send();
}