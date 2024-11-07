function addCourse() {
    var response = "";
    var jsonData = new Object();
    jsonData.name = document.getElementById("name").value;
    jsonData.code = document.getElementById("code").value;
    jsonData.description = document.getElementById("description").value;
    jsonData.credits = parseInt(document.getElementById("credits").value, 10);

    if (jsonData.name == "" || jsonData.code == "" || jsonData.description == "" || isNaN(jsonData.credits)) {
        document.getElementById("message").innerHTML = 'All fields are required!';
        document.getElementById("message").setAttribute("class", "text-danger");
        return;
    }

    var request = new XMLHttpRequest();

    request.open("POST", "/add-course", true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response)
        if (response.message == undefined) {
            document.getElementById("message").innerHTML = 'Added Course: ' + jsonData.name + '!';
            document.getElementById("message").setAttribute("class", "text-success");

            document.getElementById("name").value = "";
            document.getElementById("code").value = "";
            document.getElementById("description").value = "";
            document.getElementById("credits").value = "";

            window.location.href = 'index.html';
        }
        else {
            document.getElementById("message").innerHTML = response.message
            document.getElementById("message").setAttribute("class", "text-danger");
            document.getElementById("message").setAttribute("class", "text-danger");
        }
    };

    request.send(JSON.stringify(jsonData));
}
