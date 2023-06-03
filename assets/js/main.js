$(document).ready(function(){
    $('.navbar-toggle').click(function(e){
        $('.navbar-mobile').toggleClass('translate-x-[475px]')
        $(this).find('span:nth-child(1)').toggleClass('-translate-y-2.5 rotate-45')
        $(this).find('span:nth-child(2)').toggleClass('opacity-0')
        $(this).find('span:nth-child(3)').toggleClass('translate-y-2.5 -rotate-45')
        e.stopPropagation()
    })

    $('.navbar-mobile').click(function(e){
        e.stopPropagation();
    })

    $(document).click(function() {
        $('.navbar-mobile').addClass('translate-x-[475px]')
        $(this).find('span:nth-child(1)').addClass('-translate-y-2.5').removeClass('rotate-45')
        $(this).find('span:nth-child(2)').removeClass('opacity-0')
        $(this).find('span:nth-child(3)').addClass('translate-y-2.5').removeClass('-rotate-45') 
    });

    $('.mobile-navbar-link').each(function(){
        $(this).click(function(){
            $('.navbar-mobile').addClass('translate-x-[475px]')
            $('.navbar-toggle').find('span:nth-child(1)').addClass('-translate-y-2.5').removeClass('rotate-45')
            $('.navbar-toggle').find('span:nth-child(2)').removeClass('opacity-0')
            $('.navbar-toggle').find('span:nth-child(3)').addClass('translate-y-2.5').removeClass('-rotate-45') 
        })
    })
})