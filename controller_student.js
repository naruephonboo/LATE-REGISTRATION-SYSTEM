let add_amount = 0;
let del_amount = 0;
document.getElementById("add_subject").value = add_amount;
document.getElementById("del_subject").value = del_amount;

document.getElementById("date").setAttribute("required", "true");
var addSubjectList = []
var dropSubjectList = []


function addToAddTable(num) {
    let myElementsTr = document.createElement("tr");
    myElementsTr.setAttribute("id", "tr_1_" + num);
    document.getElementById("add_table").appendChild(myElementsTr);



    for (let i = 1; i <= 8; i++) {
        let myElementsTd = document.createElement("td");
        myElementsTd.setAttribute("id", "td" + num + "_" + i);
        document.getElementById("tr_1_" + num).appendChild(myElementsTd);
    }

    var p = document.createElement("p");
    p.innerHTML = num + ".";
    document.getElementById("td" + num + "_1").appendChild(p);

    //input 1
    var input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add" + num + "_1");
    //input.style.width = "60px";
    document.getElementById("td" + num + "_2").appendChild(input);

    //input 2
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add" + num + "_2");
    document.getElementById("td" + num + "_3").appendChild(input);

    //input 3
    input = document.createElement("input");
    input.setAttribute("type", "sec");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add" + num + "_3");
    document.getElementById("td" + num + "_4").appendChild(input);

    //input 4
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add" + num + "_4");
    document.getElementById("td" + num + "_5").appendChild(input);

    //input 5
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add" + num + "_5");
    document.getElementById("td" + num + "_6").appendChild(input);

    //input 6
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add" + num + "_6");
    document.getElementById("td" + num + "_7").appendChild(input);

    //input 7
    input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("disabled", "disabled");
    input.style.margin = "10px";
    input.style.marginLeft = "20px";
    input.setAttribute("id", "add" + num + "_7");
    document.getElementById("td" + num + "_8").appendChild(input);
    addSubjectList.push({
        "subjectCode": document.getElementById("add" + num + "_1").value,
        "subjectName": document.getElementById("add" + num + "_2").value,
        "subjectSection": document.getElementById("add" + num + "_3").value,
        "subjectDate": document.getElementById("add" + num + "_4").value,
        "subjectCredit": document.getElementById("add" + num + "_5").value,
        "subjectTeacher": document.getElementById("add" + num + "_6").value,
        "subjectTeacherCheck": false
    });

}

function removeToAddTable() {
    var select = document.getElementById('add_table');
    select.removeChild(select.lastChild);
    addSubjectList.pop();
}

function addToDelTable(num) {
    let myElementsTr = document.createElement("tr");
    myElementsTr.setAttribute("id", "tr_2_" + num);
    document.getElementById("del_table").appendChild(myElementsTr);



    for (let i = 1; i <= 8; i++) {
        let myElementsTd = document.createElement("td");
        myElementsTd.setAttribute("id", "td2" + num + "_" + i);
        document.getElementById("tr_2_" + num).appendChild(myElementsTd);
    }

    var p = document.createElement("p");
    p.innerHTML = num + ".";
    document.getElementById("td2" + num + "_1").appendChild(p);

    //input 1
    var input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop" + num + "_1");
    document.getElementById("td2" + num + "_2").appendChild(input);

    //input 2
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop" + num + "_2");
    document.getElementById("td2" + num + "_3").appendChild(input);

    //input 3
    input = document.createElement("input");
    input.setAttribute("type", "sec");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop" + num + "_3");
    document.getElementById("td2" + num + "_4").appendChild(input);

    //input 4
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop" + num + "_4");
    document.getElementById("td2" + num + "_5").appendChild(input);

    //input 5
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop" + num + "_5");
    document.getElementById("td2" + num + "_6").appendChild(input);

    //input 6
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop" + num + "_6");
    document.getElementById("td2" + num + "_7").appendChild(input);

    //input 7
    input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("disabled", "disabled");
    input.style.margin = "10px";
    input.style.marginLeft = "20px";
    input.setAttribute("id", "drop" + num + "_7");
    document.getElementById("td2" + num + "_8").appendChild(input);
    dropSubjectList.push({
        "subjectCode": document.getElementById("drop" + num + "_1").value,
        "subjectName": document.getElementById("drop" + num + "_2").value,
        "subjectSection": document.getElementById("drop" + num + "_3").value,
        "subjectDate": document.getElementById("drop" + num + "_4").value,
        "subjectCredit": document.getElementById("drop" + num + "_5").value,
        "subjectTeacher": document.getElementById("drop" + num + "_6").value,
        "subjectTeacherCheck": false
    });
}

