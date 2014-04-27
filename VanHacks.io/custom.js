  $(function() {
    $( "#accordion" ).accordion();
  });


$(function()
{
    // bind 
    $(window).resize(resize_site);

    // load the website
    setTimeout("load_site()", 0);

    // setup typer
    //$('[data-typer-targets]').typer();
    $('#tlt').textillate({
    minDisplayTime: 50, 
    in: { effect: 'fadeInLeft', sync: true }, 
    out: { effect: 'fadeOut', sync: true},
    loop:true
    });

    $( "#accordion-resizer" ).resizable({
      minHeight: 140,
      minWidth: 200,
      resize: function() {
        $( "#accordion" ).accordion( "refresh" );
      }
    });

                 
});


function load_site()
{
  resize_site();    
  
}

// added in resize hacks
function resize_site()
{
  $("header").height( $(window).height() * 0.60);
  $("#teaser").height( $("#teaser h1").height() * 1.1);

  //$("#logo-wrapper").offset({top : ($("header").height() - $("#logo-wrapper").height()) / 4});
}
