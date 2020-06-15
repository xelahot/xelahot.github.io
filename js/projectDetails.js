//Après le chargement de la page
$("document").ready(function() {

    //Show projects details
    let detailsBtns = $('.btn-info');

    /*$(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });*/

    detailsBtns.on('click', function(e) {
        e.preventDefault();
        //let everythingElse = $("*").filter(":not(#projectInfo), :not(#navPages)");
        $("#projectInfo").fadeToggle(500, "swing");
        //$(everythingElse).fadeTo(500, 0.5);


        $("#projectInfo").focus(function(){
            $(this).css('box-shadow', '0px 0px 1px #ccc');
        });

        /*$("#projectInfo").blur(function(){
            $(this).css('box-shadow', 'none');
        });*/

        //$("#projectInfo").slideToggle(500, "swing");
        //$("#projectInfo").animate({scrollTop:0}, '300');
    });

});