var http = require('http');
var fs = require('fs');
var os = require('os');
http.createServer(function(req, res) {
    console.log("run node");
    if (req.method === 'GET') {
        var url = '';
        var index = req.url.indexOf('?');
        var path;
        if (index != -1)
            path = req.url.substring(0, index);
        else
            path = req.url;
        console.log('path: ' + path);
        switch (path) {
            case '/getUserStudent':
                url = 'user_student.json';
                break;
            case '/getUserOfficer':
                url = 'user_officer.json';
                break;
            case '/getUserTeacher':
                url = 'user_teacher.json';
                break;
            case '/getStudent':
                url = 'data.json';
                break;
            case '/getStudentUserData':
                url = 'allUserData.json';
                break;
            case '/getDecision':
                url = 'decision.json';
                break;
            case '/U2_petition':
                url = 'U2_petition.html';
                break;
            case '/U2':
                url = 'U2.html';
                break;
            case '/U2_condition':
                url = 'U2_condition.html';
                break;
            case '/U5_edit':
                url = 'U5_edit.html';
                break; 
            case '/U11-info':
                url = 'U11-info.html';
                break;
            case '/U11':
                url = 'U11.html';
                break;
            case '/U11_approve':
                url = 'U11_approve.html';
                break;
            case '/U11_cancel':
                url = 'U11_cancel.html';
                break;
            case '/U11_wait':
                url = 'U11_wait.html';
                break;
            case '/U12-wait':
                url = 'U12-wait.html';
                break;
            case '/U12-mainpage':
                url = 'U12-mainpage.html';
                break;
            case '/U12-approve':
                url = 'U12-approve.html';
                break;
            case '/U12-cancel':
                url = 'U12-cancel.html';
                break;
            case '/U12-info':
                url = 'U12-info.html';
                break;
            case '/U6_info':
                url = 'U6_info.html';
                break;
            case '/U7':
                url = 'U7.html';
                break;
            case '/U7old':
                url = 'U7old.html';
                break;
            case '/U9':
                url = 'U9.html';
                break;
            case '/U9_2':
                url = 'U9_2.html';
                break;
            case '/U9_3':
                url = 'U9_3.html';
                break;
            case '/U9_info':
                url = 'U9_info.html';
                break;
            case '/exit':
                process.exit();
                break;
            default:
                if (req.url.includes('.')) {
                    url = req.url;
                    break;
                }
                url = 'redirect.html';
                break;
        }

        console.log(url);
        if (url) {
            if (url.charAt(0) == '/') {
                url = url.substring(1);
            }
            fs.readFile(url, function(err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.write('<h1>404 NOT FOUND</h1>');
                    return res.end();
                } else {
                    if (url.endsWith('.html'))
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                    else if (url.endsWith('.js')) {
                        res.writeHead(200, { 'Content-Type': 'text/javascript' });
                    } else if (url.endsWith('.json')) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                    }
                    res.write(data);
                    return res.end();
                }
            });
        } else {
            res.end();
        }
    } else if (req.method === 'POST') {
        console.log(req.url);
        //console.log(req);

        var url = '';
        var index = req.url.indexOf('?');
        var path;
        if (index != -1)
            path = req.url.substring(0, index);
        else
            path = req.url;
        console.log('path: ' + path);
        switch (path) {
            case '/saveStudent':
                req.on('data', chunk => {
                    console.log("hello");
                    let json = JSON.parse(chunk);
                    let outJson = [];
                    let data = fs.readFileSync('data.json', { encoding: 'utf8', flag: 'r' });
                    outJson = JSON.parse(data);
                    outJson.push(json);
                    outJson = JSON.stringify(outJson);

                    fs.writeFileSync('data.json', outJson);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end();
                    return res.end();
                })
                break;
            case '/saveStudentAll':
                req.on('data', chunk => {
                    console.log('saveStudentAll');
                    let json = JSON.parse(chunk);
                    let outJson = [];

                    let data = fs.readFileSync('data.json', { encoding: 'utf8', flag: 'r' });
                    outJson = JSON.stringify(json);

                    fs.writeFileSync('data.json', outJson);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end();
                    return res.end();
                })
                break;
            case '/sentStudent':
                req.on('data', chunk => {
                    let json = JSON.parse(chunk);
                    let outJson = [];
                    let decision = fs.readFileSync('decision.json', { encoding: 'utf8', flag: 'r' });
                    outJson = JSON.parse(decision);
                    outJson.push(json);
                    outJson = JSON.stringify(outJson);

                    fs.writeFileSync('decision.json', outJson);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end();
                    return res.end();
                })
                break;
            case '/saveMe':
                req.on('data', chunk => {
                    let json = JSON.parse(chunk);
                    let outJson = [];
                    let data = fs.readFileSync('data.json', { encoding: 'utf8', flag: 'r' });

                    for (let i = 0; i < json.length; i++) {
                        if (json[i] != null) {
                            outJson.push(json[i]);
                        }
                    }

                    outJson = JSON.stringify(outJson);

                    fs.writeFileSync('data.json', outJson);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end();
                    return res.end();
                })
                break;
            case '/updateStudent':
                req.on('data', chunk => {
                    let json = JSON.parse(chunk);

                    let outJson = [];
                    let data = fs.readFileSync('data.json', { encoding: 'utf8', flag: 'r' });
                    outJson = JSON.parse(data);
                    console.log("hahahahahahahahahahah");

                    let i = outJson.findIndex(function(st) {
                        return st.studentId == json.studentId;
                        console.log("yes yesy easy");
                    });

                    outJson[i] = json;
                    outJson = JSON.stringify(outJson);

                    fs.writeFileSync('data.json', outJson);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end();
                    return res.end();
                })
                break;
            default:
                res.end();
        }

        console.log(url);


    } else {
        res.end();
    }
}).listen(8080);