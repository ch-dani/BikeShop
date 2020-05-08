
$(document).ready(function() {

$("#showCategory").on('click',function(){
    // alert('value');
    alert("hellow world");
//     var value=$(this).val();
    
//   $.ajax({  
      
//     type: "GET",
//     data: value,
//     url: "index.pug",             
//     dataType: "html",   //expect html to be returned                
//     success: function(response){                    
//         $("#responsecontainer").html(response); 
//   }

  
// });
});


  // showing categories for dynamically back button

  $("#responsecontainer").on('click','.showCategoryNew',function(){
    alert("hellow world");
    
  
   var value=$(this).val();
  $.ajax({    
    type: "GET",
    data: value,
    url: "Modules/categoriesAjax",             
    dataType: "html",   //expect html to be returned                
    success: function(response){                    
        $("#responsecontainer").html(response); 
  

  }

  
});
});

    // showing all products for each category



 

});


function myfn(){
  alert("hellow world");
  const form=new FormData();
  form.append("imageCover",document.querySelector("#coverImage").files[0]);
}