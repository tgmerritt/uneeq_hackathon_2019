$(document).ready(function() {
    $("#up-button").click(function(){
        $("#video-victor").hide();
        $("#video-alyssa").show();
        $(".uneeq-modal-btn").html("About Alyssa");
        $("#exampleModalLabel").html("About Alyssa");
        $(".modal-body").html("Hi - I'm Alyssa.  I'm completely make-believe, but you can certainly believe that the rates I disclose to you on our call are annual percentage rates.  Let's get started!");

    });

    $("#down-button").click(function(){
        $("#video-victor").show();
        $(".uneeq-modal-btn").html("About Victor");
        $("#video-alyssa").hide();
        $("#exampleModalLabel").html("About Victor");
        $(".modal-body").html("Hi - I'm Victor. Dashing, Mysterious, and ready to answer your questions about variable-rate mortgages - they've gotten better since the last economic meltdown!");
    });
});