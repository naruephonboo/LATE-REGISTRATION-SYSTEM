function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let id = getParameterByName('studentId');
let student;
var results;


let add_amount = 0;
let del_amount = 0;
document.getElementById("add_subject").value = add_amount;
document.getElementById("del_subject").value = del_amount;

document.getElementById("date").setAttribute("required", "true");
var addSubjectList = []
var dropSubjectList = []




function addToAddTable(num){
    let myElementsTr = document.createElement("tr");
    myElementsTr.setAttribute("id", "tr_1_"+num);
    document.getElementById("add_table").appendChild(myElementsTr);


    
    for(let i=1;i<=8;i++){
        let myElementsTd = document.createElement("td");
        myElementsTd.setAttribute("id", "td"+num+"_"+i);
        document.getElementById("tr_1_"+num).appendChild(myElementsTd);
    }

    var p = document.createElement("p");
    p.innerHTML = num+".";
    document.getElementById("td"+num+"_1").appendChild(p);

    //input 1
    var input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add"+num+"_1");
    //input.style.width = "60px";
    document.getElementById("td"+num+"_2").appendChild(input);

    //input 2
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add"+num+"_2");
    document.getElementById("td"+num+"_3").appendChild(input);

    //input 3
    input = document.createElement("input");
    input.setAttribute("type", "sec");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add"+num+"_3");
    document.getElementById("td"+num+"_4").appendChild(input);

    //input 4
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add"+num+"_4");
    document.getElementById("td"+num+"_5").appendChild(input);

    //input 5
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add"+num+"_5");
    document.getElementById("td"+num+"_6").appendChild(input);

    //input 6
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "add"+num+"_6");
    document.getElementById("td"+num+"_7").appendChild(input);

    //input 7
    input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("disabled", "disabled");
    input.style.margin = "10px";
    input.style.marginLeft = "20px";
    input.setAttribute("id", "add"+num+"_7");
    document.getElementById("td"+num+"_8").appendChild(input);
    addSubjectList.push({"subjectCode": document.getElementById("add"+num+"_1").value,
            "subjectName": document.getElementById("add"+num+"_2").value,
            "subjectSection": document.getElementById("add"+num+"_3").value,
            "subjectDate": document.getElementById("add"+num+"_4").value,
            "subjectCredit": document.getElementById("add"+num+"_5").value,
            "subjectTeacher": document.getElementById("add"+num+"_6").value,
            "subjectTeacherCheck": false});

}

function removeToAddTable(){
    var select = document.getElementById('add_table');
    select.removeChild(select.lastChild);
    addSubjectList.pop();
}

function addToDelTable(num){
    let myElementsTr = document.createElement("tr");
    myElementsTr.setAttribute("id", "tr_2_"+num);
    document.getElementById("del_table").appendChild(myElementsTr);


    
    for(let i=1;i<=8;i++){
        let myElementsTd = document.createElement("td");
        myElementsTd.setAttribute("id", "td2"+num+"_"+i);
        document.getElementById("tr_2_"+num).appendChild(myElementsTd);
    }

    var p = document.createElement("p");
    p.innerHTML = num+".";
    document.getElementById("td2"+num+"_1").appendChild(p);

    //input 1
    var input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop"+num+"_1");
    document.getElementById("td2"+num+"_2").appendChild(input);

    //input 2
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop"+num+"_2");
    document.getElementById("td2"+num+"_3").appendChild(input);

    //input 3
    input = document.createElement("input");
    input.setAttribute("type", "sec");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop"+num+"_3");
    document.getElementById("td2"+num+"_4").appendChild(input);

    //input 4
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop"+num+"_4");
    document.getElementById("td2"+num+"_5").appendChild(input);

    //input 5
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop"+num+"_5");
    document.getElementById("td2"+num+"_6").appendChild(input);

    //input 6
    input = document.createElement("input");
    input.setAttribute("type", "input");
    input.setAttribute("class", "form-control");
    input.setAttribute("required", "true");
    input.setAttribute("id", "drop"+num+"_6");
    document.getElementById("td2"+num+"_7").appendChild(input);

    //input 7
    input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("disabled", "disabled");
    input.style.margin = "10px";
    input.style.marginLeft = "20px";
    input.setAttribute("id", "drop"+num+"_7");
    document.getElementById("td2"+num+"_8").appendChild(input);
    dropSubjectList.push({"subjectCode": document.getElementById("drop"+num+"_1").value,
            "subjectName": document.getElementById("drop"+num+"_2").value,
            "subjectSection": document.getElementById("drop"+num+"_3").value,
            "subjectDate": document.getElementById("drop"+num+"_4").value,
            "subjectCredit": document.getElementById("drop"+num+"_5").value,
            "subjectTeacher": document.getElementById("drop"+num+"_6").value,
            "subjectTeacherCheck": false});
}

