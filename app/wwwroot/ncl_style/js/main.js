$(function() {

    // Run methods
    initToggleMenu();
    initToggleSearch();
    initSVGImageReplacement();
    initScrollTop();



    // Toggle Search
    function initToggleSearch(){
        $('body').on('click', '#toggle-search', function(e){
            e.preventDefault();

            var header = $('header[role=banner]');
            var menuToggledElements = header.add('main');

            // Hide the menu
            menuToggledElements.removeClass('toggle-nav');

            // Toggle the search field
            header.toggleClass('toggle-searching');
        });
    }

    // Toggle Main Menu
    function initToggleMenu(){
        $('body').on('click', '#toggle-menu', function(e){
            e.preventDefault();

            var header = $('header[role=banner]');
            var menuToggledElements = header.add('main');

            // Hide the search field
            header.removeClass('toggle-searching');

            // Toggle the menu
            menuToggledElements.toggleClass('toggle-nav');
        });
    }

    // Display png instead of svg
    function initSVGImageReplacement(){
        if(!Modernizr.svg) {
          $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
          });
        }
    }

    function initScrollTop(){
        $('a.btn-top').click(function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }

});
