$(document).ready(function(){
    var items = [];
   $.getJSON("../js/testTask.json", function( data ){
       
       $.each(data, function( key, val ){
           items.push(  
                            
                                "<tr>" +
                                    "<td>" + val.name + "</td>" +
                                    "<td>" + val.date + "</td>" + 
                                    "<td>" + val.assigned + "</td>" +
                                "</tr>" 
                            
                            );
       });
   $("<tbody/>",{
       "class": "xxx",
       html: items.join("")
   }).appendTo(".jquery");
   });
    $("#submit_btn").click(function(){
        var taskName = $("#task_form").val();
        var dateValue = $("#date_form").val();
        var assignedName = $("#assigned_to").val();
        /*$("#test").html(taskName);
        $("#test1").html(dateValue);
        $("#test2").html(assignedName);*/
        $(".xxx").prepend(
                          "<tr>" +
                                    "<td>" + taskName + "</td>" +
                                    "<td>" + dateValue + "</td>" + 
                                    "<td>" + assignedName + "</td>" +
                                "</tr>" 
        );
        
  
   }); 
    
   
});