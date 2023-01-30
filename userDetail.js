function getCookieByName(name, url = document.cookie) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp(name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let usernameX = getCookieByName("username");
let studentx;
var info;
let userInfoBar = document.getElementById('userInfoBar');
userInfoBar.onload = shintaro_desu();

function getUserDataFromJson(){
    const XHttp = new XMLHttpRequest();
    XHttp.onload = function(){
        let link = this.responseText;
        user = JSON.parse(link);
        try{
            for(let i = 0 ;i<user.length ; i++){
              if(usernameX === user[i].studentId){
                    studentx = user[i];
                    break;                
                }
            }
            if (studentx != null) {
                recognUser();
            }
            else{
                //recognUser();
                info = "ผู้ช่วยศาสตราจารย์ดร.ทรงศักดิ์ รองวิริยะพานิช";
            }
           
            userInfoBar.innerHTML = info;
        }
        catch(error){
            alert("Error555");
         }
    }
    XHttp.open("GET","/getStudentUserData");
    XHttp.send(); 
}

function recognUser(){
    let regexStudent = new RegExp('\\d{10}');

    let regexTeacher = new RegExp('teacher'+'n*');

    let regexOfficer = new RegExp('officer'+'n*');

    if(regexOfficer.exec(usernameX)){

        info = usernameX;
            
    }
    else if(regexTeacher.exec(usernameX)){
        info = usernameX;
        console.log(info);
    }
    else if(regexStudent.exec(usernameX)){
        info = usernameX;
        info += ' ';
        info += studentx.studentFirstName;
        info += ' ';
        info += studentx.studentLastName;
    }


}

function shintaro_desu(){
    getUserDataFromJson();
}

