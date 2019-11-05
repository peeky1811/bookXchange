function myFunction() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var dept = document.getElementById("dept").value;
    // console.log(username);
    // console.log(password);
    // console.log(phone);
    // console.log(dept);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhr.responseText);              //only if request is completed
            window.location.href = "login.html";    //go to login page
        }
    };
    xhr.open("GET", `http://localhost:3000/register?username=${username}&password=${password}&phone=${phone}&dept=${dept}`, true);
    xhr.send();
}