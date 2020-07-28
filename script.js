$(document).ready(function() {


    $("#stream1_btn").on(function() {
        $(".stream1").fadeTo(1000, 0.5);
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $("#myButton").removeClass('blueBox').addClass('border');
        $("p").css("color", "blue").slideUp(2000).slideDown(2000);
        $("a").attr("href","http://www.example.com");
   });
}); 