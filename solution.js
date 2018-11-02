

$(document).ready(function(){

   
    $.ajax({
        type: "GET",
        url:"https://data.cityofnewyork.us/resource/9w7m-hzhe.json",
        dataType: "json",

        success: function(data){
            for(var i=0; i < data.length; i++){
                // console.log(data[i].critical_flag);
                $('#table').append(
                    '<tr><td>'+data[i].action+ '</td>'+
                    '<td>'+data[i].boro+'</td>'+
                    '<td>'+data[i].phone+'</td>'+
                    '</tr>'
                );
                
                //console.log(data[3].phone);
                
            }
        }
    });
});