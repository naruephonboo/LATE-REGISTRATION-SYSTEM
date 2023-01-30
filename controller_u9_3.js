let tempdata;

function Confirm() {

    var result = confirm("ยืนยัน?")
    if (result) {

        const xhttp = new XMLHttpRequest();
        const stuID = "6305484132";

        let results;

        function loadedData(arr) {
            results = arr.find(function(st) {
                return st.studentId == stuID;
            });
            console.log(results);
            results['status'] = "อนุมัติ";

            var out = JSON.stringify(results);
            alert("บันทึกข้อมูลสำเร็จ");

            xhttp.onload = function() {}
            xhttp.open("POST", "/saveStudent");
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

        // let j_name = "test"; //document.getElementById('lname').value
        // let j_decison = "Yes"

        // let User_approve = {
        //     "name": j_name,
        //     "decision": j_decison
        // }

        // const obj = JSON.stringify(User_approve);
        // console.log(obj);
        // tempdata.status = "อยู่ระหว่างการตรวจสอบโดยคณบดี";
        // var out = JSON.stringify(tempdata);
        // console.log(out);
        // // alert("บันทึกข้อมูลสำเร็จ");
        // //window.location.href='U2.html';



        // const xhttp = new XMLHttpRequest();
        // xhttp.onload = function() {
        //     //let msg = this.reponseText;
        //     //alert(msg);
        //     console.log("onload");
        // }
        // xhttp.open("POST", "/saveStudent");
        // xhttp.send(out);

        //window.location.href ="U7.html"

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
        const stuID = "6305484132";

        let results;

        function loadedData(arr) {
            results = arr.find(function(st) {
                return st.studentId == stuID;
            });
            console.log(results);
            results['status'] = "ไม่อนุมัติ";

            var out = JSON.stringify(results);
            alert("บันทึกข้อมูลสำเร็จ");

            xhttp.onload = function() {}
            xhttp.open("POST", "/saveStudent");
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

let stuid = getParameterByName("studentId");

function loadDoc() {
    const XHttp = new XMLHttpRequest();
    XHttp.onload = function() {
        console.log(stuid);
        let link_info = this.responseText;
        let student = JSON.parse(link_info);
        tempdata = student[student.length - 1];
    }

    XHttp.open('GET', '/getStudent');
    XHttp.send();
}