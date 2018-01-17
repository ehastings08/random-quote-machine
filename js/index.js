$(document).ready(function() {
  
  // First populate with a starter quote
  
    $.ajax({
      beforeSend: function(request) {
        request.setRequestHeader("X-Mashape-Key", 'kU2sNT5Je8mshEWKsHhqpkD9Zv6Tp1doiA2jsnpAGFHOSOXyOx');
      },
      dataType: "json",
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      success: function(data) {
        $(".quoteLine").text(data["quote"]);
        $(".authorParagraph").text('- '+data["author"]);
      }
    });
  
  
  $("#newQuoteButton").on("click", function() {

    $.ajax({
      beforeSend: function(request) {
        request.setRequestHeader("X-Mashape-Key", 'kU2sNT5Je8mshEWKsHhqpkD9Zv6Tp1doiA2jsnpAGFHOSOXyOx');
      },
      dataType: "json",
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      success: function(data) {
        $(".quoteLine").text(data["quote"]);
        $(".authorParagraph").text('- '+data["author"]);
      }
    });
  });
  
  $(".twitterButton").on("click", function() {
    //alert($(".quoteLine").text());
    var win = window.open('https://twitter.com/intent/tweet?text='+$(".quoteLine").text()+'&via=ehasting08', '_blank');
    win.focus();
  });
  
});