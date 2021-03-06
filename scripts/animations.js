$(document).ready(function () {

    // jQuery methods go here...

    // Navbar offset
    var navOffset = 80;

    // Content Handles
    var content = $("#content");
    var banner = $(".banner");
    var work = $('#work');
    var about = $('#about');
    var blog = $('#blog');
    var contact = $('#contact');
    var page = $('html, body');
    var nav = $('#nav');

    // Click Handlers
    var homeIcon = $("#home");
    var workIcon = $('#work-icon');
    var aboutIcon = $('#about-icon');
    var blogIcon = $('#blog-icon');
    var contactIcon = $('#contact-icon');
    var down = $('.ion-chevron-down');

    $(document).scroll(function() {
        if (nav.offset().top > 500) {
            nav.css('transition', '500ms linear');
           nav.css('background-color', '#FFFFFF');
        } else {
           nav.css('background', 'transparent');
        }

    });

    // Click on home icon scoll to top
    homeIcon.click(function () {
        page.animate({
            scrollTop: banner.offset().top - navOffset
        }, 1000);
    });

    // Click on home icon scoll to top
    workIcon.click(function () {
        console.log(contact.position());
        page.animate({
            scrollTop: work.offset().top - navOffset
        }, 1000);
    });


    // Click on about icon scoll to about
    aboutIcon.click(function () {
        page.animate({
            scrollTop: about.offset().top - navOffset
        }, 1000);
        down = false;
    });

    down.click(function () {
        page.animate({
            scrollTop: about.offset().top - navOffset
        }, 1000);
        down = false;
    });


    // Click on work icon scoll to work
    blogIcon.click(function () {
        page.animate({
            scrollTop: blog.offset().top - navOffset
        }, 1000);
        down = false;
    });

    // Click on blog icon scoll to blog
    contactIcon.click(function () {
        page.animate({
            scrollTop: contact.offset().top - navOffset
        }, 1000);
        down = false;
    });


});
