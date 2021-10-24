
function switch1()
{
    console.log("portal changed");
    var userLogin = document.getElementsByClassName("portal");
    if(userLogin[0].style.visiblity == "visible"){
        userLogin[0].style.visibility = "hidden";
    } else {
        userLogin[0].style.visibility = "visible";
    }

    var register = document.getElementsByClassName("regForm");
    if(register[0].style.visibility == "hidden"){
        register[0].style.visibility = "visible";
    } else {
        register[0].style.visibility = "hidden";
    }
}

function login()
{
    console.log("login clicked");

    userName = document.querySelector("#username").value;
    password = document.querySelector("#pwd").value;

    console.log("login clicked: "  + userName + " " + password);

    var jobj = new Object();
    jobj.name = userName;
    jobj.pwd  = password;

    var jsonString= JSON.stringify(jobj);

    //console.log(jsonString);

    postData("scripts/login.php", jsonString, sendSuccess, sendFail);
}

function registration()
{
    console.log("register clicked");

    regName = document.querySelector("#regUser").value;
    email = document.querySelector("#regEmail").value;
    regPass = document.querySelector("#regPwd").value;

    console.log("account registered: "  + regName + " " + email + " " + regPass);

    var robj = new Object();
    robj.name = regName;
    robj.regEmail = email;
    robj.pwd  = regPass;

    var jsonString= JSON.stringify(robj);

    //console.log(jsonString);

    postData("scripts/register.php", jsonString, sendSuccess, sendFail);
}

function sendSuccess(retData)
{
    console.log(retData);
    console.log("sendSuccess");
    window.location.href = 'homepage.html';

}
function sendFail(retData)
{
    console.log("sendFail");
    console.log(retData);
    window.location.href = 'login.html';
}

function getData(jsonUrl, success, error) {
    var request = new XMLHttpRequest();
    request.open("GET", jsonUrl, true);
    request.overrideMimeType("application/json");
    request.onreadystatechange = function() 
    {
        if (request.readyState === 4 )
        {
            if(request.status == 200)
            {
                success(request.responseText);
            }
            else 
            {
                error(request.responseText);
            }
        }
    };
    request.send(null);
}

function postData(url, data, success, error) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
 
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.overrideMimeType("application/json");
    xhr.onreadystatechange = function() 
    {
        if (xhr.readyState > 3) 
        {
            if (xhr.status==200 && xhr.responseText && xhr.responseText.length > 0) 
            { 
                success(xhr.responseText); 
            }
            else 
            {
                error(xhr.status,data);
            }
        }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send( data);
    return xhr;
}