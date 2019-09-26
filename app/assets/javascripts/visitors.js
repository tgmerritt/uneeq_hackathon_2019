$(document).ready(function () {
    const victor_video = $("#video-victor");
    const sophie_video = $("#video-sophie");
    const alyssa_video = $("#video-alyssa");
    const uneeq_modal_btn = $(".uneeq-modal-btn");
    const exampleModalLabel = $("#exampleModalLabel");
    const modal_body = $(".modal-body");

    $("#explore-button").click(function () {
        $(".uneeq-modal-btn").show();
        $("#video-intro").hide();
        victor_video.show();
        $("#up-button").show();
        $("#down-button").show();
    });

    $("#up-button").click(function () {
        if (victor_video.is(":visible")) {
            victor_video.hide();
            alyssa_video.hide();
            sophie_video.show();
            uneeq_modal_btn.html("About Sophie");
            exampleModalLabel.html("About Sophie");
            modal_body.html("Hi - I'm Sophie.  I've been chewing through investment advice since, like, yesterday.  You can totally trust me with your money.  Just let me know what you want me to buy.");
        } else if (alyssa_video.is(":visible")) {
            alyssa_video.hide();
            sophie_video.hide();
            victor_video.show();
            uneeq_modal_btn.html("About Victor");
            exampleModalLabel.html("About Victor");
            modal_body.html("Hi - I'm Victor.  Dashing, Mysterious, and ready to answer your questions about variable-rate mortgages - they've gotten better since the last economic meltdown!");
        } else if (sophie_video.is(":visible")) {
            sophie_video.hide();
            victor_video.hide();
            alyssa_video.show();
            uneeq_modal_btn.html("About Alyssa");
            exampleModalLabel.html("About Alyssa");
            modal_body.html("Hi - I'm Alyssa.  I'm completely make-believe, but you can certainly believe that the rates I disclose to you on our call are annual percentage rates.  Let's get started!");
        }
    });

    $("#down-button").click(function () {
        if (victor_video.is(":visible")) {
            victor_video.hide();
            sophie_video.hide(); // This shouldn't matter, but for posterity
            alyssa_video.show();
            uneeq_modal_btn.html("About Alyssa");
            exampleModalLabel.html("About Alyssa");
            modal_body.html("Hi - I'm Alyssa.  I'm completely make-believe, but you can certainly believe that the rates I disclose to you on our call are annual percentage rates.  Let's get started!");
        } else if (alyssa_video.is(":visible")) {
            alyssa_video.hide();
            victor_video.hide(); // This shouldn't matter, but for posterity
            sophie_video.show();
            uneeq_modal_btn.html("About Sophie");
            exampleModalLabel.html("About Sophie");
            modal_body.html("Hi - I'm Sophie.  I've been chewing through investment advice since, like, yesterday.  You can totally trust me with your money.  Just let me know what you want me to buy.");
        } else if (sophie_video.is(":visible")) {
            sophie_video.hide();
            alyssa_video.hide(); // This shouldn't matter, but for posterity
            victor_video.show();
            uneeq_modal_btn.html("About Victor");
            exampleModalLabel.html("About Victor");
            modal_body.html("Hi - I'm Victor.  Dashing, Mysterious, and ready to answer your questions about variable-rate mortgages - they've gotten better since the last economic meltdown!");
        }
    });
});