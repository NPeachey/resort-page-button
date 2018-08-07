$(document).ready(function() {
  $("button#green").click(function() {
    var clicks = $(this).data('clicks');
  if (clicks) {
    $("body").removeClass();
    $("body").addClass("black-background");
  } else {
    $("body").removeClass();
    $("body").addClass("white-background");
  }
  $(this).data("clicks", !clicks);
  });
});
