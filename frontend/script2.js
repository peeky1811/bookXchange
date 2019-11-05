function myFunction() {
    console.log("hai");
    var username = document.getElementById("Rno").value;
    var password = document.getElementById("pwd").value;
    console.log(username);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.open("GET", `http://localhost:3000/reg?username=${username}&password=${password}`, true);
    xhr.send();
}