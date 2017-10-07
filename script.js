$(document).ready(function() {

    var projects = [
        "<div class='col-3 mobile ui-ux adobe-cs'> <!-- mystreet ux case study --> <figure class='figure'> <a href='mystreet.html'> <img src='images/logo.jpg' class='figure-img img-fluid rounded' alt='My Street'> <a> <figcaption class='figure-caption'> <p>ux case study || My Street</br> A peer to peer item lending app for small communities<br> <small>mobile, ui/ux, abode cs</small> </p> </figcaption> </figure> </div>",
        "<div class='col-3 web javascript sass bootstrap'> <!-- portfolio --> <figure class='figure'> <img src='images/portfolio-screenshot.png' class='figure-img img-fluid rounded' alt='Portfolio Screenshot'> <figcaption class='figure-caption'> <p><a href='https://github.com/kellymarjorie/kellymarjorie.github.io' target='_blank'>view code</a> || Portfolio<br> Website to showcase the projects I've worked on, using responsive web design practices<br> <small>web, jquery, sass, bootstrap</small> </p> </figcaption> </figure> </div>",
        "<div class='col-3 web bootstrap javascript api'> <!-- weather app --> <figure class='figure'> <a href='weather_app/index.html' target='_blank'> <img src='images/weather_app.png' class='figure-img img-fluid rounded' alt='Weather App'> </a> <figcaption class='figure-caption'> <p> <a href='https://codepen.io/kellymarjorie/full/ybbEOy/' target='_blank'>codepen</a> || Local Weather App</br> An interactive web app to show your local weather information.</br> <small>web, bootstrap, jquery, api</small><br> <a href='https://github.com/kellymarjorie/weather_app' target='_blank'>View code</a> </p> </figcaption> </figure> </div>",
        "<div class='col-3 web bootstrap javascript'> <!-- quote generator --> <figure class='figure'> <a href='random_quote_generator/index.html' target='_blank'> <img src='images/quote_generator.png' class='figure-img img-fluid rounded' alt='Parks & Rec Quote Generator'> </a> <figcaption class='figure-caption'> <p> <a href='https://codepen.io/kellymarjorie/full/oWYPeE/' target='_blank'>codepen</a> || Random Quote</br> A random quote generator for the TV show Parks & Recreation. Tweet your favourite quote with the Twitter plug-in.</br> <small>web, bootstrap, jquery</small><br> <a href='https://github.com/kellymarjorie/random_quote_generator' target='_blank'>View code</a> </p> </figcaption> </figure> </div>",
        "<div class='col-3 web bootstrap javascript api'> <figure class='figure'> <a href='twitchtv_app/index.html' target='_blank'> <img src='images/twitchtv_app.png' class='figure-img img-fluid rounded' alt='TwitchTV Channels'> </a> <figcaption class='figure-caption'> <p> <a href='https://codepen.io/kellymarjorie/full/MmVdLr/' target='_blank'>codepen</a> || TwitchTV Channels</br> View a list of channels and filter if they are online or offline. See what they are streaming and how many are watching. Search for new TwitchTV channels to follow.</br> <small>web, bootstrap, jquery, api</small></br> <a href='https://github.com/kellymarjorie/twitchtv_app' target='blank'>View code</a> </p> </figcaption> </figure> </div>",
        "<div class='col-3 web bootstrap javascript api'> <figure class='figure'> <a href='wikipedia_viewer/index.html' target='_blank'> <img src='images/wikipedia_app.png' class='figure-img img-fluid rounded' alt='Wikipedia Search'> </a> <figcaption class='figure-caption'> <p> <a href='https://codepen.io/kellymarjorie/full/qmxRjZ/' target='_blank'>codepen</a> || Wikipedia Search</br> Search for Wikipedia articles on any topic, or pull up a random article.</br> <small>web, bootstrap, jquery, api</small><br> <a href='https://github.com/kellymarjorie/wikipedia_viewer' target='_blank'>View code</a> </p> </figcaption> </figure> </div>",
        "<div class='col-3 web ui-ux adobe-cs'> <figure class='figure'> <a href='https://www.behance.net/gallery/56774019/Daily-UI-001' target='_blank'> <img src='images/dailyui001thumbnail.png' class='figure-img img-fluid rounded' alt='Daily UI 001'> </a> <figcaption class='figure-caption'> <p>ui practice || sign up page<br> <small>web, ui/ux, adobe cs</small></p> </figcaption> </figure> </div>",
        "<div class='col-3 mobile ui-ux adobe-cs'> <figure class='figure'> <a href='https://www.behance.net/gallery/56801587/Daily-UI-002' target='_blank'> <img src='images/dailyui002thumbnail.png' class='figure-img img-fluid rounded' alt='Daily UI 002'> </a> <figcaption class='figure-caption'> <p>ui practice || credit card checkout<br> <small>mobile, ui/ux, adobe cs</small></p> </figcaption> </figure> </div>",
        "<div class='col-3 web ui-ux adobe-cs'> <figure class='figure'> <a href='https://www.behance.net/gallery/56825017/Daily-UI-003' target='_blank'> <img src='images/dailyui003thumbnail.png' class='figure-img img-fluid rounded' alt='Daily UI 003'> </a> <figcaption class='figure-caption'> <p>ui practice || landing page<br> <small>web, ui/ux, adobe cs</small></p> </figcaption> </figure> </div>",
        "<div class='col-3 mobile ui-ux adobe-cs'> <figure class='figure'> <a href='https://www.behance.net/gallery/56972993/Daily-UI-004' target='_blank'> <img src='images/dailyui004a.png' class='figure-img img-fluid rounded' alt='Daily UI 004'> </a> <figcaption class='figure-caption'> <p>ui practice || currency converter<br> <small>mobile, ui/ux, adobe cs</small></p> </figcaption> </figure> </div>",
        "<div class='col-3 adobe-cs illustration'> <figure class='figure'> <a href='https://www.behance.net/gallery/56699477/flat-white' target='_blank'> <img src='images/flatwhite.jpg' class='figure-img img-fluid rounded' alt='coffee'> </a> <figcaption class='figure-caption'> <p>illustration || flat white<br> <small>illustration, adobe cs</small></p> </figcaption> </figure> </div>",
        "<div class='col-3 adobe-cs illustration'> <figure class='figure'> <a href='https://www.behance.net/gallery/56801679/Flat-lay-clothes-illustration' target='_blank'> <img src='images/flat-lay-thumbnail.png' class='figure-img img-fluid rounded' alt='flat lay clothes thumbnail'> </a> <figcaption class='figure-caption'> <p>illustration || clothes flat lay<br> <small>illustration, adobe cs</small></p> </figcaption> </figure> </div>"
    ];

    window.onload = $("#display").append(projects);
    window.onload = $('#all-work').addClass('strike-through');

    $("#all-work").click(function() {
        // show all work
        $("#display").html("");
        $("#display").append(projects);
    });

    $("#web-work").click(function() {
        $(".web").show();
        $(".mobile").hide();
        $(".illustration").hide();
    });

    $("#mobile-work").click(function() {
        $(".web").hide();
        $(".mobile").show();
        $(".illustration").hide();
    });

    $("#illustration-work").click(function() {
        $(".web").hide();
        $(".mobile").hide();
        $(".illustration").show();
    });

    $("a[class^='strikeThroughToggle']").click(function() {
        $("a[class^='strikeThroughToggle']").removeClass('strike-through');
        $(this).toggleClass('strike-through');
    });

});