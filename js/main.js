$(function() {
    $('.header-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        accessibility: 'boolean',
        dots: true,
        dotsClass: 'slider-dot',
        prevArrow: '<i class="slider-btn slick-prev i-left"></i>',
        nextArrow: '<i class="slider-btn slick-next i-right"></i>',
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
    });

    $('.svcs-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 800,
        accessibility: 'boolean',
        prevArrow: '<i class="slider-btn slick-prev i-left"></i>',
        nextArrow: '<i class="slider-btn slick-next i-right"></i>',
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    });

    $('.like-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        accessibility: 'boolean',
        prevArrow: '<i class="slider-btn slick-prev i-left"></i>',
        nextArrow: '<i class="slider-btn slick-next i-right"></i>',
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1

            }
        }
    ]
    });

    $('.slider-product-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-product-nav',
    });

    $('.slider-product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-product-for',
        focusOnSelect: true,
        // swipeToSlide: true,
        accessibility: 'boolean',
        prevArrow: '<i class="slider-btn slick-prev i-backward i-forward"></i>',
        nextArrow: '<i class="slider-btn slick-next i-forward"></i>',
    });

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [ 0, 650000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ]);
            $( "#amount2" ).val( ui.values[ 1 ]);
        }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ));

    $( ".dropdown-link" ).click(function(){
        $( ".main-menu" ).toggle();
    });

    $( ".dropdown-link-1" ).click(function(){
        $( ".main-menu-1" ).toggle();
    });

    $( ".btn-brand-filter" ).click(function(){
        $( ".brand-filter-menu-dropdown").toggle();
    });

    $( "#btn-sub-dropdown-1" ).click(function(){
        $( "#sub-filter-dropdown-1" ).toggle();
        $( "#i-bottom-1" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-2" ).click(function(){
        $( "#sub-filter-dropdown-2" ).toggle();
        $( "#i-bottom-2" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-3" ).click(function(){
        $( "#sub-filter-dropdown-3" ).toggle();
        $( "#i-bottom-3" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-4" ).click(function(){
        $( "#sub-filter-dropdown-4" ).toggle();
        $( "#i-bottom-4" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-5" ).click(function(){
        $( "#sub-filter-dropdown-5" ).toggle();
        $( "#i-bottom-5" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-6" ).click(function(){
        $( "#sub-filter-dropdown-6" ).toggle();
        $( "#i-bottom-6" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-7" ).click(function(){
        $( "#sub-filter-dropdown-7" ).toggle();
        $( "#i-bottom-7" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-8" ).click(function(){
        $( "#sub-filter-dropdown-8" ).toggle();
        $( "#i-bottom-8" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-9" ).click(function(){
        $( "#sub-filter-dropdown-9" ).toggle();
        $( "#i-bottom-9" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-10" ).click(function(){
        $( "#sub-filter-dropdown-10" ).toggle();
        $( "#i-bottom-10" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-11" ).click(function(){
        $( "#sub-filter-dropdown-11" ).toggle();
        $( "#i-bottom-11" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-12" ).click(function(){
        $( "#sub-filter-dropdown-12" ).toggle();
        $( "#i-bottom-12" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-13" ).click(function(){
        $( "#sub-filter-dropdown-13" ).toggle();
        $( "#i-bottom-13" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-14" ).click(function(){
        $( "#sub-filter-dropdown-14" ).toggle();
        $( "#i-bottom-14" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-15" ).click(function(){
        $( "#sub-filter-dropdown-15" ).toggle();
        $( "#i-bottom-15" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-16" ).click(function(){
        $( "#sub-filter-dropdown-16" ).toggle();
        $( "#i-bottom-16" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-17" ).click(function(){
        $( "#sub-filter-dropdown-17" ).toggle();
        $( "#i-bottom-17" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-18" ).click(function(){
        $( "#sub-filter-dropdown-18" ).toggle();
        $( "#i-bottom-18" ).css("transform", "rotate(180deg)");
    });

    $( "#btn-sub-dropdown-19" ).click(function(){
        $( "#sub-filter-dropdown-19" ).toggle();
        $( "#i-bottom-19" ).css("transform", "rotate(180deg)");
    });

    $('#btn-minus').click(function () {
        var $input = $(this).parent().find('#num-count');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('#btn-plus').click(function () {
        var $input = $(this).parent().find('#num-count');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('#btn-minus-1').click(function () {
        var $input = $(this).parent().find('#num-count-1');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('#btn-plus-1').click(function () {
        var $input = $(this).parent().find('#num-count-1');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('#btn-dislike-1').click(function () {
        var $input = $(this).parent().find('#num-dislike-1');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('#btn-like-1').click(function () {
        var $input = $(this).parent().find('#num-like-1');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('#btn-dislike-2').click(function () {
        var $input = $(this).parent().find('#num-dislike-2');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('#btn-like-2').click(function () {
        var $input = $(this).parent().find('#num-like-2');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('#btn-dislike-3').click(function () {
        var $input = $(this).parent().find('#num-dislike-3');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('#btn-like-3').click(function () {
        var $input = $(this).parent().find('#num-like-3');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.img-review-user').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeBtnInside: false,
        gallery:{
            enabled:true,
        }
    });

    $("#btn-to-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#btn-to-top').fadeIn();
            } else {
                $('#btn-to-top').fadeOut();
            }
        });
        $('#btn-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    var price = parseInt($("#product-value").text());
    var quantity = parseInt($("#num-count").val());
    $("#num-count").change(function(){
       var quantity = parseInt($(this).val());
       var newPrice = price*quantity;
       $("#product-value").text(newPrice);
    }); 

    var price = parseInt($("#product-value-1").text());
    var quantity = parseInt($("#num-count-1").val());
    $("#num-count-1").change(function(){
       var quantity = parseInt($(this).val());
       var newPrice = price*quantity;
       $("#product-value-1").text(newPrice);
    }); 

    // format = String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    
});