function cov_26mj5g7ho7(){var path="C:\\DevOps_part2\\public\\js\\frontend_js_aiman.js";var hash="9d4ea73375b4279ee75ca70068c00035362f49c4";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\DevOps_part2\\public\\js\\frontend_js_aiman.js",statementMap:{"0":{start:{line:3,column:27},end:{line:3,column:43}},"1":{start:{line:4,column:4},end:{line:4,column:70}},"2":{start:{line:5,column:4},end:{line:5,column:66}},"3":{start:{line:6,column:4},end:{line:6,column:68}},"4":{start:{line:7,column:4},end:{line:7,column:74}},"5":{start:{line:8,column:4},end:{line:8,column:72}},"6":{start:{line:12,column:19},end:{line:12,column:21}},"7":{start:{line:13,column:19},end:{line:13,column:31}},"8":{start:{line:14,column:4},end:{line:14,column:62}},"9":{start:{line:15,column:4},end:{line:15,column:58}},"10":{start:{line:16,column:4},end:{line:16,column:60}},"11":{start:{line:17,column:4},end:{line:17,column:66}},"12":{start:{line:18,column:4},end:{line:18,column:64}},"13":{start:{line:19,column:4},end:{line:24,column:5}},"14":{start:{line:21,column:8},end:{line:21,column:86}},"15":{start:{line:22,column:8},end:{line:22,column:84}},"16":{start:{line:23,column:8},end:{line:23,column:15}},"17":{start:{line:25,column:18},end:{line:25,column:38}},"18":{start:{line:26,column:4},end:{line:26,column:51}},"19":{start:{line:27,column:4},end:{line:27,column:65}},"20":{start:{line:28,column:4},end:{line:41,column:6}},"21":{start:{line:29,column:8},end:{line:29,column:52}},"22":{start:{line:30,column:8},end:{line:40,column:9}},"23":{start:{line:31,column:12},end:{line:32,column:36}},"24":{start:{line:33,column:12},end:{line:34,column:32}},"25":{start:{line:35,column:12},end:{line:35,column:48}},"26":{start:{line:38,column:12},end:{line:38,column:90}},"27":{start:{line:39,column:12},end:{line:39,column:88}},"28":{start:{line:42,column:4},end:{line:42,column:43}}},fnMap:{"0":{name:"editResource",decl:{start:{line:2,column:9},end:{line:2,column:21}},loc:{start:{line:2,column:28},end:{line:10,column:1}},line:2},"1":{name:"updateStudent",decl:{start:{line:11,column:9},end:{line:11,column:22}},loc:{start:{line:11,column:25},end:{line:43,column:1}},line:11},"2":{name:"(anonymous_2)",decl:{start:{line:28,column:21},end:{line:28,column:22}},loc:{start:{line:28,column:33},end:{line:41,column:5}},line:28}},branchMap:{"0":{loc:{start:{line:19,column:4},end:{line:24,column:5}},type:"if",locations:[{start:{line:19,column:4},end:{line:24,column:5}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:19},"1":{loc:{start:{line:19,column:8},end:{line:20,column:53}},type:"binary-expr",locations:[{start:{line:19,column:8},end:{line:19,column:27}},{start:{line:19,column:32},end:{line:19,column:50}},{start:{line:20,column:8},end:{line:20,column:29}},{start:{line:20,column:33},end:{line:20,column:53}}],line:19},"2":{loc:{start:{line:30,column:8},end:{line:40,column:9}},type:"if",locations:[{start:{line:30,column:8},end:{line:40,column:9}},{start:{line:37,column:13},end:{line:40,column:9}}],line:30}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0],"1":[0,0,0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9d4ea73375b4279ee75ca70068c00035362f49c4"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_26mj5g7ho7=function(){return actualCoverage;};}return actualCoverage;}cov_26mj5g7ho7();function editResource(data){cov_26mj5g7ho7().f[0]++;var selectedResource=(cov_26mj5g7ho7().s[0]++,JSON.parse(data));cov_26mj5g7ho7().s[1]++;document.getElementById("editName").value=selectedResource.name;cov_26mj5g7ho7().s[2]++;document.getElementById("editId").value=selectedResource.id;cov_26mj5g7ho7().s[3]++;document.getElementById("editAge").value=selectedResource.age;cov_26mj5g7ho7().s[4]++;document.getElementById("editcourse").value=selectedResource.course;cov_26mj5g7ho7().s[5]++;document.getElementById("editemail").value=selectedResource.email;}function updateStudent(){cov_26mj5g7ho7().f[1]++;var response=(cov_26mj5g7ho7().s[6]++,"");var jsonData=(cov_26mj5g7ho7().s[7]++,new Object());cov_26mj5g7ho7().s[8]++;jsonData.name=document.getElementById("editName").value;cov_26mj5g7ho7().s[9]++;jsonData.id=document.getElementById("editId").value;cov_26mj5g7ho7().s[10]++;jsonData.age=document.getElementById("editAge").value;cov_26mj5g7ho7().s[11]++;jsonData.course=document.getElementById("editcourse").value;cov_26mj5g7ho7().s[12]++;jsonData.email=document.getElementById("editemail").value;cov_26mj5g7ho7().s[13]++;if((cov_26mj5g7ho7().b[1][0]++,jsonData.name=="")||(cov_26mj5g7ho7().b[1][1]++,jsonData.age=="")||(cov_26mj5g7ho7().b[1][2]++,jsonData.course=="")||(cov_26mj5g7ho7().b[1][3]++,jsonData.email=="")){cov_26mj5g7ho7().b[0][0]++;cov_26mj5g7ho7().s[14]++;document.getElementById("editMessage").innerHTML='All fields are required!';cov_26mj5g7ho7().s[15]++;document.getElementById("editMessage").setAttribute("class","text-danger");cov_26mj5g7ho7().s[16]++;return;}else{cov_26mj5g7ho7().b[0][1]++;}var request=(cov_26mj5g7ho7().s[17]++,new XMLHttpRequest());cov_26mj5g7ho7().s[18]++;request.open("PUT","/update-students",true);cov_26mj5g7ho7().s[19]++;request.setRequestHeader('Content-Type','application/json');cov_26mj5g7ho7().s[20]++;request.onload=function(){cov_26mj5g7ho7().f[2]++;cov_26mj5g7ho7().s[21]++;response=JSON.parse(request.responseText);cov_26mj5g7ho7().s[22]++;if(response.message=="Student updated successfully!"){cov_26mj5g7ho7().b[2][0]++;cov_26mj5g7ho7().s[23]++;document.getElementById("editMessage").innerHTML='Edited Resource: '+jsonData.name+'!';cov_26mj5g7ho7().s[24]++;document.getElementById("editMessage").setAttribute("class","text-success");cov_26mj5g7ho7().s[25]++;window.location.href='index.html';}else{cov_26mj5g7ho7().b[2][1]++;cov_26mj5g7ho7().s[26]++;document.getElementById("editMessage").innerHTML='Unable to edit resource!';cov_26mj5g7ho7().s[27]++;document.getElementById("editMessage").setAttribute("class","text-danger");}};cov_26mj5g7ho7().s[28]++;request.send(JSON.stringify(jsonData));}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjZtajVnN2hvNyIsImFjdHVhbENvdmVyYWdlIiwiZWRpdFJlc291cmNlIiwiZGF0YSIsImYiLCJzZWxlY3RlZFJlc291cmNlIiwicyIsIkpTT04iLCJwYXJzZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIm5hbWUiLCJpZCIsImFnZSIsImNvdXJzZSIsImVtYWlsIiwidXBkYXRlU3R1ZGVudCIsInJlc3BvbnNlIiwianNvbkRhdGEiLCJPYmplY3QiLCJiIiwiaW5uZXJIVE1MIiwic2V0QXR0cmlidXRlIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJyZXNwb25zZVRleHQiLCJtZXNzYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VuZCIsInN0cmluZ2lmeSJdLCJzb3VyY2VzIjpbImZyb250ZW5kX2pzX2FpbWFuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5mdW5jdGlvbiBlZGl0UmVzb3VyY2UoZGF0YSkge1xyXG4gICAgdmFyIHNlbGVjdGVkUmVzb3VyY2UgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0TmFtZVwiKS52YWx1ZSA9IHNlbGVjdGVkUmVzb3VyY2UubmFtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdElkXCIpLnZhbHVlID0gc2VsZWN0ZWRSZXNvdXJjZS5pZDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdEFnZVwiKS52YWx1ZSA9IHNlbGVjdGVkUmVzb3VyY2UuYWdlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Y291cnNlXCIpLnZhbHVlID0gc2VsZWN0ZWRSZXNvdXJjZS5jb3Vyc2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRlbWFpbFwiKS52YWx1ZSA9IHNlbGVjdGVkUmVzb3VyY2UuZW1haWw7XHJcbiAgXHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlU3R1ZGVudCgpIHtcclxuICAgIHZhciByZXNwb25zZSA9IFwiXCI7XHJcbiAgICB2YXIganNvbkRhdGEgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBqc29uRGF0YS5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0TmFtZVwiKS52YWx1ZTtcclxuICAgIGpzb25EYXRhLmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0SWRcIikudmFsdWU7XHJcbiAgICBqc29uRGF0YS5hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRBZ2VcIikudmFsdWU7XHJcbiAgICBqc29uRGF0YS5jb3Vyc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRjb3Vyc2VcIikudmFsdWU7XHJcbiAgICBqc29uRGF0YS5lbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGVtYWlsXCIpLnZhbHVlO1xyXG4gICAgaWYgKGpzb25EYXRhLm5hbWUgPT0gXCJcIiB8fCAganNvbkRhdGEuYWdlID09IFwiXCIgfHxcclxuICAgICAgICBqc29uRGF0YS5jb3Vyc2UgPT0gXCJcIiB8fCBqc29uRGF0YS5lbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0TWVzc2FnZVwiKS5pbm5lckhUTUwgPSAnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQhJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRNZXNzYWdlXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbihcIlBVVFwiLCBcIi91cGRhdGUtc3R1ZGVudHNcIiAsIHRydWUpO1xyXG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSA9PSBcIlN0dWRlbnQgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0TWVzc2FnZVwiKS5pbm5lckhUTUwgPSAnRWRpdGVkIFJlc291cmNlOiAnICtcclxuICAgICAgICAgICAgICAgIGpzb25EYXRhLm5hbWUgKyAnISc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdE1lc3NhZ2VcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcclxuICAgICAgICAgICAgICAgIFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdpbmRleC5odG1sJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdE1lc3NhZ2VcIikuaW5uZXJIVE1MID0gJ1VuYWJsZSB0byBlZGl0IHJlc291cmNlISc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdE1lc3NhZ2VcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSk7XHJcbn1cclxuXHJcbiJdLCJtYXBwaW5ncyI6IjBnSEFlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FB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QUFDLEtBQUFOLGNBQUEsR0FBQXFCLENBQUEsVUFDRCxHQUFJLENBQUFHLE9BQU8sRUFBQXhCLGNBQUEsR0FBQU0sQ0FBQSxPQUFHLEdBQUksQ0FBQW1CLGNBQWMsQ0FBQyxDQUFDLEVBQUN6QixjQUFBLEdBQUFNLENBQUEsT0FDbkNrQixPQUFPLENBQUNFLElBQUksQ0FBQyxLQUFLLENBQUUsa0JBQWtCLENBQUcsSUFBSSxDQUFDLENBQUMxQixjQUFBLEdBQUFNLENBQUEsT0FDL0NrQixPQUFPLENBQUNHLGdCQUFnQixDQUFDLGNBQWMsQ0FBRSxrQkFBa0IsQ0FBQyxDQUFDM0IsY0FBQSxHQUFBTSxDQUFBLE9BQzdEa0IsT0FBTyxDQUFDSSxNQUFNLENBQUcsVUFBWSxDQUFBNUIsY0FBQSxHQUFBSSxDQUFBLE1BQUFKLGNBQUEsR0FBQU0sQ0FBQSxPQUN6QlksUUFBUSxDQUFHWCxJQUFJLENBQUNDLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ0ssWUFBWSxDQUFDLENBQUM3QixjQUFBLEdBQUFNLENBQUEsT0FDNUMsR0FBSVksUUFBUSxDQUFDWSxPQUFPLEVBQUksK0JBQStCLENBQUUsQ0FBQTlCLGNBQUEsR0FBQXFCLENBQUEsU0FBQXJCLGNBQUEsR0FBQU0sQ0FBQSxPQUNyREcsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUNZLFNBQVMsQ0FBRyxtQkFBbUIsQ0FDbEVILFFBQVEsQ0FBQ1AsSUFBSSxDQUFHLEdBQUcsQ0FBQ1osY0FBQSxHQUFBTSxDQUFBLE9BQ3hCRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ2EsWUFBWSxDQUFDLE9BQU8sQ0FDdkQsY0FBYyxDQUFDLENBQUN2QixjQUFBLEdBQUFNLENBQUEsT0FDcEJ5QixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFHLFlBQVksQ0FDdkMsQ0FBQyxJQUNJLENBQUFqQyxjQUFBLEdBQUFxQixDQUFBLFNBQUFyQixjQUFBLEdBQUFNLENBQUEsT0FDREcsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUNZLFNBQVMsQ0FBRywwQkFBMEIsQ0FBQ3RCLGNBQUEsR0FBQU0sQ0FBQSxPQUM5RUcsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUNhLFlBQVksQ0FBQyxPQUFPLENBQUUsYUFBYSxDQUFDLENBQy9FLENBQ0osQ0FBQyxDQUFDdkIsY0FBQSxHQUFBTSxDQUFBLE9BQ0ZrQixPQUFPLENBQUNVLElBQUksQ0FBQzNCLElBQUksQ0FBQzRCLFNBQVMsQ0FBQ2hCLFFBQVEsQ0FBQyxDQUFDLENBQzFDIiwiaWdub3JlTGlzdCI6W119