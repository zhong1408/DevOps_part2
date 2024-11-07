function addstudent(event) {
    event.preventDefault();
  
    var response = "";
    var jsonData = new Object();
    jsonData.name = document.getElementById("name").value;
    //jsonData.id = document.getElementById("id").value;
    jsonData.age = document.getElementById("age").value;
    jsonData.course = document.getElementById("course").value;
    jsonData.email = document.getElementById("email").value;
  
    if (
      jsonData.name == "" ||
      //jsonData.id == "" ||
      jsonData.age == "" ||
      jsonData.course == "" ||
      jsonData.email == ""
    ) {
      document.getElementById("message").innerHTML = "All fields are required!";
      return;
    }
    
    const age = parseInt(jsonData.age,10);
    if(isNaN(age) || age<17 || age> 50){
      document.getElementById("message").innerHTML = "Age must be between 17 and 50!!";
      return;
    }
  
    const email = jsonData.email
    if (!email.includes('@')  || !email.includes('.')){
      document.getElementById("message").innerHTML = "Email is not defined properly!"
      return;
  } 
  
    var request = new XMLHttpRequest();
    request.open("POST", "/add-student", true);
    request.setRequestHeader("Content-Type", "application/json");
  
    request.onload = function () {
      response = JSON.parse(request.responseText);
      console.log(response);
      if (request.status == 201) {
        alert("Student Added Successfully");
        // document.getElementById("message").innerHTML = 'Added Student:  ' + jsonData.name + '!';
        // document.getElementById("name").value="";
        // document.getElementById("id").value="";
        // document.getElementById("age").value="";
        // document.getElementById("Course").value="";
        // document.getElementById("email").value="";
        window.location.href = "viewstudent_affan.html";
      } else if (request.status == 400 ) {
        document.getElementById("message").innerHTML =  response.message ||"Unable to add student";
      
      }
    };
    request.send(JSON.stringify(jsonData));
  }
  
  function viewStudents() {
    var response = "";
    var request = new XMLHttpRequest();
    request.open("GET", "/view-students", true);
    request.setRequestHeader("Content-Type", "application/json");
  
    request.onload = function () {
      response = JSON.parse(request.responseText);
  
      var html = "";
      for (var i = 0; i < response.length; i++) {
        html +=
          "<tr>" +
          "<td>" +
          response[i].name +
          "</td>" +
          "<td>" +
          response[i].id +
          "</td>" +
          "<td>" +
          response[i].age +
          "</td>" +
          "<td>" +
          response[i].course +
          "</td>" +
          "<td>" +
          response[i].email +
          "</td" + '</tr>';
      }
      document.getElementById("tableContent").innerHTML = html;
    };
    request.send();
  }