function removeToDelTable() {
    var select = document.getElementById('del_table');
    select.removeChild(select.lastChild);
    dropSubjectList.pop();
}

document.getElementById("addToAdd").onclick = function() {
    add_amount += 1;
    document.getElementById("add_subject").value = add_amount;

    addToAddTable(add_amount);

}
document.getElementById("removeToAdd").onclick = function() {
    if (add_amount > 0) {
        removeToAddTable();
        add_amount -= 1;
        document.getElementById("add_subject").value = add_amount;


    }


}

document.getElementById("addToDel").onclick = function() {
    del_amount += 1;
    document.getElementById("del_subject").value = del_amount;

    addToDelTable(del_amount);

}
document.getElementById("removeToDel").onclick = function() {
    if (del_amount > 0) {
        removeToDelTable();
        del_amount -= 1;
        document.getElementById("del_subject").value = del_amount;


    }


}

$('#form').submit(function(e) {
    e.preventDefault();
});

function updateSubjectList() {
    addSubjectList.forEach(function(item, index) {
        item["subjectCode"] = document.getElementById("add" + (index + 1) + "_1").value;
        item["subjectName"] = document.getElementById("add" + (index + 1) + "_2").value;
        item["subjectSection"] = document.getElementById("add" + (index + 1) + "_3").value;
        item["subjectDate"] = document.getElementById("add" + (index + 1) + "_4").value;
        item["subjectCredit"] = document.getElementById("add" + (index + 1) + "_5").value;
        item["subjectTeacher"] = document.getElementById("add" + (index + 1) + "_6").value;
        item["subjectTeacherCheck"] = document.getElementById("add" + (index + 1) + "_7").value;


    });

    dropSubjectList.forEach(function(item, index) {
        item["subjectCode"] = document.getElementById("drop" + (index + 1) + "_1").value;
        item["subjectName"] = document.getElementById("drop" + (index + 1) + "_2").value;
        item["subjectSection"] = document.getElementById("drop" + (index + 1) + "_3").value;
        item["subjectDate"] = document.getElementById("drop" + (index + 1) + "_4").value;
        item["subjectCredit"] = document.getElementById("drop" + (index + 1) + "_5").value;
        item["subjectTeacher"] = document.getElementById("drop" + (index + 1) + "_6").value;
        item["subjectTeacherCheck"] = document.getElementById("drop" + (index + 1) + "_7").value;


    });



}

document.getElementById("submit").onclick = function() {
    var data = {
        "date": document.getElementById("date").value,
        "studentFirstName": document.getElementById("name").value,
        "studentLastName": document.getElementById("surname").value,
        "studentId": document.getElementById("snumber").value,
        "studentYear": document.getElementById("year").value,
        "studentField": document.getElementById("field").value,
        "advisor": document.getElementById("professer").value,
        "addressNumber": document.getElementById("address").value,
        "moo": document.getElementById("moo").value,
        "tumbol": document.getElementById("tumbol").value,
        "amphur": document.getElementById("amphur").value,
        "provience": document.getElementById("county").value,
        "postalCode": document.getElementById("postcode").value,
        "mobliePhone": document.getElementById("sphone").value,
        "phone": document.getElementById("hphone").value,
        "cause": document.getElementById("reason").value,
        "status": "อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่"

    };

    updateSubjectList();

    data["addSubjectList"] = addSubjectList;
    data["dropSubjectList"] = dropSubjectList;
    if (add_amount <= 0 && del_amount <= 0) {
        alert("ต้องมีรายวิชาที่จะเพิ่มหรือถอนอย่างน้อย 1 วิชา");
    } else if (document.getElementById("date").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("titlename").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("name").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("surname").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("snumber").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    if (document.getElementById("year").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("field").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("professer").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("address").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("moo").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("tumbol").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("amphur").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("county").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("postcode").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("sphone").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (document.getElementById("reason").value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else {
        var out = JSON.stringify(data);
        console.log(out);
        alert("บันทึกข้อมูลสำเร็จ");
        //window.location.href='U2.html';

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            //let msg = this.reponseText;
            //alert(msg);
            console.log("onload");
        }
        xhttp.open("POST", "/saveStudent");
        xhttp.send(out);
        location.href = "U2.html"

    }
}