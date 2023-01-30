function notification(){
    let count = 0;
    const xHttp = new XMLHttpRequest();
    xHttp.onload = function() {
        let json = this.responseText;
        try{
            let student = JSON.parse(json);
            for(let x = 0 ;x<student.length ; x++){
                if(student[x].status == "อยู่ระหว่างการตรวจสอบโดยอาจารย์"){
                    let child = document.createElement("p");
                    let name = student[x].studentFirstName +"  "+ student[x].studentLastName;
                    let link = student[x].addSubjectList[0].subjectCode.link("/U11_wait?subjectCode=" + student[x].addSubjectList[0].subjectCode);
                    child.innerHTML = "นักศึกษา "+name+" ขอเพิ่มถอนรายวิชา :"+link;

                    document.getElementById("notifyList").appendChild(child);
                    count+=1;
                }
            }
            if(count == 0){
                let child = document.createElement("p");
                child.innerHTML = "ไม่มีการแจ้งเตือน...";
                document.getElementById("notifyList").appendChild(child);  
                }
            
        }catch(err){
            alert('Error');
        }
    }
    xHttp.open("GET", "/getStudent");
    xHttp.send();
}

function notificationUser12(){
    let count = 0;
    const xHttp = new XMLHttpRequest();
    xHttp.onload = function() {
        let json = this.responseText;
        try{
            let student = JSON.parse(json);
            for(let x = 0 ;x<student.length ; x++){
                if(student[x].status == "อยู่ระหว่างการตรวจสอบโดยคณบดี"){
                    let child = document.createElement("p");
                    let name = student[x].studentFirstName +"  "+ student[x].studentLastName;
                    let link = student[x].studentId.link("/U12-wait?");
                    child.innerHTML = "นักศึกษา "+name+" ขอเพิ่มถอนรายวิชา :"+link;

                    document.getElementById("notifyList").appendChild(child);
                    count+=1;
                }
            }
            if(count == 0){
                let child = document.createElement("p");
                child.innerHTML = "ไม่มีการแจ้งเตือน...";
                document.getElementById("notifyList").appendChild(child);  
                }
            
        }catch(err){
            alert('Error');
        }
    }
    xHttp.open("GET", "/getStudent");
    xHttp.send();
}