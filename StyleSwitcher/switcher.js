/*global $, jQuery, switchStylestyle, google*/

$('#StyleSwitcher .switcher-btn').click(function () {

    'use strict';

    $('#StyleSwitcher').toggleClass('open');

    return false;
});

$('.color-switch').click(function () {

    'use strict';

    var title = jQuery(this).attr('title');
    jQuery('#color-switch').attr('href', 'css/alternative-colors/' + title + '.css');

    return false;

});

$('.boxed-switch').click(function () {

    'use strict';
    
    if ($('body').hasClass('boxed-version')) {
        jQuery('.boxed-switch').html('Boxed');
        $('body').removeClass('boxed-version');
    } else {
        jQuery('.boxed-switch').html('Full');
        $('body').addClass('boxed-version');
    }

});

$('.dark-switch').click(function () {

    'use strict';
    
    if ($('body').hasClass('dark-version')) {
        jQuery('.dark-switch').html('Dark');
        $('body').removeClass('dark-version');
        jQuery('.navbar-brand img').attr('src', 'images/logo.png');
    } else {
        jQuery('.dark-switch').html('Light');
        $('body').addClass('dark-version');
        jQuery('.navbar-brand img').attr('src', 'images/logo-light.png');
    }

});



$('.bg-1').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg1.png)'});

});
$('.bg-2').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg2.png)'});

});
$('.bg-3').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg3.png)'});

});
$('.bg-4').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg4.png)'});

});
$('.bg-5').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg5.png)'});

});
$('.bg-6').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg6.png)'});

});
$('.bg-7').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg7.png)'});

});
$('.bg-8').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg8.png)'});

});
$('.bg-9').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg9.png)'});

});
$('.bg-10').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg10.png)'});

});
$('.bg-11').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg11.png)'});

});
$('.bg-12').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg12.png)'});

});
$('.bg-13').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg13.png)'});

});
$('.bg-14').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg14.png)'});

});
$('.bg-15').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg15.png)'});

});
$('.bg-16').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg16.png)'});

});
$('.bg-17').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg17.png)'});

});
$('.bg-18').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg18.png)'});

});
$('.bg-19').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg19.png)'});

});
$('.bg-20').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg10.png)'});

});
$('.bg-21').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg21.png)'});

});
$('.bg-22').click(function () {

    'use strict';

    $('body.boxed-version').css({backgroundImage: 'url(images/patterns/bg22.png)'});

});