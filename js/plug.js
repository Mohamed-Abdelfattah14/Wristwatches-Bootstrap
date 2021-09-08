var scrollBotton = $(".scroll-top");

$(window).scroll(function()
{
    $(this).scrollTop() >= 500 ? scrollBotton.show() : scrollBotton.hide();
});

scrollBotton.click(function()
{
    $("html,body").animate({ scrollTop: 0 },600);
});