

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

    // Validate all fields are required
    if (jsonData.name == "" || jsonData.code == "" || jsonData.description == "" || jsonData.credits == "") {
        document.getElementById("editMessage").innerHTML = 'All fields are required!';
        document.getElementById("editMessage").setAttribute("class", "text-danger");
        return;
    }

    // Validate course code format
    var codePattern = /^[A-Z]{3}\d{3}$/;
    if (!codePattern.test(jsonData.code)) {
        document.getElementById("editMessage").innerHTML = 'Course code must be 3 uppercase letters followed by 3 numbers!';
        document.getElementById("editMessage").setAttribute("class", "text-danger");
        return;
    }

    // Check for duplicate course codes
    var request = new XMLHttpRequest();
    request.open("GET", "/view-courses", false);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        var courses = JSON.parse(request.responseText);
        for (var i = 0; i < courses.length; i++) {
            if (courses[i].code === jsonData.code && courses[i].id !== id) {
                document.getElementById("editMessage").innerHTML = 'Course code already exists!';
                document.getElementById("editMessage").setAttribute("class", "text-danger");
                return;
            }
        }
    };
    request.send();

    var updateRequest = new XMLHttpRequest();
    updateRequest.open("PUT", "/update-course/" + id, true);
    updateRequest.setRequestHeader('Content-Type', 'application/json');
    updateRequest.onload = function () {
        response = JSON.parse(updateRequest.responseText);
        if (response.message == "Course modified successfully!") {
            document.getElementById("editMessage").innerHTML = 'Edited Course: ' + jsonData.name + '!';
            document.getElementById("editMessage").setAttribute("class", "text-success");

            viewCourses();
            $('#editCourseModal').modal('hide'); 
        }
         else {
        }
    };
    updateRequest.send(JSON.stringify(jsonData));
}




