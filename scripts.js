var btn = $("#topButton");
//we want to render the button at the point of 500 in top
$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass("show");
  } else {
    //if not... button dissapears
    btn.removeClass("show");
  }
});

//button's function (more than 1 handle)
btn.on("click", function(e) {
  e.preventDefault(); //for warnings
  $("html, body").animate({ scrollTop: 0 }, "300");
});
