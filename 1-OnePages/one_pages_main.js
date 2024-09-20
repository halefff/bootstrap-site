$( function() {
    $( "#accordion" ).accordion();
  } );

  $(function (){
    $("#tabs").tabs();
  })

  $(function(){
    $("#dialogbutton").click(function(){
      $("#dialog").dialog();
    })
  })

  // $(function(){
  //   var autoComplete=["html", "css", "bootstrap", "js", "javascript"];
  //   $("#tags").autoComplete({
  //     source:autoComplete
  //   });
  // });

  $(document).ready(function() {
  $("#tags").autocomplete({
    source: ["Html", "CSS", "JS", "JQery", "Ajax", "Java", "C", "C++", "Python", "Ruby", "Bootstrap"]
  });
});

  