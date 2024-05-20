// header-typewriter---------------------------------------------
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 1;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 600;
    }
  
    setTimeout(function() {
    that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
  };

  //Number counter-------------------------------------------------------
  const counts = document.querySelectorAll(".count");
        const speed = 397;
        counts.forEach((count) => {
          function upDate() {
            const target = Number(count.getAttribute("data-target"));
            const counter = Number(count.innerText);
            const inc = target / speed;
            if (counter < target) {
              count.innerText = Math.floor(inc + counter);
              setTimeout(upDate, 15);
            } else {
              count.innerText = target;
            }
          }
          upDate();
        });

// owl carousel---------------------------------------------------------
        var owl = $('#owlcarouselone');
owl.owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay:1,
  nav:true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
      margin: 20
    }
  }
});

//-------------------------------------------------------------------------
// scroll-top
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

$(document).ready(function () {

    $("[data-fancybox]").fancybox({

        // Optional settings

    });

});

//-------------owlcarousel-2--------------------
$(document).ready(function() {
  var owl = $('.owl-carouselthird');
  owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      960: {
        items: 5
      },
      1200: {
        items: 4
      }
    }
  });
  owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY > 0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });
})
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
!function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
  function b(b) {
      var g = b || window.event
        , h = i.call(arguments, 1)
        , j = 0
        , l = 0
        , m = 0
        , n = 0
        , o = 0
        , p = 0;
      if (b = a.event.fix(g),
      b.type = "mousewheel",
      "detail"in g && (m = -1 * g.detail),
      "wheelDelta"in g && (m = g.wheelDelta),
      "wheelDeltaY"in g && (m = g.wheelDeltaY),
      "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX),
      "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
      m = 0),
      j = 0 === m ? l : m,
      "deltaY"in g && (m = -1 * g.deltaY,
      j = m),
      "deltaX"in g && (l = g.deltaX,
      0 === m && (j = -1 * l)),
      0 !== m || 0 !== l) {
          if (1 === g.deltaMode) {
              var q = a.data(this, "mousewheel-line-height");
              j *= q,
              m *= q,
              l *= q
          } else if (2 === g.deltaMode) {
              var r = a.data(this, "mousewheel-page-height");
              j *= r,
              m *= r,
              l *= r
          }
          if (n = Math.max(Math.abs(m), Math.abs(l)),
          (!f || f > n) && (f = n,
          d(g, n) && (f /= 40)),
          d(g, n) && (j /= 40,
          l /= 40,
          m /= 40),
          j = Math[j >= 1 ? "floor" : "ceil"](j / f),
          l = Math[l >= 1 ? "floor" : "ceil"](l / f),
          m = Math[m >= 1 ? "floor" : "ceil"](m / f),
          k.settings.normalizeOffset && this.getBoundingClientRect) {
              var s = this.getBoundingClientRect();
              o = b.clientX - s.left,
              p = b.clientY - s.top
          }
          return b.deltaX = l,
          b.deltaY = m,
          b.deltaFactor = f,
          b.offsetX = o,
          b.offsetY = p,
          b.deltaMode = 0,
          h.unshift(b, j, l, m),
          e && clearTimeout(e),
          e = setTimeout(c, 200),
          (a.event.dispatch || a.event.handle).apply(this, h)
      }
  }
  function c() {
      f = null
  }
  function d(a, b) {
      return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
  }
  var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
  if (a.event.fixHooks)
      for (var j = g.length; j; )
          a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = a.event.special.mousewheel = {
      version: "3.1.11",
      setup: function() {
          if (this.addEventListener)
              for (var c = h.length; c; )
                  this.addEventListener(h[--c], b, !1);
          else
              this.onmousewheel = b;
          a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
          a.data(this, "mousewheel-page-height", k.getPageHeight(this))
      },
      teardown: function() {
          if (this.removeEventListener)
              for (var c = h.length; c; )
                  this.removeEventListener(h[--c], b, !1);
          else
              this.onmousewheel = null;
          a.removeData(this, "mousewheel-line-height"),
          a.removeData(this, "mousewheel-page-height")
      },
      getLineHeight: function(b) {
          var c = a(b)["offsetParent"in a.fn ? "offsetParent" : "parent"]();
          return c.length || (c = a("body")),
          parseInt(c.css("fontSize"), 10)
      },
      getPageHeight: function(b) {
          return a(b).height()
      },
      settings: {
          adjustOldDeltas: !0,
          normalizeOffset: !0
      }
  };
  a.fn.extend({
      mousewheel: function(a) {
          return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
      },
      unmousewheel: function(a) {
          return this.unbind("mousewheel", a)
      }
  })
});
