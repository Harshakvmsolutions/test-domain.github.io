// header-typewriter
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

  //Number counter

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

        // carousel


        var owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay:1,
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
      nav: false,
      loop: true,
      margin: 20
    }
  }
});
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})