function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const stuid = urlParams.get('studentId');
console.log(stuid);

let tempdata;

function Confirm() {

    var result = confirm("ยืนยัน?")
    if (result) {

        const xhttp = new XMLHttpRequest();

        let results;

        function loadedData(arr) {

            for (let index = 0; index < arr.length; index++) {
                if (arr[index].studentId == stuid) {
                    arr[index].status = "อนุมัติโดยคณบดี";
                }
            }

            var out = JSON.stringify(arr);
            alert("บันทึกข้อมูลสำเร็จ");

            xhttp.onload = function() {}
            xhttp.open("POST", "/saveStudentAll");
            xhttp.send(out);

        }

        xhttp.onload = function() {
            console.log('ready');
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                loadedData(myArr);
            }
        };

        xhttp.open("GET", "/getStudent", true);
        xhttp.send();

        return true;

    } else {
        $('form').on('submit', function(e) {
            e.preventDefault();
        });
    }


}

function Cancel() {
    var result = confirm("ยืนยัน?")
    if (result == true) {
        const xhttp = new XMLHttpRequest();

        let results;

        function loadedData(arr) {

            for (let index = 0; index < arr.length; index++) {
                if (arr[index].studentId == stuid) {
                    arr[index].status = "ไม่อนุมัติ";
                }
            }

            var out = JSON.stringify(arr);
            alert("บันทึกข้อมูลสำเร็จ");

            xhttp.onload = function() {}
            xhttp.open("POST", "/saveStudentAll");
            xhttp.send(out);

        }

        xhttp.onload = function() {
            console.log('ready');
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                loadedData(myArr);
            }
        };

        xhttp.open("GET", "/getStudent", true);
        xhttp.send();

        return true;

    } else {
        $('form').on('submit', function(e) {
            e.preventDefault();
        });
    }
}


function loadDoc() {
    const XHttp = new XMLHttpRequest();
    XHttp.onload = function() {
        let link_info = this.responseText;
        let student = JSON.parse(link_info);

        console.log('find ' + stuid);
        let studentInfo = student[student.findIndex(function(st) {
            return st.studentId == stuid;
        })];

        console.log(studentInfo);
        document.getElementById("hFullName").innerText = 'ชื่อ : ' + studentInfo.studentFirstName + ' ' + studentInfo.studentLastName;
        document.getElementById("pTitle").innerText = 'รหัสนักศึกษา : ' + studentInfo.studentId;

    }

    XHttp.open('GET', '/getStudent');
    XHttp.send();
}