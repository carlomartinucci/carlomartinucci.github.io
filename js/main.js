$(function(){
  $.get( "https://carlomartinucci.github.io/README.md?invalid-cache=" + Date.now(), function(html){
    $("#content").html(marked(html.replace(/github.com\/carlomartinucci/g, "carlomartinucci.github.io")));
  });
});
