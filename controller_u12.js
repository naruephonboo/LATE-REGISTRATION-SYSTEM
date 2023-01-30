function loadDoc(){

	const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        let json = this.responseText;  

        try {
            let student = JSON.parse(json);
            for(let x in student) {
                if(JSON.stringify(student[x]).match(/"subjectApprove":"approve"/)) {
                    if(!student[x].deanApprove && window.location.href.match(/U12-wait/)) {
                        
                        let tr = document.createElement("tr");
                        tr.setAttribute("id", "tr"+x);
                        document.getElementById("table").appendChild(tr);
                        
                        let td = document.createElement("td");
                        td.setAttribute("id", "td"+x);
                        document.getElementById("tr"+x).appendChild(td);

                        let label = document.createElement("label");
                        label.setAttribute("id", "label"+x);
                        label.setAttribute("class", "button-name");
                        label.setAttribute("onclick", "window.location.href='U12-info?studentId="+ student[x].studentId+'\'');
                        document.getElementById("td"+x).appendChild(label);

                        let text = document.createTextNode(student[x].studentFirstName+" "+student[x].studentLastName);

                        document.getElementById("label"+x).appendChild(text);
                    } else if(window.location.href.match(/U12-approve/)) {
                        if(student[x].status == "อนุมัติโดยคณบดี") {
                            let tr = document.createElement("tr");
                            tr.setAttribute("id", "tr"+x);
                            document.getElementById("table").appendChild(tr);
                            
                            let td = document.createElement("td");
                            td.setAttribute("id", "td"+x);
                            document.getElementById("tr"+x).appendChild(td);

                            let label = document.createElement("label");
                            label.setAttribute("id", "label"+x);
                            label.setAttribute("class", "button-name");
                            label.setAttribute("onclick", "window.location.href='U12-info?studentId="+ student[x].studentId+'\'');
                            document.getElementById("td"+x).appendChild(label);

                            let text = document.createTextNode(student[x].studentFirstName+" "+student[x].studentLastName);

                            document.getElementById("label"+x).appendChild(text);
                        }

                    } else if(window.location.href.match(/U12-cancel/)) {
                        if(student[x].status == "ไม่อนุมัติโดยคณบดี") {
                            let tr = document.createElement("tr");
                            tr.setAttribute("id", "tr"+x);
                            document.getElementById("table").appendChild(tr);
                            
                            let td = document.createElement("td");
                            td.setAttribute("id", "td"+x);
                            document.getElementById("tr"+x).appendChild(td);

                            let label = document.createElement("label");
                            label.setAttribute("id", "label"+x);
                            label.setAttribute("class", "button-name");
                            label.setAttribute("onclick", "window.location.href='U12-info?studentId="+ student[x].studentId+'\'');
                            document.getElementById("td"+x).appendChild(label);

                            let text = document.createTextNode(student[x].studentFirstName+" "+student[x].studentLastName);

                            document.getElementById("label"+x).appendChild(text);
                        }
                    }
                }

            }
            
        } catch(err) {
            alert('Not Found');
        }
    }
    xhttp.open("GET", "/getStudent", true);
    xhttp.send();
	
}

function wait() {
	window.location.href = window.location.origin + "/U12-wait";
}

function approve() {
	window.location.href = window.location.origin + "/U12-approve";
}

function cancel() {
	window.location.href = window.location.origin + "/U12-cancel";
}