function removeToDelTable(){
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
    if(add_amount > 0) {
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
    if(del_amount > 0) {
        removeToDelTable();
        del_amount -= 1;
        document.getElementById("del_subject").value = del_amount;

        
    }
    
    
}
$('#form').submit(function (e) {
    e.preventDefault();
});

function updateSubjectList(){
    addSubjectList.forEach(function(item, index){
        item["subjectCode"] = document.getElementById("add"+(index+1)+"_1").value;
        item["subjectName"] = document.getElementById("add"+(index+1)+"_2").value;
        item["subjectSection"] = document.getElementById("add"+(index+1)+"_3").value;
        item["subjectDate"] = document.getElementById("add"+(index+1)+"_4").value;
        item["subjectCredit"] = document.getElementById("add"+(index+1)+"_5").value;
        item["subjectTeacher"] = document.getElementById("add"+(index+1)+"_6").value;
        item["subjectTeacherCheck"] = document.getElementById("add"+(index+1)+"_7").value;


    });

     dropSubjectList.forEach(function(item, index){
        item["subjectCode"] = document.getElementById("drop"+(index+1)+"_1").value;
        item["subjectName"] = document.getElementById("drop"+(index+1)+"_2").value;
        item["subjectSection"] = document.getElementById("drop"+(index+1)+"_3").value;
        item["subjectDate"] = document.getElementById("drop"+(index+1)+"_4").value;
        item["subjectCredit"] = document.getElementById("drop"+(index+1)+"_5").value;
        item["subjectTeacher"] = document.getElementById("drop"+(index+1)+"_6").value;
        item["subjectTeacherCheck"] = document.getElementById("drop"+(index+1)+"_7").value;


    });

    

}

function loadDoc(){
    const XHttp = new XMLHttpRequest();
    XHttp.onload = function() {

        let json = this.responseText;
        student = JSON.parse(json);
        change = JSON.parse(json);
        try {
            for( let i = 0 ;i<student.length ; i++){
                if(student[i].studentId === id){
                document.getElementById("snumber").innerHTML = student[i].studentId;
                document.getElementById("snumber2").innerHTML = student[i].studentId;
                document.getElementById("date").innerHTML = student[i].date;
                document.getElementById("name").innerHTML = student[i].studentFirstName;
                document.getElementById("surname").innerHTML = student[i].studentLastName;
                }
            }
            
            
    }catch(err){
        alert('Not Found');
    }
    }
    XHttp.open("GET", "/getStudent", true);
    XHttp.send();
    
}


function Edit(e) {

    if(add_amount<=0&&del_amount<=0) {
        alert("ต้องมีรายวิชาที่จะเพิ่มหรือถอนอย่างน้อย 1 วิชา");
    }
    else if(document.getElementById("snumber").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("year").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("field").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("professer").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("address").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("moo").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("tumbol").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("amphur").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("county").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("postcode").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("sphone").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(document.getElementById("reason").value == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }

    var result = confirm("อนุมัติรายการคำร้องขอเพิ่ม-ถอนรายวิชาของนักศึกษาหรือไม่")
    if(result){
        var out;

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){

            let json = this.responseText;
            
            try {
                student = JSON.parse(json);
                results = student.find(function(st) {
                    console.log("hello");
                    return st.studentId == id;
                });
                console.log(results);
      results.studentYear = document.getElementById('year').value;
      results.studentField = document.getElementById('field').value;
      results.advisor = document.getElementById('professer').value;
      results.addressNumber = document.getElementById("address").value;
      results.moo = document.getElementById("moo").value;
      results.tumbol = document.getElementById("tumbol").value;
      results.amphur = document.getElementById("amphur").value;
      results.provience = document.getElementById("county").value;
      results.postalCode = document.getElementById("postcode").value;
      results.mobliePhone = document.getElementById("sphone").value;
      results.phone = document.getElementById("hphone").value;

    results.cause = document.getElementById("reason").value;

    //updateSubjectList();

     results.addSubjectList = addSubjectList;
     results.dropSubjectList = dropSubjectList;
     out = JSON.stringify(results);
     console.log(out);
     console.log(JSON.stringify(results));

     sentTo(out);
                
            } catch (err) {
                alert('Not Found');
            }
            
        }
        xhttp.open("GET", "/getStudent?studentId=" + id, true);
        xhttp.send();
        
     
        alert("บันทึกข้อมูลสำเร็จ");

        window.location.href = window.location.origin + "/U5.html";

        return true;
    }
    else {
        return false;
    }
    
    

        //window.location.href='U2.html';

        //รอเชื่อม u5 กับ u5_edit ให้เข้ากัน
        //พอกดปุ่มแก้ไขข้อมูลใน u5 จะส่ง url เป็น U5_edit?&studentId=
    

}

function sentTo(out){

        const xhttp = new XMLHttpRequest();
         xhttp.onload = function(){}
        xhttp.open("POST", "/updateStudent");
        xhttp.send(out);
}

function show_data(){
    const xHttp = new XMLHttpRequest();

    xHttp.onload = function(){
        link = this.responseText;
        try{
            student = JSON.parse(link);

            for(let k = 0 ; k<student.length ; k++){

                    let y = document.createElement("TR");
                    document.getElementById("List_doc").appendChild(y);
                    let date_TD = document.createElement("TD");
                    let detail_TD = document.createElement("TD");
                    let approve_TD = document.createElement("TD");
                    let button_TD = document.createElement("TD");
                    let row_date = document.createElement("p");
                    let row_detail = document.createElement("p");
                    let row_approve = document.createElement("p");
                    let label = document.createElement("label");
                        label.setAttribute("class", "button-nav");
                        label.setAttribute("onclick", "window.location.href='U5_edit?&studentId="+ student[k].studentId+'\'');


                    if(student[k].status == "อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่"){
                    let date_ = student[k].date;
                    let detail = "ชื่อวิชา :" + student[k].addSubjectList[0].subjectName + "<br>รหัสวิชา :" + student[k].addSubjectList[0].subjectName + "<br>section :" 
                                + student[k].addSubjectList[0].subjectSection;
                    let approve = "ยังไม่อนุมัติ";
                    let button_text  = "แก้ไขคำร้อง";

                    row_approve.innerHTML = approve;
                    row_detail.innerHTML = detail;
                    row_date.innerHTML = date_;
                    label.innerHTML = button_text;
                    
                    date_TD.appendChild(row_date);
                    detail_TD.appendChild(row_detail);
                    approve_TD.appendChild(row_approve);
                    button_TD.appendChild(label);

                    document.getElementById("List_doc").appendChild(date_TD);
                    document.getElementById("List_doc").appendChild(detail_TD);
                    document.getElementById("List_doc").appendChild(approve_TD);
                    document.getElementById("List_doc").appendChild(button_TD);

                    }
                    
                    

                
            }

        }catch(error){
            alert("Error");
        }
    }
    xHttp.open("GET","/getStudent");
    xHttp.send();

}