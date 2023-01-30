function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let subjectCode = getParameterByName('subjectCode');

function loadDoc(){

	const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        let json = this.responseText;  

        try {
            let student = JSON.parse(json);

            for(let x in student) {

                if(student[x].addSubjectList) {

                    results = student[x].addSubjectList.find(function(st) {
                        return st.subjectCode.toLowerCase() == subjectCode.toLowerCase();
                    });

                }
                
                if(results) {
                    if(!JSON.stringify(student[x]).match(/subjectApprove/) && window.location.href.match(/U11_wait/) && student[x].status == 'อยู่ระหว่างการตรวจสอบโดยอาจารย์') {
                        
                        let tr = document.createElement("tr");
                        tr.setAttribute("id", "tr"+x);
                        document.getElementById("table").appendChild(tr);
                        
                        let td = document.createElement("td");
                        td.setAttribute("id", "td"+x);
                        document.getElementById("tr"+x).appendChild(td);

                        let label = document.createElement("label");
                        label.setAttribute("id", "label"+x);
                        label.setAttribute("class", "button-name");
                        label.setAttribute("onclick", "window.location.href='U11-info?subjectCode=" + subjectCode + "&studentId="+ student[x].studentId+'\'');
                        document.getElementById("td"+x).appendChild(label);

                        let text = document.createTextNode(student[x].studentFirstName+" "+student[x].studentLastName);

                        document.getElementById("label"+x).appendChild(text);
                    } else if(window.location.href.match(/U11_approve/)) {

                        if(student[x].subjectApprove == "approve") {
                            let tr = document.createElement("tr");
                            tr.setAttribute("id", "tr"+x);
                            document.getElementById("table").appendChild(tr);
                            
                            let td = document.createElement("td");
                            td.setAttribute("id", "td"+x);
                            document.getElementById("tr"+x).appendChild(td);

                            let label = document.createElement("label");
                            label.setAttribute("id", "label"+x);
                            label.setAttribute("class", "button-name");
                            label.setAttribute("onclick", "window.location.href='U11-info?subjectCode=" + subjectCode + "&studentId="+ student[x].studentId+'\'');
                            document.getElementById("td"+x).appendChild(label);

                            let text = document.createTextNode(student[x].studentFirstName+" "+student[x].studentLastName);

                            document.getElementById("label"+x).appendChild(text);
                        }

                    } else if(window.location.href.match(/U11_cancel/)) {

                        if(student[x].subjectApprove == "notapprove") {
                            let tr = document.createElement("tr");
                            tr.setAttribute("id", "tr"+x);
                            document.getElementById("table").appendChild(tr);
                            
                            let td = document.createElement("td");
                            td.setAttribute("id", "td"+x);
                            document.getElementById("tr"+x).appendChild(td);

                            let label = document.createElement("label");
                            label.setAttribute("id", "label"+x);
                            label.setAttribute("class", "button-name");
                            label.setAttribute("onclick", "window.location.href='U11-info?subjectCode=" + subjectCode + "&studentId="+ student[x].studentId+'\'');
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
	window.location.href = window.location.origin + "/U11_wait?subjectCode=" + subjectCode;
}

function approve() {
	window.location.href = window.location.origin + "/U11_approve?subjectCode=" + subjectCode;
}

function cancel() {
	window.location.href = window.location.origin + "/U11_cancel?subjectCode=" + subjectCode;
}