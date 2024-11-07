
function editResource(data) {
    var selectedResource = JSON.parse(data);
    document.getElementById("editName").value = selectedResource.name;
    document.getElementById("editId").value = selectedResource.id;
    document.getElementById("editAge").value = selectedResource.age;
    document.getElementById("editcourse").value = selectedResource.course;
    document.getElementById("editemail").value = selectedResource.email;
  
}
function updateStudent() {
    var response = "";
    var jsonData = new Object();
    jsonData.name = document.getElementById("editName").value;
    jsonData.id = document.getElementById("editId").value;
    jsonData.age = document.getElementById("editAge").value;
    jsonData.course = document.getElementById("editcourse").value;
    jsonData.email = document.getElementById("editemail").value;
    if (jsonData.name == "" ||  jsonData.age == "" ||
        jsonData.course == "" || jsonData.email == "") {
        document.getElementById("editMessage").innerHTML = 'All fields are required!';
        document.getElementById("editMessage").setAttribute("class", "text-danger");
        return;
    }
    var request = new XMLHttpRequest();
    request.open("PUT", "/update-students" , true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        response = JSON.parse(request.responseText);
        if (response.message == "Student updated successfully!") {
            document.getElementById("editMessage").innerHTML = 'Edited Resource: ' +
                jsonData.name + '!';
            document.getElementById("editMessage").setAttribute("class",
                "text-success");
            window.location.href = 'index.html';
        }
        else {
            document.getElementById("editMessage").innerHTML = 'Unable to edit resource!';
            document.getElementById("editMessage").setAttribute("class", "text-danger");
        }
    };
    request.send(JSON.stringify(jsonData));
}

