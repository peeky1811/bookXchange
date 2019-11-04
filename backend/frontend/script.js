/*function validateForm(){
    var name= document.forms["myForm"]["username"].value;
    if(name==""){
        alert("Name must be filled out");
        return false;  
}*/
function myFunction() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    // fetch('localhost:3000/register', {
    //     method: 'POST',
    //     body: {
    //         "username": username,
    //         "password": password,
    //         "phone": phone,
    //         "dept": dept
    //     },
    //     headers:{
    //         content-type:"application/json"
    //     }
    // }).then(res => console.log(res.json()));

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.open("GET", `http://localhost:3000/reg?username=${username}&password=${password}&phone=${phone}&dept=${dept}`, true);
    xhr.send();
}