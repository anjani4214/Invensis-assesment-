$(document).ready(function(){
    $.ajax({url: "https://reqres.in/api/users?page",
        type: 'GET',
        dataType: 'json',
        success: function(result){
        $("#viewDiv").html(result);
        console.log(result);
    }});
});

$.ajax({url: "https://reqres.in/api/users", success: function(result){
        $("#viewDiv").html(result);
        console.log(result);

        var i;
        var text = "";
        for (i = 0; i < result.data.length; i++) {
            text += "<tr> <td>"+ result.data[i].first_name +"</td>  <td>"+ result.data[i].last_name +"</td> <td><button class='btn btn-default' data-toggle='modal' data-target='#exampleModal'  onclick='viewDetails("+result.data[i].id+")'>View</button><button class='btn btn-primary' data-toggle='modal' data-target='#exampleModal2' onclick='editDetails("+result.data[i].id+")'>Edit</button><button class='btn btn-danger' onclick='deleteUser("+result.data[i].id+")'>Delete</button></td></tr>";
          }
          console.log(text);
          $('#userData').html(text);
          
 }});

 function viewDetails(userId){
    $.ajax({url: "https://reqres.in/api/users/"+userId,
    type: 'GET',
    dataType: 'json',
     success: function(result){
         $("#firstName").text(result.data.first_name);
         $("#lastName").text(result.data.last_name);
         $("#image").html("<img src="+result.data.avatar+">");
        console.log(result);
    }});
    
 }

 function editDetails(userId){
     $.ajax({url: "https://reqres.in/api/users/"+userId,
     type: 'GET',
     dataType: 'json',
     success: function(result){
        $("#firstName_input").val(result.data.first_name);
        $("#lastName_input").val(result.data.last_name);
     }})
 }

 function deleteUser(userId){
     console.log(userId);
    $.ajax({url: "https://reqres.in/api/users/"+userId,
    type: 'DELETE',
    success: function(result, textStatus, xhr){
        console.log(xhr.status)
    }})
 }

 
