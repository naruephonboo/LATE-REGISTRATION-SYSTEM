function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let id = getParameterByName("studentId");
let link;

function getCookieByName(name, url = document.cookie) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp(name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let username = getCookieByName("username");

function show_data(){
    const xHttp = new XMLHttpRequest();

    xHttp.onload = function(){
        link = this.responseText;
        try{
            let student = JSON.parse(link);
            for(let i = 0 ; i<student.length ; i++){
                if (student[i].studentId == username) {
                    if(student[i].status == 'อยู่ระหว่างการตรวจสอบโดยเจ้าหน้าที่'){
                        for(let k = 0 ; k<student[i].addSubjectList.length ; k++){
                        let y = document.createElement("TR");
                        document.getElementById("ListSTU").appendChild(y);
                        let value_link = document.createElement("TD");
                        let row = document.createElement("p");
                        let full_name= student[i].addSubjectList[k].subjectCode;
                        let link_info = full_name.link("/U6_info?studentId=" + student[i].studentId);
                        row.innerHTML = link_info;
                        value_link.appendChild(row);
                        document.getElementById("ListSTU").appendChild(value_link);
                    }
                        for(let d = 0 ; d<student[i].dropSubjectList.length ; d++){
                            let y = document.createElement("TR");
                            document.getElementById("ListSTU").appendChild(y);
                            let value_link = document.createElement("TD");
                            let row = document.createElement("p");
                            let full_name= student[i].dropSubjectList[d].subjectCode;
                            let link_info = full_name.link("/U6_info?studentId=" + student[i].studentId);
                            row.innerHTML = link_info;
                            value_link.appendChild(row);
                            document.getElementById("ListSTU").appendChild(value_link);
                        }
                    }
                    
                }

            }

        }catch(error){
            alert("Error show_data");
        }
    }
    xHttp.open("GET","/getStudent");
    xHttp.send();

}

var addSubjectList = []
var dropSubjectList = []

function loadData(){
    const XHttp = new XMLHttpRequest();
    XHttp.onload = function(){
        let link_info = this.responseText;
        let student = JSON.parse(link_info);
        try{
            for( let i = 0 ; i<student.length ; i++){
            if(student[i].studentId === id){
    document.getElementById("date").innerHTML = student[i].date;
    document.getElementById("name").innerHTML = student[i].studentFirstName;
    document.getElementById("surname").innerHTML = student[i].studentLastName;
    document.getElementById("snumber").innerHTML = student[i].studentId;
    document.getElementById("year").innerHTML = student[i].studentYear;
    document.getElementById("field").innerHTML = student[i].studentField;
    document.getElementById("professor").innerHTML = student[i].advisor;
    document.getElementById("address").innerHTML = student[i].addressNumber;
    document.getElementById("moo").innerHTML = student[i].moo;
    document.getElementById("tumbol").innerHTML = student[i].tumbol;
    document.getElementById("amphur").innerHTML = student[i].amphur;
    document.getElementById("county").innerHTML = student[i].provience;
    document.getElementById("postcode").innerHTML = student[i].postalCode;
    document.getElementById("sphone").innerHTML = student[i].mobliePhone;
    document.getElementById("hphone").innerHTML = student[i].phone;
    for(let k = 0 ; k<student[i].addSubjectList.length ; k++){
    document.getElementById("addSubject").innerHTML = student[i].addSubjectList[k].subjectCode;
    document.getElementById("asubjectName").innerHTML = student[i].addSubjectList[k].subjectName;
    document.getElementById("asubjectSection").innerHTML = student[i].addSubjectList[k].subjectSection;
    document.getElementById("asubjectDate").innerHTML = student[i].addSubjectList[k].subjectDate;
    document.getElementById("asubjectCredit").innerHTML = student[i].addSubjectList[k].subjectCredit;
    document.getElementById("asubjectTeacher").innerHTML = student[i].addSubjectList[k].subjectTeacher;
    document.getElementById("asubjectTeacherCheck").innerHTML = student[i].addSubjectList[k].subjectTeacherCheck;
    }
    for(let d = 0 ; d<student[i].dropSubjectList.length ; d++){
    document.getElementById("dropSubject").innerHTML = student[i].dropSubjectList[d].subjectCode;
    document.getElementById("dsubjectName").innerHTML = student[i].dropSubjectList[d].subjectName;
    document.getElementById("dsubjectSection").innerHTML = student[i].dropSubjectList[d].subjectSection;
    document.getElementById("dsubjectDate").innerHTML = student[i].dropSubjectList[d].subjectDate;
    document.getElementById("dsubjectCredit").innerHTML = student[i].dropSubjectList[d].subjectCredit;
    document.getElementById("dsubjectTeacher").innerHTML = student[i].dropSubjectList[d].subjectTeacher;
    document.getElementById("dsubjectTeacherCheck").innerHTML = student[i].dropSubjectList[d].subjectTeacherCheck; 
    }
    
    document.getElementById("reason").innerHTML = student[i].cause;
        }
        }

        for( let i = 0 ; i<student.length ; i++){
            if(student[i].studentId === id){
    document.getElementById("date").value = student[i].date;
    document.getElementById("name").value = student[i].studentFirstName;
    document.getElementById("surname").value = student[i].studentLastName;
    document.getElementById("snumber").value = student[i].studentId;
    document.getElementById("year").value = student[i].studentYear;
    document.getElementById("field").value = student[i].studentField;
    document.getElementById("professor").value = student[i].advisor;
    document.getElementById("address").value = student[i].addressNumber;
    document.getElementById("moo").value = student[i].moo;
    document.getElementById("tumbol").value = student[i].tumbol;
    document.getElementById("amphur").value = student[i].amphur;
    document.getElementById("county").value = student[i].provience;
    document.getElementById("postcode").value = student[i].postalCode;
    document.getElementById("sphone").value = student[i].mobliePhone;
    document.getElementById("hphone").value = student[i].phone;
    for(let k = 0 ; k<student[i].addSubjectList.length ; k++){
    document.getElementById("addSubject").value = student[i].addSubjectList[k].subjectCode;
    document.getElementById("asubjectName").value = student[i].addSubjectList[k].subjectName;
    document.getElementById("asubjectSection").value = student[i].addSubjectList[k].subjectSection;
    document.getElementById("asubjectDate").value = student[i].addSubjectList[k].subjectDate;
    document.getElementById("asubjectCredit").value = student[i].addSubjectList[k].subjectCredit;
    document.getElementById("asubjectTeacher").value = student[i].addSubjectList[k].subjectTeacher;
    document.getElementById("asubjectTeacherCheck").value = student[i].addSubjectList[k].subjectTeacherCheck;
    }
    for(let d = 0 ; d<student[i].dropSubjectList.length ; d++){
    document.getElementById("dropSubject").value = student[i].dropSubjectList[d].subjectCode;
    document.getElementById("dsubjectName").value = student[i].dropSubjectList[d].subjectName;
    document.getElementById("dsubjectSection").value = student[i].dropSubjectList[d].subjectSection;
    document.getElementById("dsubjectDate").value = student[i].dropSubjectList[d].subjectDate;
    document.getElementById("dsubjectCredit").value = student[i].dropSubjectList[d].subjectCredit;
    document.getElementById("dsubjectTeacher").value = student[i].dropSubjectList[d].subjectTeacher;
    document.getElementById("dsubjectTeacherCheck").value = student[i].dropSubjectList[d].subjectTeacherCheck; 
    }
    
    document.getElementById("reason").value = student[i].cause;
    addSubjectList = student[i].addSubjectList;
    dropSubjectList = student[i].dropSubjectList;
        }
        }
        }catch(error){
            alert("Error loadData")
        }
    
    }

    XHttp.open('GET','/getStudent');
    XHttp.send();
}

document.getElementById("cancle").onclick = function(){
    var result = confirm("ยืนยัน?")

    var student;
    if(result){
    const XHttp = new XMLHttpRequest();
    XHttp.onload = function(){
        let link = this.responseText;
        student = JSON.parse(link);
        try{
            for(let i = 0 ;i<student.length ; i++){
              if(student[i].studentId === id){
                    delete student[i];
                    Del(JSON.stringify(student));
                }
            }

        }
        catch(error){
            alert("Error cancle");
         }
    }
    XHttp.open("GET","/getStudent");
    XHttp.send(); 
    }
    else{
        $('form').on('submit',function(e){
        e.preventDefault();});
    }

    
}

function Del(index){

    const xHttp = new XMLHttpRequest();
    xHttp.onload = function(){

    }
    xHttp.open("POST", "/saveMe");
    xHttp.send(index);
}
