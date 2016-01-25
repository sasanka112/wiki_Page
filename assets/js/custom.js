$(document).ready(function(){


// $(".read-me-link").click(function(){

  // $( ".more-description" ).each(function() {
  //   $( this ).hide();
  // });
  // $( ".less-description" ).each(function() {
  //   $( this ).show();
  // });

  // $(this).parent().next().show();
  // $(this).parent().next().css("opacity","0"); 
  // $(this).parent().next().animate({opacity: "1"},1000);
  // $(this).parent().hide();
// });


function init_page(){
  $( ".topic" ).each(function() {
    $( this ).hide();



  });
}
function postSearchFunction(){

  // $( ".more-description" ).each(function() {
  //   $( this ).hide();
  // });

  $("#no-result-found").hide();

  // $( ".less-description" ).each(function() {
  //   $( this ).show();
  // });

  var flag=0;
  var search_text = $("#search-text-box").val();
  $("#search-title-span").text(search_text);

  $( ".topic" ).each(function() {
    var topic_header = $( this ).find(" header h3.post-title " ).text();
    search_text = search_text.trim().toLowerCase();

    if(search_text != "")
      {
        $(".search-title").show();
      }
    else
      {
        $(".search-title").hide();
      }
      // alert();
    topic_header = topic_header.trim().toLowerCase();
    if(topic_header.search(search_text)  > -1 )
           {
            $(this).show();
            flag=1;
            // $(this).addClass('shown-item');
           }
           else{
            $(this).hide();

            // $(this).removeClass('shown-item');
           } 
    // alert(topic_header);
  });
  if(flag==0){
    $("#no-result-found").show();
  }
}
$('.search-term').keydown(function(e) {
      if (e.keyCode == 13) {
    postSearchFunction();
    }
 });

$("#dell-search-button").click(function(){
  postSearchFunction();
});

















// $(".dell-menu-item").mouseenter(function(){
//   $(this).children().show();
//    $(this).children().animate({opacity: "1"},500);
// });
// $(".dell-menu-item").mouseleave(function(){
//   $(this).children(".dell-sub-menu").hide();
//   $(this).children(".dell-sub-menu").css("opacity","0");
// });





// $("ul #menu-item-Green-Skin").click(function(){
//   $(".dell-head").css("background-color","#2F8032");
//   $(".dell-sub-menu").css("background-color","#2F8032");
//   $(".dell-search-div").css("background-color","#B8E3B9");
//   $("input.search-btn").css("background-color","#A2FAA5");
//   $(".dell-footer").css("background-color","#2F8032");
// });

// $("ul #menu-item-Default-Skin").click(function(){
//   $(".dell-head").css("background-color","#4fb084");
//   $(".dell-sub-menu").css("background-color","#4fb084");
//   $(".dell-search-div").css("background-color","#229d8e");
//   $("input.search-btn").css("background-color","#4fb081");
//   $(".dell-footer").css("background-color","#4fb084");
// });

// $("ul #menu-item-Red-Skin").click(function(){
//   $(".dell-head").css("background-color","#F50C27");
//   $(".dell-sub-menu").css("background-color","#F50C27");
//   $(".dell-search-div").css("background-color","#8A2F39");
//   $("input.search-btn").css("background-color","#C25F6A");
//   $(".dell-footer").css("background-color","#F50C27");
// });

// $("ul #menu-item-Blue-Skin").click(function(){
//   $(".dell-head").css("background-color","#0085c3");
//   $(".dell-sub-menu").css("background-color","#0085c3");
//   $(".dell-search-div").css("background-color","#229d8e");
//   $("input.search-btn").css("background-color","#4fb081");
//   $(".dell-footer").css("background-color","#0085c3");
// });


});

