

function viewCourses() {
    var response = '';
    var request = new XMLHttpRequest();
    request.open('GET', '/view-courses', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        response = JSON.parse(request.responseText);
        var html = ''
        for (var i = 0; i < response.length; i++) {
            html += '<tr>' +
                '<td>' + (i + 1) + '</td>' +
                '<td>' + response[i].name + '</td>' +
                '<td>' + response[i].code + '</td>' +
                '<td>' + response[i].description + '</td>' +
                '<td>' + response[i].credits + '</td>' +
                '<td>' +
                '<button type="button" class="btn btn-warning" onclick = "editCourse(\'' + JSON.stringify(response[i]).replaceAll('\"', '&quot;') + '\')">Edit </button> '
        }
        document.getElementById('tableContent').innerHTML = html;
    };
    request.send();
}


function editCourse(data) {
    var selectedCourse = JSON.parse(data);
    document.getElementById("Editname").value = selectedCourse.name;
    document.getElementById("Editcode").value = selectedCourse.code;
    document.getElementById("Editdescription").value = selectedCourse.description;
    document.getElementById("Editcredits").value = selectedCourse.credits;
    document.getElementById("updateButton").setAttribute("onclick", 'updateCourse("' + selectedCourse.id + '")');
    $('#editCourseModal').modal('show');
}


function updateCourse(id) {
    console.log(id)
    var response = "";
    var jsonData = new Object();
    jsonData.name = document.getElementById("Editname").value;
    jsonData.code = document.getElementById("Editcode").value;
    jsonData.description = document.getElementById("Editdescription").value;
    jsonData.credits = document.getElementById("Editcredits").value;

    if (jsonData.name == "" || jsonData.code == "" || jsonData.description == "" || jsonData.credits == "") {
        document.getElementById("editMessage").innerHTML = 'All fields are required!';
        document.getElementById("editMessage").setAttribute("class", "text-danger");
        return;
    }

    var request = new XMLHttpRequest();
    request.open("PUT", "/update-course/" + id, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        response = JSON.parse(request.responseText);
        if (response.message == "Course modified successfully!") {
            document.getElementById("editMessage").innerHTML = 'Edited Course: ' + jsonData.name + '!';
            document.getElementById("editMessage").setAttribute("class", "text-success");

            viewCourses();
            $('#editCourseModal').modal('hide'); 
        } else {
            document.getElementById("editMessage").innerHTML = 'Unable to edit Course!';
            document.getElementById("editMessage").setAttribute("class", "text-danger");
        }
    };
    request.send(JSON.stringify(jsonData));
}



