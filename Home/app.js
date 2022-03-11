(function($){
$(".flix-carousel .next_btn").on("click",function() {
$(this).nextAll(".flix-scroll-x").animate({
scrollLeft: $(this).nextAll(".flix-scroll-x").scrollLeft() + $(this).nextAll(".flix-scroll-x").width() - 50}, 200)}),
$(".flix-carousel .prev_btn").on("click",function() {
$(this).nextAll(".flix-scroll-x").animate({
scrollLeft: $(this).nextAll(".flix-scroll-x").scrollLeft() - $(this).nextAll(".flix-scroll-x").width() - 50}, 200)}),
$(function(){
$(".flix-scroll-x").scroll(function() {
var t = $(this).outerWidth(),
e = $(this)[0].scrollWidth,
i = $(this).scrollLeft();
e - t === i ? $(this).prevAll(".next_btn").hide() : $(this).prevAll(".next_btn").show(), 0 === i ? $(this).prevAll(".prev_btn").hide() : $(this).prevAll(".prev_btn").show()})}),
$("#myCarousel").carousel({interval: 3e3}),
$(".carousel .carousel-item").each(function() {
var t = $(this).next();
t.length || (t = $(this).siblings(":first")), t.children(":first-child").clone().appendTo($(this));
for (var e = 0; e < 4; e++)(t = t.next()).length || (t = $(this).siblings(":first")), t.children(":first-child").clone().appendTo($(this))});})(jQuery);
