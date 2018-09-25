$(window).on("mousewheel", function() {
  if (!$(".dots-small").hasClass("animate-small-dots")) {
    $(".dots-small").addClass("animate-small-dots");
    setTimeout(function() {
      $(".dots-small").removeClass("animate-small-dots");
    }, 1000);
  }
  if (!$(".dots-big").hasClass("animate-big-dots")) {
    $(".dots-big").addClass("animate-big-dots");
    setTimeout(function() {
      $(".dots-big").removeClass("animate-big-dots");
    }, 1000);
  }
  if (!$(".lines-big").hasClass("animate-big-lines")) {
    $(".lines-big").addClass("animate-big-lines");
    setTimeout(function() {
      $(".lines-big").removeClass("animate-big-lines");
    }, 1000);
  }
  if (!$(".lines-small").hasClass("animate-small-lines")) {
    $(".lines-small").addClass("animate-small-lines");
    setTimeout(function() {
      $(".lines-small").removeClass("animate-small-lines");
    }, 1000);
  }
});

(function drawHeader() {
  function animate({ draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // calculate the current animation state
      let progress = timeFraction;

      draw(progress); // draw it

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      } else {
      }
    });
  };
  var firstHeader = "INNOVATIVE";
  var secondHeader = "EFFECTIVE";
  var thirdHeader = "ENGAGING";

  var from = 0;
  var target = $(".animated-header");

  animate({
    duration: 1500,
    draw: function(progress) {
      var result = (firstHeader.length - from) * progress + from;
      target.text(firstHeader.substr(0, Math.ceil(result)));
    }
  });
  setTimeout(function() {
    animate({
      duration: 1000,
      draw: function(progress) {
        var result = (from - firstHeader.length) * progress + firstHeader.length;
        target.text(firstHeader.substr(0, Math.ceil(result)));
      }
    });
    setTimeout(function() {
      animate({
        duration: 1500,
        draw: function(progress) {
          var result = (secondHeader.length - from) * progress + from;
          target.text(secondHeader.substr(0, Math.ceil(result)));
        }
      });
      setTimeout(function() {
        animate({
          duration: 1000,
          draw: function(progress) {
            var result =
              (from - secondHeader.length) * progress + secondHeader.length;
            target.text(secondHeader.substr(0, Math.ceil(result)));
          }
        });
        setTimeout(function() {
          animate({
            duration: 1500,
            draw: function(progress) {
              var result = (thirdHeader.length - from) * progress + from;
              target.text(thirdHeader.substr(0, Math.ceil(result)));
            }
          });
        }, 1100);
      }, 5000);
    }, 1100);
  }, 5000);
})();
